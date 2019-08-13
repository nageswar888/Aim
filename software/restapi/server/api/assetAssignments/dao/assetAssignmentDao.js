import Promise from "bluebird";
import models from "../../../models";

export default class AssetAssignmentDao {
  static createAssetAssignment(req) {
    return new Promise((resolve, reject) => {
      models.AssetAssignments.create({
        assetID: req.body.assetID,
        resourceID: req.body.resourceID,
        projectID: req.body.projectID,
        billable: req.body.billable,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        status: req.body.status,
        active: req.body.active,
        createdDate: new Date()
      }).then(
        created => {
          resolve(created);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  static readAssetAssignment() {
    models.AssetAssignments.findAndCountAll({
      attributes: [
        "assetID",
        "resourceID",
        "projectID",
        "billable",
        "startDate",
        "endDate",
        "status",
        "active"
      ]
    }).then(
      list => {
        resolve(list);
      },
      error => {
        reject(error);
      }
    );
  }
}
