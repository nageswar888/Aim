import { environment } from './../../../environments/environment';
export const LOGIN = 'LOGIN';
//Routes for Assets
export const ADDASSETSDETAILS='ADDASSETSDETAILS';
export const READASSETDETAILS ='Assets';
export const ASSETBYID = 'AssetsById'

//Routes for Asset types
export const ADDASSETTYPEDETAILS ='ADDASSETTYPEDETAILS';
export const READASSETTYPEDETAILS ='READASSETTYPEDETAILS';

//Routes for Resource
export const ADDRESOURCEDETAILS='ADDRESOURCEDETAILS';
export const READRESOURCEDETAILS ='Employees';
export const RESOURCEBYID = 'EmployeesById'

//Routes for Project
export const ADDPROJECTDETAILS ='ADDPROJECTDETAILS';
export const READPROJECTDETAILS ='READPROJECTDETAILS';

//Routes for Invoice Line Items
export const ADDINVOICELINEDETAILS ='ADDINVOICELINEDETAILS';
export const READINVOICELINEDETAILS ='READINVOICELINEDETAILS';

//Routes for Invoice
export const ADDINVOICEDETAILS ='ADDINVOICEDETAILS';
export const READINVOICEDETAILS ='READINVOICEDETAILS';

//Routes for Purchase Orders
export const ADDPURCHASEORDERDETAILS ='ADDPURCHASEORDERDETAILS';
export const READPURCHASEORDERDETAILS ='READPURCHASEORDERDETAILS';

//Routes for Asset Requests
export const ADDASSETREQUESTDETAILS ='ADDASSETREQUESTDETAILS';
export const READASSETREQUESTDETAILS ='READASSETREQUESTDETAILS';

//Routes for Others
export const CATEGORYWISEDATA = 'CATEGORYWISEDATA';
export const PAGINATIONASSETDETAILS='AssetsDetails';
export const PAGINATIONEMPLOYEEDETAILS='EmployeesDetails';

//asset assignments
export const ASSETASSIGNMENTS = 'ASSETASSIGNMENTS';

export const UserEndPoint = (type:string,params:any)=> {
  switch (type){

    case LOGIN:
      return environment.API_ROOT + 'login';

//Routes for Assets
    case ADDASSETSDETAILS:
      return environment.API_ROOT+'Aim/api/v1/assets/createAssets';
    case READASSETDETAILS:
      return environment.API_ROOT + 'Aim/api/v1/assets/readAssets';
    case ASSETBYID :
      return environment.API_ROOT + 'Aim/api/v1/assets/assetOnID/' + params;

//Routes for Resource
    case ADDRESOURCEDETAILS:
      return environment.API_ROOT+'Aim/api/v1/resources/createResources';
    case READRESOURCEDETAILS:
      return environment.API_ROOT+'Aim/api/v1/resources/readResources';
    case RESOURCEBYID:
      return environment.API_ROOT + 'Aim/api/v1/resources/readResourceID/' + params

//Routes for Asset types
    case ADDASSETTYPEDETAILS:
      return environment.API_ROOT + 'Aim/api/v1/assetType/createAssetTypes';
    case READASSETTYPEDETAILS:
      return environment.API_ROOT + 'Aim/api/v1/assetType/readAssetTypes';

//Routes for Asset Requests
    case ADDASSETREQUESTDETAILS:
      return environment.API_ROOT + 'Aim/api/v1/assetRequest/createAssetRequest';
    case READASSETREQUESTDETAILS:
      return environment.API_ROOT + 'Aim/api/v1/assetRequest/readAssetRequest';

//Routes for Purchase Orders
    case ADDPURCHASEORDERDETAILS:
      return environment.API_ROOT + 'Aim/api/v1/purchaseOrder/createPurchaseOrder';
    case READPURCHASEORDERDETAILS:
      return environment.API_ROOT + 'Aim/api/v1/purchaseOrder/readPurchaseOrder';

//Routes for Project
    case ADDPROJECTDETAILS:
      return environment.API_ROOT + 'Aim/api/v1/projects/createProjects';
    case READPROJECTDETAILS:
      return environment.API_ROOT + 'Aim/api/v1/projects/readProjects';

//Routes for Invoice Line Items
    case ADDINVOICELINEDETAILS:
      return environment.API_ROOT + 'Aim/api/v1/invoiceLineItems/invoicelinedetails';
    case READINVOICELINEDETAILS:
      return environment.API_ROOT + 'Aim/api/v1/invoiceLineItems/invoicelinedetails';

//Routes for Invoice
    case ADDINVOICEDETAILS:
      return environment.API_ROOT + 'Aim/api/v1/invoices/invoicedetails';
    case READINVOICEDETAILS:
      return environment.API_ROOT + 'Aim/api/v1/invoices/invoicedetails';

//Routes for Others
    case PAGINATIONASSETDETAILS:
      return environment.API_ROOT + 'Aim/api/v1/readAssets';

    case CATEGORYWISEDATA:
      return environment.API_ROOT+'Aim/api/v1/search';

    case PAGINATIONEMPLOYEEDETAILS:
      return environment.API_ROOT+'Aim/api/v1/readResources';

//Routes for asset assignments
    case ASSETASSIGNMENTS:
      return environment.API_ROOT+'Aim/api/v1/assetAssignment/readAssetAssignments/'+ params;
  }
}
