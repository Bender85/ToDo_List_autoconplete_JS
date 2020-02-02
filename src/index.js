import getList from "./service";
import "./style.scss";
// import "./main";
// import prototype from './prototype';
// prototype()
import { autocomplete } from "./autocomplete.js";
autocomplete(document.getElementById("addInput"), getList());
