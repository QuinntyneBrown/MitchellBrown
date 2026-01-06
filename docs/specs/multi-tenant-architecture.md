# Multi-Tenant Architecture Specification for MitchellBrown

## Overview

This document describes the multi-tenant architecture implemented in MitchellBrown, enabling complete data isolation between different tenants (organizations) sharing the same application instance.

## Architecture

### Tenant Isolation Strategy

MitchellBrown uses a **shared database with tenant ID column** approach, where:

- All tenant data is stored in a single database
- Each record includes a `TenantId` column for tenant identification
- EF Core global query filters ensure automatic tenant data isolation
- All queries are automatically scoped to the current tenant

### Components

#### 1. ITenantContext Interface (`MitchellBrown.Core/ITenantContext.cs`)

Defines the contract for accessing the current tenant context:

```csharp
public interface ITenantContext
{
    Guid TenantId { get; }
    bool HasTenant { get; }
}
```

#### 2. TenantContext Service (`MitchellBrown.Infrastructure/Services/TenantContext.cs`)

Implements tenant resolution from:
- JWT token claims (`tenant_id` claim)
- HTTP header fallback (`X-Tenant-Id` header)

#### 3. Entity Tenant Properties

All aggregate root entities should include a `TenantId` property for tenant isolation:

- **Inquiry**: Add `TenantId` property (Guid type, required)
- **Service**: Add `TenantId` property (Guid type, required)

*Note: These properties need to be added to the entity classes as part of implementing multi-tenancy.*

#### 4. Global Query Filters

The `MitchellBrownContext` DbContext applies automatic query filters. The ITenantContext should be injected via constructor:

```csharp
public class MitchellBrownContext : DbContext, IMitchellBrownContext
{
    private readonly ITenantContext _tenantContext;

    public MitchellBrownContext(DbContextOptions<MitchellBrownContext> options, ITenantContext tenantContext)
        : base(options)
    {
        _tenantContext = tenantContext;
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Inquiry>().HasQueryFilter(e => e.TenantId == _tenantContext.TenantId);
        modelBuilder.Entity<Service>().HasQueryFilter(e => e.TenantId == _tenantContext.TenantId);
    }
}
```

## Tenant Resolution Flow

```
1. HTTP Request arrives
   ↓
2. JWT Token extracted from Authorization header
   ↓
3. TenantContext reads tenant_id claim from token
   ↓
4. If no JWT, fallback to X-Tenant-Id header
   ↓
5. TenantId is available throughout the request
   ↓
6. EF Core query filters automatically scope all queries
```

## API Authentication

### JWT Token Structure

Tokens must include a `tenant_id` claim:

```json
{
  "sub": "user-id",
  "tenant_id": "your-tenant-guid-here",
  "iat": 1234567890,
  "exp": 1234571490
}
```

*Note: Replace `your-tenant-guid-here` with the actual tenant GUID.*

### Header-Based Tenant Resolution

For scenarios where JWT is not available, clients can send:

```
X-Tenant-Id: your-tenant-guid-here
```

*Note: Replace `your-tenant-guid-here` with the actual tenant GUID.*

## Database Schema

### Tenant ID Column

All tenant-scoped tables include:

| Column | Type | Description |
|--------|------|-------------|
| TenantId | UNIQUEIDENTIFIER | Foreign key to tenant |

### Index Recommendations

For optimal performance, composite indexes should include TenantId:

```sql
CREATE INDEX IX_EntityName_TenantId ON EntityName(TenantId);
CREATE INDEX IX_EntityName_TenantId_UserId ON EntityName(TenantId, UserId);
```

## Security Considerations

### Data Isolation Guarantees

1. **Query-Level Isolation**: EF Core global filters prevent cross-tenant data access
2. **Write Protection**: Commands should validate TenantId before persisting
3. **No Direct SQL Access**: Raw SQL queries must include tenant filters manually

### Audit Trail

All data modifications should log:
- TenantId
- UserId
- Timestamp
- Operation type

## Migration Guide

### Adding TenantId to Existing Data

1. Add TenantId column with default value
2. Update existing records with appropriate TenantId
3. Remove default constraint
4. Add non-null constraint

```sql
ALTER TABLE EntityName ADD TenantId UNIQUEIDENTIFIER NULL;
UPDATE EntityName SET TenantId = 'default-tenant-id';
ALTER TABLE EntityName ALTER COLUMN TenantId UNIQUEIDENTIFIER NOT NULL;
```

## Configuration

### appsettings.json

```json
{
  "MultiTenancy": {
    "Enabled": true,
    "DefaultTenantId": "your-tenant-guid-here",
    "RequireTenant": true
  }
}
```

*Note: Replace `your-tenant-guid-here` with an actual GUID for your default tenant (e.g., generated using `Guid.NewGuid()`).*

## Testing

### Unit Tests

Mock ITenantContext for isolated testing:

```csharp
var mockTenantContext = new Mock<ITenantContext>();
mockTenantContext.Setup(x => x.TenantId).Returns(testTenantId);
mockTenantContext.Setup(x => x.HasTenant).Returns(true);
```

### Integration Tests

Use test fixtures with known tenant IDs:

```csharp
public class TenantIsolationTests
{
    private readonly Guid _tenantA = Guid.Parse("11111111-1111-1111-1111-111111111111");
    private readonly Guid _tenantB = Guid.Parse("22222222-2222-2222-2222-222222222222");
    
    [Fact]
    public async Task TenantA_CannotSee_TenantB_Data()
    {
        // Test implementation
    }
}
```

## Performance Considerations

1. **Index TenantId**: All tenant-scoped tables should have TenantId indexes
2. **Partition by Tenant**: Consider table partitioning for large datasets
3. **Cache by Tenant**: Implement tenant-aware caching strategies

## Use Cases for MitchellBrown

### Potential Multi-Tenant Scenarios

1. **White-Label Solution**: Deploy the same marketing website for multiple insurance agents or financial advisors
2. **Franchise Model**: Support multiple Mitchell Brown offices or franchisees
3. **Partner Network**: Enable partner agents to use the platform with their own branding
4. **Regional Offices**: Separate data for different geographic regions while sharing the same codebase

### Tenant-Specific Customization

- **Branding**: Logo, colors, and themes per tenant
- **Content**: Service offerings and descriptions per tenant
- **Inquiries**: Customer inquiries isolated by tenant
- **Analytics**: Usage and conversion metrics per tenant

## Future Enhancements

1. **Tenant Management API**: CRUD operations for tenants
2. **Tenant Settings**: Per-tenant configuration
3. **Usage Tracking**: Tenant-level resource consumption
4. **Cross-Tenant Reporting**: Admin-level aggregate reports
5. **Tenant Onboarding**: Self-service tenant registration and setup
