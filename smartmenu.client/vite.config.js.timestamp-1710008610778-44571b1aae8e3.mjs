// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/alegr/source/repos/SmartMenu-API/smartmenu.client/node_modules/vite/dist/node/index.js";
import plugin from "file:///C:/Users/alegr/source/repos/SmartMenu-API/smartmenu.client/node_modules/@vitejs/plugin-react/dist/index.mjs";
import fs from "fs";
import path from "path";
import child_process from "child_process";
import { env } from "process";
var __vite_injected_original_import_meta_url = "file:///C:/Users/alegr/source/repos/SmartMenu-API/smartmenu.client/vite.config.js";
var baseFolder = env.APPDATA !== void 0 && env.APPDATA !== "" ? `${env.APPDATA}/ASP.NET/https` : `${env.HOME}/.aspnet/https`;
var certificateName = "smartmenu.client";
var certFilePath = path.join(baseFolder, `${certificateName}.pem`);
var keyFilePath = path.join(baseFolder, `${certificateName}.key`);
if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
  if (0 !== child_process.spawnSync("dotnet", [
    "dev-certs",
    "https",
    "--export-path",
    certFilePath,
    "--format",
    "Pem",
    "--no-password"
  ], { stdio: "inherit" }).status) {
    throw new Error("Could not create certificate.");
  }
}
var target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` : env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(";")[0] : "https://localhost:7265";
var vite_config_default = defineConfig({
  plugins: [plugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  server: {
    proxy: {
      "^/weatherforecast": {
        target,
        secure: false
      },
      "^/pingauth": {
        target: "https://localhost:7109",
        secure: false
      },
      "^/register": {
        target: "https://localhost:7109",
        secure: false
      },
      "^/login": {
        target: "https://localhost:7109",
        secure: false
      },
      "^/logout": {
        target: "https://localhost:7109",
        secure: false
      }
    },
    port: 5173,
    https: {
      key: fs.readFileSync(keyFilePath),
      cert: fs.readFileSync(certFilePath)
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhbGVnclxcXFxzb3VyY2VcXFxccmVwb3NcXFxcU21hcnRNZW51LUFQSVxcXFxzbWFydG1lbnUuY2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhbGVnclxcXFxzb3VyY2VcXFxccmVwb3NcXFxcU21hcnRNZW51LUFQSVxcXFxzbWFydG1lbnUuY2xpZW50XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9hbGVnci9zb3VyY2UvcmVwb3MvU21hcnRNZW51LUFQSS9zbWFydG1lbnUuY2xpZW50L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnO1xyXG5cclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBwbHVnaW4gZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IGNoaWxkX3Byb2Nlc3MgZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XHJcbmltcG9ydCB7IGVudiB9IGZyb20gJ3Byb2Nlc3MnO1xyXG5cclxuY29uc3QgYmFzZUZvbGRlciA9XHJcbiAgICBlbnYuQVBQREFUQSAhPT0gdW5kZWZpbmVkICYmIGVudi5BUFBEQVRBICE9PSAnJ1xyXG4gICAgICAgID8gYCR7ZW52LkFQUERBVEF9L0FTUC5ORVQvaHR0cHNgXHJcbiAgICAgICAgOiBgJHtlbnYuSE9NRX0vLmFzcG5ldC9odHRwc2A7XHJcblxyXG5jb25zdCBjZXJ0aWZpY2F0ZU5hbWUgPSBcInNtYXJ0bWVudS5jbGllbnRcIjtcclxuY29uc3QgY2VydEZpbGVQYXRoID0gcGF0aC5qb2luKGJhc2VGb2xkZXIsIGAke2NlcnRpZmljYXRlTmFtZX0ucGVtYCk7XHJcbmNvbnN0IGtleUZpbGVQYXRoID0gcGF0aC5qb2luKGJhc2VGb2xkZXIsIGAke2NlcnRpZmljYXRlTmFtZX0ua2V5YCk7XHJcblxyXG5pZiAoIWZzLmV4aXN0c1N5bmMoY2VydEZpbGVQYXRoKSB8fCAhZnMuZXhpc3RzU3luYyhrZXlGaWxlUGF0aCkpIHtcclxuICAgIGlmICgwICE9PSBjaGlsZF9wcm9jZXNzLnNwYXduU3luYygnZG90bmV0JywgW1xyXG4gICAgICAgICdkZXYtY2VydHMnLFxyXG4gICAgICAgICdodHRwcycsXHJcbiAgICAgICAgJy0tZXhwb3J0LXBhdGgnLFxyXG4gICAgICAgIGNlcnRGaWxlUGF0aCxcclxuICAgICAgICAnLS1mb3JtYXQnLFxyXG4gICAgICAgICdQZW0nLFxyXG4gICAgICAgICctLW5vLXBhc3N3b3JkJyxcclxuICAgIF0sIHsgc3RkaW86ICdpbmhlcml0JywgfSkuc3RhdHVzKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGNyZWF0ZSBjZXJ0aWZpY2F0ZS5cIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHRhcmdldCA9IGVudi5BU1BORVRDT1JFX0hUVFBTX1BPUlQgPyBgaHR0cHM6Ly9sb2NhbGhvc3Q6JHtlbnYuQVNQTkVUQ09SRV9IVFRQU19QT1JUfWAgOlxyXG4gICAgZW52LkFTUE5FVENPUkVfVVJMUyA/IGVudi5BU1BORVRDT1JFX1VSTFMuc3BsaXQoJzsnKVswXSA6ICdodHRwczovL2xvY2FsaG9zdDo3MjY1JztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgICBwbHVnaW5zOiBbcGx1Z2luKCldLFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgICAgICdeL3dlYXRoZXJmb3JlY2FzdCc6IHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCxcclxuICAgICAgICAgICAgICAgIHNlY3VyZTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ14vcGluZ2F1dGgnOiB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdodHRwczovL2xvY2FsaG9zdDo3MTA5JyxcclxuICAgICAgICAgICAgICAgIHNlY3VyZTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ14vcmVnaXN0ZXInOiB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdodHRwczovL2xvY2FsaG9zdDo3MTA5JyxcclxuICAgICAgICAgICAgICAgIHNlY3VyZTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ14vbG9naW4nOiB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdodHRwczovL2xvY2FsaG9zdDo3MTA5JyxcclxuICAgICAgICAgICAgICAgIHNlY3VyZTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ14vbG9nb3V0Jzoge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnaHR0cHM6Ly9sb2NhbGhvc3Q6NzEwOScsXHJcbiAgICAgICAgICAgICAgICBzZWN1cmU6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvcnQ6IDUxNzMsXHJcbiAgICAgICAgaHR0cHM6IHtcclxuICAgICAgICAgICAga2V5OiBmcy5yZWFkRmlsZVN5bmMoa2V5RmlsZVBhdGgpLFxyXG4gICAgICAgICAgICBjZXJ0OiBmcy5yZWFkRmlsZVN5bmMoY2VydEZpbGVQYXRoKSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFcsU0FBUyxlQUFlLFdBQVc7QUFFalosU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxZQUFZO0FBQ25CLE9BQU8sUUFBUTtBQUNmLE9BQU8sVUFBVTtBQUNqQixPQUFPLG1CQUFtQjtBQUMxQixTQUFTLFdBQVc7QUFQcU4sSUFBTSwyQ0FBMkM7QUFTMVIsSUFBTSxhQUNGLElBQUksWUFBWSxVQUFhLElBQUksWUFBWSxLQUN2QyxHQUFHLElBQUksT0FBTyxtQkFDZCxHQUFHLElBQUksSUFBSTtBQUVyQixJQUFNLGtCQUFrQjtBQUN4QixJQUFNLGVBQWUsS0FBSyxLQUFLLFlBQVksR0FBRyxlQUFlLE1BQU07QUFDbkUsSUFBTSxjQUFjLEtBQUssS0FBSyxZQUFZLEdBQUcsZUFBZSxNQUFNO0FBRWxFLElBQUksQ0FBQyxHQUFHLFdBQVcsWUFBWSxLQUFLLENBQUMsR0FBRyxXQUFXLFdBQVcsR0FBRztBQUM3RCxNQUFJLE1BQU0sY0FBYyxVQUFVLFVBQVU7QUFBQSxJQUN4QztBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0osR0FBRyxFQUFFLE9BQU8sVUFBVyxDQUFDLEVBQUUsUUFBUTtBQUM5QixVQUFNLElBQUksTUFBTSwrQkFBK0I7QUFBQSxFQUNuRDtBQUNKO0FBRUEsSUFBTSxTQUFTLElBQUksd0JBQXdCLHFCQUFxQixJQUFJLHFCQUFxQixLQUNyRixJQUFJLGtCQUFrQixJQUFJLGdCQUFnQixNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUk7QUFHOUQsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUyxDQUFDLE9BQU8sQ0FBQztBQUFBLEVBQ2xCLFNBQVM7QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNILEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDeEQ7QUFBQSxFQUNKO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDSixPQUFPO0FBQUEsTUFDSCxxQkFBcUI7QUFBQSxRQUNqQjtBQUFBLFFBQ0EsUUFBUTtBQUFBLE1BQ1o7QUFBQSxNQUNBLGNBQWM7QUFBQSxRQUNWLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxNQUNaO0FBQUEsTUFDQSxjQUFjO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsTUFDWjtBQUFBLE1BQ0EsV0FBVztBQUFBLFFBQ1AsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLE1BQ1o7QUFBQSxNQUNBLFlBQVk7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxNQUNaO0FBQUEsSUFDSjtBQUFBLElBQ0EsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0gsS0FBSyxHQUFHLGFBQWEsV0FBVztBQUFBLE1BQ2hDLE1BQU0sR0FBRyxhQUFhLFlBQVk7QUFBQSxJQUN0QztBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
