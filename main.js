// function HtmlElement() {
//     this.click= function () {
//       console.log("I'm from Click");
//     }; 
// }
// HtmlElement.prototype.focus = function () {
//     console.log("I'm from Focus");
// };
  
// const ab = new HtmlElement


// function HtmlSelectElement(items = []) {
//     HtmlElement.call(this)
//     this.items = items;

//     this.addItem= function (item) {
//         items.push(item);
//       };

//     this.removeItem= function (item) {
//         if (!items.includes(item)) {
//         throw new Error("array don't have this number");
//         }
//         items = items.filter(function(val) {
//             return val !== item
//         })
        
//     };

//     this.getItems = function() { return items; }
// }

// function extend(Child, Parent) {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
//     // console.log(Child.constructor)
// }

// extend(HtmlSelectElement, HtmlElement);
    
// const first = new HtmlSelectElement()

// first.addItem('5');
// first.addItem('6');
// first.addItem(7);
// first.addItem(8);
// console.log(first.getItems())
// console.log(first.removeItem(7))
// console.log(first.getItems())
// console.log(first.click())
// console.log(first.focus())
// console.log(first)





