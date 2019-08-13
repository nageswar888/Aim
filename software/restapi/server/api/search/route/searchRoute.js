import SearchOperation from "../controller/searchOperatons_controller";


export default class SearchRoute {
  static init(router){
      router.route("*/localSearch").get(SearchOperation.search)
  }
}
