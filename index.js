import { List } from "./linked-list.js";

let list = new List();
list.append("Test");
console.log(list.toString());
list.prepend("Prepended");
console.log(list.toString());
console.log(list.size());
console.log(list.head.value + " " + list.tail.value);
console.log(list.at(3).value);
console.log(list.at(55));
console.log(list.pop().value);
console.log(list.toString());
console.log(list.contains(null));
console.log(list.contains("Nothing!"));
