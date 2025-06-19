const express = require("express");
const unblocker = require("@titaniumnetwork-dev/unblocker");

const app = express();

app.use(unblocker({ prefix: "/proxy/", requestMiddleware: [] }));

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`✅ Proxy running at http://localhost:${port}/proxy/`);
});
