# MitchellBrown

A multi-tier .NET application following Domain-Driven Design principles with clean architecture.

## Project Structure

### Backend Projects

- **MitchellBrown.Core** - Contains domain models, aggregates, and business logic
  - Domain aggregates in `Model` folder
  - `IMitchellBrownContext` interface for data access
  - Core services and business logic

- **MitchellBrown.Infrastructure** - Contains data access implementation and external service integrations
  - `MitchellBrownContext` implementation of `IMitchellBrownContext`
  - Entity Framework Core DbContext
  - Database migrations and configurations
  - Infrastructure services

- **MitchellBrown.Api** - RESTful API layer
  - API controllers
  - MediatR commands and queries
  - DTOs and API models

### Frontend Projects

- **MitchellBrown.WebApp** - Angular-based web application

## Architecture

The project follows a clean architecture pattern with clear separation of concerns:
- Core layer contains business logic and domain models
- Infrastructure layer handles data persistence and external integrations
- API layer provides HTTP endpoints for client consumption
- No Repository pattern - direct use of `IMitchellBrownContext` for data access

## Getting Started

### Prerequisites
- .NET 10.0 SDK
- SQL Server Express (for local development)
- Node.js and npm (for frontend)

### Building the Solution
```bash
dotnet build
```

### Running Tests
```bash
dotnet test
```

## Documentation

Detailed implementation specifications and requirements can be found in the `docs/specs/` directory.
