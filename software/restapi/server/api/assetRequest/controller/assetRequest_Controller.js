import AssetRequestDao from "../dao/assetRequestDao";
import {validationResult} from "express-validator";


export default class AssetRequest {

  static createAssetRequest(req,res){
    const errors = validationResult(req);

    if (!errors.isEmpty()) {

      return res.status(422).json({ errors: errors.array() });

    }
    AssetRequestDao.createAssetRequest(req).then(createAssetrequest => {
      res.sendStatus(201);
    })
      .catch(error => {res.sendStatus(403)});
  }

  static readAssetRequest(req,res){
    AssetRequestDao.readAssetRequest(req).then(list => {
      res.status(200).json(list);
    })
      .catch(error => {res.sendStatus(403)});
  }

  static updateAssetRequest(req,res) {}

  static deleteAssetRequest(req,res){
    AssetRequestDao.deleteAssetRequest(req).then(deleted => {
      res.sendStatus(403);
    })
      .catch(error => {res.sendStatus(403)});
  }
}
