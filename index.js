const express = require("express");
const os = require("os");
const app = express();

app.use(express.json()); // to parse JSON body

// Test route
app.get("/", (req, res) => {
  const info = {
    server: {
      hostname: os.hostname(),
      platform: os.platform(),
      arch: os.arch(),
      nodeVersion: process.version,
      uptime: process.uptime(),
      cwd: process.cwd(),
      env: process.env.NODE_ENV || "development",
      port: server.address().port,
    },
    request: {
      method: req.method,
      url: req.originalUrl,
      path: req.path,
      query: req.query,
      params: req.params,
      headers: req.headers,
      body: req.body,
      ip: req.ip,
      protocol: req.protocol,
    },
  };

  res.json(info);
});

const server = app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
