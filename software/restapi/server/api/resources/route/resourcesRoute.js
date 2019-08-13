import Resources from "../controller/resources_contoller";
import {ResourceValidator} from "../validator/resourceValidator";


export default class ResourcesRoute {

  static init(router){

    /**
     * Resource Table Crud Operations
     *
     * createResource -> for creating Resource in database
     * readResource  -> for reading Resource from database
     * updateResource -> for updating database
     * deleteResource -> for delete asset
     */
    
    router.route("*/createResources").post(ResourceValidator.resource_validator('resource'),Resources.createResource);

    router.route("*/readResources").get(Resources.readResource);

    router.route("*/readResourceID/:id").get(Resources.particularResource);

    router.route("*/UpdateResource").put(Resources.updateResource);

    router.route("*/DeleteResource/:id").delete(Resources.deleteResource);

  }

}
