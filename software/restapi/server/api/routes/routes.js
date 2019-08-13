import {verification} from "../../utils/commanUtils";
import UserController from "../users/controller/usercontroller";
import AssetRoute from "../assets/route/assetRoute";
import ResourcesRoute from "../resources/route/resourcesRoute";
import AssetTypeRoute from "../assetTypes/route/assetType";
import ProjectsRoute from "../projects/route/projectsRoute";
import InvoicesRoute from "../invoices/route/invoicesRoute";
import InvoicesLineItemRoute from "../invoiceLineItems/route/invoicesLineItemRoute";
import AssetRequestRoute from "../assetRequest/route/assetRequestRoute";
import PurchaseOrderRoute from "../purchaseOrders/route/purchaseOrderRoute";
import AssetAssignmentRoute from "../assetAssignments/route/assetAssignmentRoute";
import SearchRoute from "../search/route/searchRoute";


export default class Route {

  static init(router){

    /**
     * signup
     */
    router
      .route("/signUp")
      .post(UserController.registerIncomers);

    /**
     * login
     */
    router
      .route("/login")
      .post(UserController.authUser);

    /**
     * token verification
     */
    router
      .route("/Aim/api/v1/*")
      .all(verification.tokenVerification);

    /**
     * assets route path
     */
    router.route("/Aim/api/v1/assets/*",AssetRoute.init(router));

    /**
     * resources route path
     */
    router.route("/Aim/api/v1/resources/*",ResourcesRoute.init(router));

    /**
     * asset types route path
     */
    router.route("/Aim/api/v1/assetType/*",AssetTypeRoute.init(router));

    /**
     * projects route path.
     */
    router.route("/Aim/api/v1/projects/*",ProjectsRoute.init(router));

    /**
     * invoices route path
     */
    router.route("/Aim/api/v1/invoices/*",InvoicesRoute.init(router));

    /**
     * invoices line items
     */
    router.route("/Aim/api/v1/invoiceLineItems/*",InvoicesLineItemRoute.init(router));

    /**
     * assetRequest
     */
    router.route("/Aim/api/v1/assetRequest/*",AssetRequestRoute.init(router));

    /**
     * purchaseOrder
     */
    router.route("/Aim/api/v1/purchaseOrder/*",PurchaseOrderRoute.init(router));

    /**
     * assetAssignment
     */
    router.route("/Aim/api/v1/assetAssignment/*",AssetAssignmentRoute.init(router));

    /**
     * search
     */
    router.route("/Aim/api/v1/search/*",SearchRoute.init(router));

  }
}
