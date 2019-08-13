import Asset_Controller from "../controller/asset_Controller";
import { AssetValidator } from "../validator/assetValidator";

export default class AssetRoute {
  static init(router) {
    /**
     * Assets Table Crud Operations
     *
     * createAssets -> for creating assets in database
     * readAssets  -> for reading assets from database
     * readAssets by id -> readd required assets based on id
     * updateAssets -> for updating database
     * deleteAssets -> for delete asset
     */

    router
      .route("*/createAssets")
      .post(
        AssetValidator.asset_validator("assets"),
        Asset_Controller.createAssets
      );

    router.route("*/readAssets").get(Asset_Controller.readAssets);

    router.route("*/updateAssets").put(Asset_Controller.updateAssets);

    router.route("*/assetOnID/:id").get(Asset_Controller.particularAsset);

    router.route("*/deleteAsset/:id").delete(Asset_Controller.deleteAsset);
  }
}
