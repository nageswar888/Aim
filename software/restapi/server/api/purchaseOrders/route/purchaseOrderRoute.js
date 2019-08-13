import PurchaseOrder from "../controller/pruchaseOrder_Controller";
import { PurchaseOrdervalidator } from "../validator/purchaseOrderRoute";

export default class PurchaseOrderRoute {
  static init(router) {
    /**
     * PurchaseOrder Table Crud Operations
     *
     * createResource -> for creating PurchaseOrder in database
     * readResource  -> for reading PurchaseOrder from database
     * updateResource -> for updating database
     * deleteResource -> for delete asset
     */
    router
      .route("*/createPurchaseOrder")
      .post(
        PurchaseOrdervalidator.purchaseOrder_validator("purchaseOrder"),
        PurchaseOrder.createPurchaseOrder
      );
    router.route("*/readPurchaseOrder").get(PurchaseOrder.readPurchaseOrder);
    router
      .route("*/updatePurchaseOrder")
      .put(PurchaseOrder.updatePurchaseOrder);
    router
      .route("*/deletePurchaseOrder/:id")
      .delete(PurchaseOrder.deletePurchaseOrder);
  }
}
