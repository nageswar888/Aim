import Projects from "../controller/projects_controller";
import {ProjectValidator} from "../validator/projectValidator";


export default class ProjectsRoute {

  static init(router){


    /**
     * Projects Table Crud Operations
     *
     * createResource -> for creating Projects in database
     * readResource  -> for reading Projects from database
     * updateResource -> for updating database
     * deleteResource -> for delete asset
     */

    router
      .route("*/createProjects")
      .post(ProjectValidator.project_validator('projects'),Projects.createProjects);
    router
      .route("*/readProjects")
      .get(Projects.readProjects);
    router
      .route("*/updateProjects")
      .put(Projects.updateProjects);
    router
      .route("*/deleteProjects/:id")
      .delete(Projects.deleteProject);
  }
}
