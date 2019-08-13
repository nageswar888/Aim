import AssetDao from "../dao/assetDao";
const { validationResult } = require('express-validator');

export default class Asset_Controller {

  static createAssets(req, res) {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

      return res.status(422).json({ errors: errors.array() });

    }

    AssetDao.createAssets(req)
      .then(() => {
        res.sendStatus(201);
      })
      .catch(error => res.sendStatus(403));
  }

  static readAssets(req, res) {

    AssetDao.readAssets(req)
      .then(allAssets => {
        if (allAssets.count > 0) {
          res.status(200).json(allAssets);
        } else if (allAssets === 0) {
          res.status(200).json({ message: "Zero assets found" });
        }
      })
      .catch(error => res.sendStatus(403));
  }

  static particularAsset(req,res){
    //console.log("------------",req)
    AssetDao.particularAsset(req).then(particularAsset => {
     res.status(200).send(particularAsset);
      console.log("------------working",)
    })
      .catch(error => res.sendStatus(403));
  }

  static deleteAsset(req,res){
    AssetDao.deleteAsset(req).then((deletedAsset) => {
      res.sendStatus(200);
    })
  }

  static  updateAssets(req,res){
    AssetDao.updateAssetType()
  }
}
