import { List } from "./linked-list.js";

let list = new List();
list.append("Test");
console.log(list.toString());
list.prepend("Prepended");
console.log(list.toString());
