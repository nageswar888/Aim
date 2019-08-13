import AssetAssignment from "../controller/assetAssignment_Controller";
import {AssetAssignmentValidator} from "../validator/assetAssignmentValidator";


export default class AssetAssignmentRoute {

  static init(router){

    /**
     * AssetAssignment Table Crud Operations
     *
     * createResource -> for creating AssetAssignment in database
     * readResource  -> for reading AssetAssignment from database
     * updateResource -> for updating database
     * deleteResource -> for delete asset
     */

    router
      .route("*/createAssetAssignments")
      .post(AssetAssignmentValidator.assetAssignment_validator('assetAssignment'),AssetAssignment.createAssetAssignment);
    router
      .route("*/readAssetAssignments")
      .get(AssetAssignment.readAssetAssignment);
  }

}
