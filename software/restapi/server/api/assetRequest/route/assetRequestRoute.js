import AssetRequest from "../controller/assetRequest_Controller";
import {AssetRequestValidator} from "../validator/assetRequestValidator";

export default class AssetRequestRoute {

  static init(router){

    /**
     * AssetRequest Table Crud Operations
     *
     * createResource -> for creating AssetRequest in database
     * readResource  -> for reading AssetRequest from database
     * updateResource -> for updating database
     * deleteResource -> for delete asset
     */
    
    router
      .route("*/createAssetRequest")
      .post(AssetRequestValidator.assetRequest_validator('assetRequest'),AssetRequest.createAssetRequest);
    router
      .route("*/readAssetRequest")
      .get(AssetRequest.readAssetRequest);
    router
      .route("*/updateAssetRequest")
      .put(AssetRequest.updateAssetRequest);
    router
      .route("*/deleteAssetRequest/:id")
      .delete(AssetRequest.deleteAssetRequest);

  }
}
