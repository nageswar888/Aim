import AssetTypeDao from "../dao/assetType_Dao";
const { validationResult } = require('express-validator');

export default class AssetType {
  static createAssetTypes(req, res) {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

      return res.status(422).json({ errors: errors.array() });

    }

    AssetTypeDao.createAssetTypes(req)
      .then(() => {
        res.sendStatus(201);
      })
      .catch(error => res.sendStatus(403));
  }

  static readAssetTypes(req, res) {
    AssetTypeDao.readAssetTypes(req)
      .then(assetTypes => {
        res.status(200).json(assetTypes);
      })
      .catch(error => res.sendStatus(409));
  }

  static updateAssetType(req, res) {}

  static deleteAssetType(req, res) {
    AssetTypeDao.deleteAssetType(assetType => {
      res.sendStatus(200);
    });
  }
}
