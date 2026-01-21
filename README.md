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

## Technology Stack

- **Backend**: .NET 9.0, ASP.NET Core Web API, Entity Framework Core
- **Frontend**: Angular, Angular Material, RxJS, TypeScript
- **Orchestration**: .NET Aspire 9.5
- **Database**: SQL Server Express
- **Testing**: xUnit (backend), Vitest & Playwright (frontend)

## Getting Started

### Prerequisites

- [.NET 9.0 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [SQL Server Express](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) or SQL Server

### Running the Application

This project uses .NET Aspire for orchestration. Aspire starts both the API and Angular frontend with a single command.

1. Clone the repository:
   ```bash
   git clone https://github.com/QuinntyneBrown/MitchellBrown.git
   cd MitchellBrown
   ```

2. Install npm dependencies for the frontend:
   ```bash
   cd src/MitchellBrown.WebApp
   npm install
   cd ../..
   ```

3. Run the application with Aspire:
   ```bash
   cd src/MitchellBrown.AppHost
   dotnet run
   ```

The AppHost will automatically:
- Start the .NET API project
- Start the Angular web app using `npm start`
- Configure service discovery between components

Services will be available at:
- **Web App**: http://localhost:4200
- **API**: Port shown in console output

## Project Structure

```
MitchellBrown/
├── src/
│   ├── MitchellBrown.Api/           # Web API controllers and endpoints
│   ├── MitchellBrown.AppHost/       # Aspire orchestrator
│   ├── MitchellBrown.Core/          # Domain models and business logic
│   ├── MitchellBrown.Infrastructure/# Data access and infrastructure
│   ├── MitchellBrown.ServiceDefaults/# Aspire service defaults
│   └── MitchellBrown.WebApp/        # Angular frontend application
├── test/                            # Test projects
├── docs/                            # Documentation
└── MitchellBrown.sln               # Visual Studio solution file
```

## Development

### Running Tests

```bash
# Backend tests
dotnet test

# Frontend tests
cd src/MitchellBrown.WebApp
npm test           # Unit tests with Vitest
npm run e2e        # E2E tests with Playwright
```

### Building for Production

```bash
# Backend
dotnet build --configuration Release

# Frontend
cd src/MitchellBrown.WebApp
npm run build
```

## Deploying to Azure

Deploy to Azure Container Apps using the Azure Developer CLI:

1. Install Azure Developer CLI:
   ```bash
   # Windows
   winget install microsoft.azd

   # macOS
   brew tap azure/azd && brew install azd

   # Linux
   curl -fsSL https://aka.ms/install-azd.sh | bash
   ```

2. Deploy:
   ```bash
   azd auth login
   cd src/MitchellBrown.AppHost
   azd init
   azd up
   ```

## API Documentation

Swagger UI is available when running the API at `/swagger`.

## License

Copyright (c) Quinntyne Brown. All Rights Reserved.
Licensed under the MIT License. See License.txt in the project root for license information.
