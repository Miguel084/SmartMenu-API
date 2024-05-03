FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["SmartMenu.Server/SmartMenu.Server.csproj", "SmartMenu.Server/"]
COPY ["smartmenu.client/smartmenu.client.esproj", "smartmenu.client/"]
RUN dotnet restore "SmartMenu.Server/SmartMenu.Server.csproj"
COPY . .

RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

FROM build AS node-build
WORKDIR /app
COPY smartmenu.client/package*.json ./
RUN npm install
COPY ../smartmenu.client .
WORKDIR "/src/SmartMenu.Server"
RUN dotnet build "SmartMenu.Server.csproj" -c $BUILD_CONFIGURATION -o /app/build
RUN dotnet publish "SmartMenu.Server.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
USER $APP_UID
WORKDIR /app
COPY --from=node-build /app/publish .
COPY --from=node-build /app .
ENTRYPOINT ["dotnet", "SmartMenu.Server.dll"]