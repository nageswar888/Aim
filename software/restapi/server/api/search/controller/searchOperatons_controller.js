import SearchOperationDao from "../dao/searchOperationDao";
let _ = require("lodash");

export default class SearchOperation {
  static search(req, res) {
    switch (req.query.keySearch) {
      case "employeeSearch":
        SearchOperationDao.searchResources(req)
          .then(records => {
            res.status(200).json(records);
          })
          .catch(error => res.sendStatus(403));
        break;
      case "assetSearch":
        SearchOperationDao.searchAsset(req)
          .then(records => {
            res.status(200).json(records);
          })
          .catch(error => res.sendStatus(403));
        break;
      case "employeeAdvance":
        SearchOperationDao.employeeAdvance(req)
          .then(records => {
            res.status(200).json(records);
          })
          .catch(error => res.sendStatus(403));
        break;
      case "assetAdvance":
        SearchOperationDao.assetAdvance(req)
          .then(records => {
            res.status(200).json(records);
          })
          .catch(error => res.sendStatus(403));
        break;
      default:
        res.sendStatus(403);
    }
  }
}
