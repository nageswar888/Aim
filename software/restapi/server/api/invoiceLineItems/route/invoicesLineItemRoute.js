import InvoiceLineItems from "../controller/invoiceLineItems_Controller";
import { InvoicesLineItemValidator } from "../validator/invoiceLineItemRouteValidator";

export default class InvoicesLineItemRoute {
  static init(router) {
    /**
     * InvoiceLineItems Table Crud Operations
     *
     * createResource -> for creating InvoiceLineItems in database
     * readResource  -> for reading InvoiceLineItems from database
     * updateResource -> for updating database
     * deleteResource -> for delete asset
     */
    router
      .route("*/createInvoiceLineItems")
      .post(
        InvoicesLineItemValidator.invoiceLineItem_validator("invoicesLineItem"),
        InvoiceLineItems.createInvoiceLineItems
      );
    router
      .route("*/readInvoiceLineItems")
      .get(InvoiceLineItems.readInvoiceLineItems);
    router
      .route("*/updateInvoiceLineItems")
      .put(InvoiceLineItems.updateInvoiceLineItems);
    router
      .route("*/deleteInvoiceLineItems/:id")
      .delete(InvoiceLineItems.deleteInvoiceLineItems);

  }
}
