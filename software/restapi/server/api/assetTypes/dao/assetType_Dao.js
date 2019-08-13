import Promise from "bluebird";
import models from "../../../models";

export default class AssetTypeDao {
  static createAssetTypes(req) {
    console.log("call reached here");
    return new Promise((resolve, reject) => {
      models.AssetTypes.create({
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        createdDate: new Date()
      }).then(created => {
        resolve(created);
      },error => {
        reject(error);
      })
    })
  }

  static readAssetTypes(req) {
    return new Promise((resolve, reject) => {

      let limit = req.query.itemsPerPage;
      let offset;
      let page = req.query.pageNo;
      offset = limit * (page - 1);

      models.AssetTypes.findAndCountAll({
        limit: limit,
        offset: offset,
        order: [['id', 'DESC']]
      }).then(
        assetTypeCount => {
          resolve(assetTypeCount);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  static deleteAssetType(req) {
    return new Promise((resolve, reject) => {
      models.AssetTypes.destroy({
        where: {
          id: id
        }
      }).then(deleted =>{
        resolve(deleted)
      },error => {
        reject(error);
      })
    });
  }
}
