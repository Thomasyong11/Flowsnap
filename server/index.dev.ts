// server/index.dev.ts
import http from "http";
import app from "./app";
import { setupVite, log } from "./vite";

(async () => {
  const server = http.createServer(app);

  // only in development: use Vite middleware & HMR
  await setupVite(app, server);

  const host = process.env.HOST || "127.0.0.1";
  const port = Number(process.env.PORT) || 5000;

  server.listen(port, host, () => {
    log(`serving on http://${host}:${port}`);
  });
})();
