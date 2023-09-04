import  person  from "./export.js"; // in default import we do not have write it in {} 
// import user from "./export2.js";
// import { abcd, user as u } from "./export2.js"

import * as alldata from  "./export2.js";   // this create an object={}  named as  alldata 
console.log(person);
alldata.abcd();
console.log(alldata.user);