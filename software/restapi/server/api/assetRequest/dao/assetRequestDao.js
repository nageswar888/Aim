import Promise from "bluebird";
import models from "../../../models";

export default class AssetRequestDao {
  static createAssetRequest(req){
    console.log(req.body);
    return new Promise((resolve,reject) => {
      models.AssetRequests.create({
        assetType: req.body.assetType,
        resourceID: req.body.resourceId,
        projectID: req.body.projectId,
        dueDate: req.body.dueDate,
        status: req.body.status,
        createdBy: req.body.createdBy,
        reason: req.body.reason,
        description: req.body.description
      })
        .then(createdList => {
          resolve(createdList);
        },error => {
          reject(error);
        })
    })
  }

  static readAssetRequest(req){
    return new Promise((resolve,reject) => {

      let limit = req.query.itemsPerPage;
      let offset;
      let page = req.query.pageNo;
      offset = limit * (page - 1);

      models.AssetRequests.findAndCountAll({

        limit: limit,
        offset: offset,
        order: [['id', 'DESC']]
      })
        .then(readList => {
          resolve(readList);
        },error => {
          reject(error);
        })
    })
  }

  static deleteAssetRequest(req){
    return new Promise((resolve,reject) => {
      models.AssetRequests.destroy()
        .then(deleted => {
          resolve(deleted);
        },error => {
          reject(error);
        })
    })
  }
}
