import AssetAssignmentDao from "../dao/assetAssignmentDao";

export default class AssetAssignment {
  static createAssetAssignment(req, res) {
    AssetAssignmentDao.createAssetAssignment()
      .then(() => {
        res.sendStatus(201);
      })
      .catch(error => {
        res.sendStatus(403);
      });
  }

  static readAssetAssignment() {
    AssetAssignmentDao.readAssetAssignment()
      .then(list => {
        if (list.count > 0) {
          res.status(200).json(list);
        } else if (list.count === 0) {
          res.status(200).json("no records found");
        } else {
          res.sendStatus(403);
        }
      })
      .catch(error => {
        res.sendStatus(403);
      });
  }
}
