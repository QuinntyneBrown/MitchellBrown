# syntax=docker/dockerfile:1
# Build from repo root with:
#   docker build -f src/MitchellBrown.Api/Dockerfile .

FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

# Copy project files first for better layer caching
COPY MitchellBrown.sln ./
COPY src/MitchellBrown.Api/MitchellBrown.Api.csproj src/MitchellBrown.Api/
COPY src/MitchellBrown.Infrastructure/MitchellBrown.Infrastructure.csproj src/MitchellBrown.Infrastructure/
COPY src/MitchellBrown.Core/MitchellBrown.Core.csproj src/MitchellBrown.Core/

RUN dotnet restore src/MitchellBrown.Api/MitchellBrown.Api.csproj

# Copy the remaining source
COPY src/ src/

WORKDIR /src/src/MitchellBrown.Api
RUN dotnet publish MitchellBrown.Api.csproj -c Release -o /app/publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app

# Container Apps commonly routes traffic to 8080
ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080

COPY --from=build /app/publish ./
ENTRYPOINT ["dotnet", "MitchellBrown.Api.dll"]
