import Route from "../api/routes/routes";


export default class Routes {
   static init(app, router) {

     /**
      *
      */
      app.use("/", router);
      Route.init(router);

   }
}
