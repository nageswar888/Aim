import AssetType from "../controller/assetType_Controller";
import {AssetTypeValidator} from "../validator/assetType";

export default class AssetTypeRoute {

  static init(router){



    /**
     * AssetType Table Crud Operations
     *
     * createAssetType -> for creating assetType in database
     * readAssetType  -> for reading asset from database
     * updateAssetType -> for updating database
     * deleteAssetType -> for delete asset
     */

    router
      .route("*/createAssetTypes")
      .post(AssetTypeValidator.assetType_validator('AssetType'),AssetType.createAssetTypes);
    router
      .route("*/readAssetTypes")
      .get(AssetType.readAssetTypes);
    router
      .route("*/updateAssetTypes")
      .put(AssetType.updateAssetType);
    router
      .route("*/deleteAssetType/:id")
      .delete(AssetType.deleteAssetType);

  }
}
