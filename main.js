function HtmlElement() {
    this.click= function () {
      console.log("I'm from Click");
    }; 
}
HtmlElement.prototype.focus = function () {
console.log("I'm from Focus");
};
  
const ab = new HtmlElement


function HtmlSelectElement(click) {
    HtmlElement.call(this, click)
    let items = [];

    this.addItem= function (item) {
        items.push(item);
      };

    this.removeItem= function (item) {
        if (!items.includes(item)) {
        throw new Error("array don't have this number");
        }
        items = items.filter(function(val) {
            return val !== item
        })
        
    };

    this.getItems = function() { return items; }
}

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
    // console.log(Child.constructor)
}

extend(HtmlSelectElement, HtmlElement);
    
const first = new HtmlSelectElement()

first.addItem('5');
first.addItem('6');
first.addItem(7);
first.addItem(8);
console.log(first.getItems())
console.log(first.removeItem(7))
console.log(first.getItems())
console.log(first.click())
console.log(first.focus())


///////////////////////////////////////////////////////
// class Html {
//     focus():void {
//         console.log("I'm from Focus");
//       }
// }

// class HtmlElement extends Html {
//     click():void {
//       console.log("I'm from Click");
//     }
// }

// class HtmlSelectElement extends HtmlElement {
//     items: Array<any>
//     constructor() {
//         super()
//       this.items = [];
//     }
  
//     addItem(item) {
//        this.items.push(item);
//     }

//     removeItem(item) {
//         if (!this.items.includes(item)) {
//             throw new Error("array don't have this number");
//         }
//         this.items = this.items.filter(function(val){ 
//             return val !== item ;
//         });
//     }
//   }

//   const second = new HtmlSelectElement();

//   second.addItem(3434)
//   second.addItem(34)
//   second.addItem('34')
//   second.removeItem(34)
//   console.log(second.items)
//   console.log(second.click())
//   console.log(second.focus())
  //////////////////////////////////////////////////////////


