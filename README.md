<div align="center">
  <img src="assets/logo_blue.png" alt="Mitchell Brown Logo" width="200"/>
</div>

# MitchellBrown

A comprehensive marketing website and customer inquiry management system for Mitchell Brown, a life insurance agent and financial planning professional.

## Overview

MitchellBrown is a full-stack web application that serves two primary purposes:

1. **Public-facing Marketing Site** - Showcases life insurance and financial planning services, allowing potential customers to learn about offerings and submit inquiries
2. **Administrative Platform** - Enables the site owner to manage website content and respond to customer inquiries

The system implements a clean, three-tier backend architecture following Domain-Driven Design (DDD) principles, paired with a modern Angular-based frontend.

## Architecture

### Backend (.NET 10.0)

The backend is organized into multiple projects following clean architecture principles:

- **MitchellBrown.Core** - Contains domain models and business logic
  - Aggregate models organized by bounded context (e.g., Inquiry)
  - Core business services
  - `IMitchellBrownContext` interface for data access abstraction

- **MitchellBrown.Infrastructure** - Contains data access implementation and external service integrations
  - `MitchellBrownContext` DbContext implementation
  - Entity Framework Core configurations
  - Database migrations and seeding
  - Infrastructure services

- **MitchellBrown.Api** - ASP.NET Core Web API exposing HTTP endpoints
  - RESTful API controllers
  - OpenAPI/Swagger documentation
  - CORS configuration for frontend integration
  - Integrated with Aspire ServiceDefaults for observability

- **MitchellBrown.ServiceDefaults** - Shared Aspire service configuration
  - OpenTelemetry configuration for distributed tracing
  - Health checks configuration
  - Service discovery setup
  - Resilience patterns (retry, circuit breaker, etc.)

- **MitchellBrown.AppHost** - .NET Aspire orchestrator
  - Orchestrates all application services
  - Configures service-to-service communication
  - Provides local development dashboard
  - Enables deployment to Azure Container Apps

### Frontend (Angular 21)

- **MitchellBrown.WebApp** - Modern Angular single-page application
  - Responsive, mobile-first design
  - Angular Material UI components
  - RxJS for reactive state management
  - Comprehensive testing with Vitest and Playwright

## Technology Stack

### Backend
- .NET 10.0
- ASP.NET Core Web API
- Entity Framework Core 10.0
- Swagger/OpenAPI for API documentation
- xUnit for testing
- .NET Aspire 9.5 for orchestration and observability

### Frontend
- Angular 21
- Angular Material (Material Design 3)
- RxJS for reactive programming
- TypeScript 5.9
- Vitest for unit testing
- Playwright for E2E testing

### Database
- SQL Server Express (default configuration)

### Cloud & DevOps
- .NET Aspire for orchestration and deployment
- Azure Container Apps (recommended deployment target)
- Azure Application Insights for monitoring
- OpenTelemetry for distributed tracing

## Project Structure

```
MitchellBrown/
├── infra/
│   ├── main.bicep                 # Azure IaC entrypoint (Static Web App)
│   └── modules/
│       └── mitchellBrownSwa.bicep # SWA module (Microsoft.Web/staticSites)
├── src/
│   ├── MitchellBrown.Api/          # Web API controllers and endpoints
│   ├── MitchellBrown.AppHost/      # Aspire orchestrator (new)
│   ├── MitchellBrown.Core/         # Domain models and business logic
│   │   ├── Models/                # DDD aggregate roots
│   │   │   └── Inquiry/           # Inquiry domain model
│   │   └── Services/              # Core business services
│   ├── MitchellBrown.Infrastructure/ # Data access and infrastructure
│   │   └── Services/              # DbContext implementation
│   ├── MitchellBrown.ServiceDefaults/ # Aspire service defaults (new)
│   └── MitchellBrown.WebApp/       # Angular frontend application
│       ├── src/
│       │   ├── app/
│       │   │   ├── components/    # Reusable UI components
│       │   │   ├── pages/         # Route-level page components
│       │   │   └── services/      # Frontend services
│       │   └── index.html
│       └── e2e/                   # End-to-end tests
├── test/
│   ├── MitcellBrown.Api.Tests/     # API unit tests (note: typo in project name)
│   ├── MitchellBrown.Infrastructure.Tests/ # Infrastructure unit tests
│   └── MitchellBrown.WebApp.Tests/ # Frontend tests
├── docs/
│   └── specs/                      # Detailed requirements documentation
└── MitchellBrown.sln              # Visual Studio solution file
```

## Getting Started

### Prerequisites

- [.NET 10.0 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [SQL Server Express](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) or SQL Server
- [Angular CLI](https://angular.io/cli) (optional, for Angular-specific commands)
- [Azure CLI](https://learn.microsoft.com/cli/azure/) (optional, for deploying Bicep)
- [Docker Desktop](https://www.docker.com/products/docker-desktop) (optional, for running with Aspire)

## Running with .NET Aspire

This project now includes .NET Aspire for orchestration and deployment to Azure. Aspire makes it easy to run the entire application stack locally and deploy to Azure Container Apps.

### What is Aspire?

.NET Aspire is an opinionated, cloud-ready stack for building observable, production-ready, distributed applications. It provides:
- Service orchestration and discovery
- Integrated telemetry (OpenTelemetry)
- Health checks
- Easy deployment to Azure Container Apps

### Running the Application with Aspire

1. Navigate to the AppHost directory:
   ```bash
   cd src/MitchellBrown.AppHost
   ```

2. Run the Aspire AppHost:
   ```bash
   dotnet run
   ```

3. Open the Aspire Dashboard in your browser (URL will be displayed in the console, typically `http://localhost:15248`)

The AppHost will automatically:
- Start the API project on a configured port
- Start the Angular web app using `npm start`
- Provide a unified dashboard for monitoring all services
- Configure service discovery between components

### Deploying to Azure with Aspire

To deploy the application to Azure Container Apps:

1. Install the Azure Developer CLI:
   ```bash
   # Windows (winget)
   winget install microsoft.azd
   
   # macOS (Homebrew)
   brew tap azure/azd && brew install azd
   
   # Linux
   curl -fsSL https://aka.ms/install-azd.sh | bash
   ```

2. Login to Azure:
   ```bash
   azd auth login
   ```

3. Deploy from the AppHost directory:
   ```bash
   cd src/MitchellBrown.AppHost
   azd init
   azd up
   ```

This will provision and deploy:
- Azure Container Apps for the API
- Azure Container Apps for the Angular frontend
- Azure Application Insights for telemetry
- All necessary supporting infrastructure

## Infrastructure (Azure Static Web Apps)

Infrastructure-as-code lives in:

- `infra/main.bicep` (entrypoint)
- `infra/modules/mitchellBrownSwa.bicep` (module that provisions `Microsoft.Web/staticSites`)

The module supports two modes:

1. **Provision-only** (default): leave `repositoryUrl`, `branch`, and `repositoryToken` empty.
2. **GitHub integration**: set `repositoryUrl`, `branch`, and `repositoryToken` to have Azure generate the GitHub Actions workflow and configure secrets.

Recommended values for this repo when using GitHub integration:

- `appLocation`: `src/MitchellBrown.WebApp`
- `outputLocation`: `dist/mitchell-brown`
- `apiLocation`: empty (unless you add a SWA API)

Example (GitHub integration):

```bash
az deployment group create \
   --resource-group <rg-name> \
   --template-file infra/main.bicep \
   --parameters \
      staticWebAppName=<swa-name> \
      repositoryUrl=<https-github-repo-url> \
      branch=main \
      repositoryToken=<github-token> \
      appLocation=src/MitchellBrown.WebApp \
      outputLocation=dist/mitchell-brown
```

Keep `repositoryToken` in a secret store (e.g., pipeline secret variable); dont commit it.

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/QuinntyneBrown/MitchellBrown.git
   cd MitchellBrown
   ```

2. Restore .NET dependencies:
   ```bash
   dotnet restore
   ```

3. Build the solution:
   ```bash
   dotnet build
   ```

4. Run the API (from the API project directory):
   ```bash
   cd src/MitchellBrown.Api
   dotnet run
   ```

   The API will be available at `https://localhost:5001` (or as configured in `launchSettings.json`)

### Frontend Setup

1. Navigate to the web app directory:
   ```bash
   cd src/MitchellBrown.WebApp
   ```

2. Install npm dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The application will be available at `http://127.0.0.1:4200`

## Development

### Running Tests

#### Backend Tests
```bash
# Run all tests
dotnet test

# Run tests for a specific project
dotnet test test/MitcellBrown.Api.Tests/  # Note: actual directory name has typo
dotnet test test/MitchellBrown.Infrastructure.Tests/
```

#### Frontend Tests
```bash
cd src/MitchellBrown.WebApp

# Run unit tests with Vitest
npm test

# Run unit tests in watch mode
npm run test:watch

# Run unit tests with coverage
npm run test:coverage

# Run E2E tests with Playwright
npm run e2e

# Run E2E tests in UI mode
npm run e2e:ui

# Run E2E tests in headed mode
npm run e2e:headed
```

### Building for Production

#### Backend
```bash
dotnet build --configuration Release
```

#### Frontend
```bash
cd src/MitchellBrown.WebApp
npm run build
```

## API Documentation

When running the API in development mode, Swagger UI is available at:
- `https://localhost:5001/swagger` (or your configured port)

## Features

The system includes the following key features:

- **Service Showcase** - Display life insurance and financial planning services
- **Contact & Inquiry Management** - Customer inquiry submission and management
- **Content Management** - Administrative interface for content updates
- **Authentication & Authorization** - Secure access control for administrative features
- **Responsive Design** - Mobile-first, accessible user interface
- **SEO Optimization** - Search engine friendly architecture

For detailed feature requirements, see the [documentation](./docs/specs/README.md).

## Architecture Principles

The system follows these key architectural principles:

- **No Repository Pattern** - Direct use of `IMitchellBrownContext` for data access
- **Clean Separation of Concerns** - Infrastructure layer separated from domain logic
- **Simplified Architecture** - Three-tier backend (Core + Infrastructure + Api) following clean architecture
- **Flattened Namespaces** - Namespaces match physical file locations
- **One Type Per File** - Each class, enum, or record has its own file
- **Simplicity First** - Prefer straightforward solutions over complex patterns

For complete architectural specifications, see [implementation-specs.md](./docs/specs/implementation-specs.md).

## Contributing

This is a private project for Mitchell Brown. For questions or issues, please contact the repository owner.

## License

Copyright (c) Quinntyne Brown. All Rights Reserved.
Licensed under the MIT License. See License.txt in the project root for license information.

