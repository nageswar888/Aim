const PORT = process.env.PORT || 3333;
import os from "os";
import express from "express";
import http from "http";
import RoutesConfig from "./config/routes.conf";
import Routes from "./routes/index";
const expressValidator = require('express-validator');

const app = express();
RoutesConfig.init(app);
Routes.init(app, express.Router());
app.use(expressValidator,function () {

});
http.createServer(app)
  .listen(PORT, () => {
      console.log(`up and running @: ${'0.0.0.0'} on port: ${PORT}`);
      console.log(`enviroment: ${process.env.NODE_ENV}`);
    });
