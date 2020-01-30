import "./style.scss";
import "./main";
import { autocomplete } from "./autocomplete.js";

// set some list for autocomplete to store
let countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla"
];
localStorage.setItem("countries", JSON.stringify(countryList));
// get
let countries = JSON.parse(localStorage.getItem("countries"));
autocomplete(document.getElementById("addInput"), countries);
