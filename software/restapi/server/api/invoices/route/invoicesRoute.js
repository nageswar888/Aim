import Invoices from "../controller/invoices_controller";
import {InvoicesValidator} from "../validator/invoicesValidator";


export default class InvoicesRoute {

  static init(router){

    /**
     * Invoices Table Crud Operations
     *
     * createResource -> for creating Invoices in database
     * readResource  -> for reading Invoices from database
     * updateResource -> for updating database
     * deleteResource -> for delete asset
     */

    router
      .route("*/createInvoice")
      .post(InvoicesValidator.invoice_validator('invoices'),Invoices.createInvoices);
    router
      .route("*/readInvoices")
      .get(Invoices.readInvoices);
    router
      .route("*/updateInvoices")
      .put(Invoices.updateInvoices);
    router
      .route("*/deleteInvoices/:id")
      .delete(Invoices.deleteInvoices);

  }
}
