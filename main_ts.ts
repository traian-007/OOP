
class Html {
    focus():void {
        console.log("I'm from Focus");
      }
}

class HtmlElement extends Html {
    click():void {
      console.log("I'm from Click");
    }
}

class HtmlSelectElement extends HtmlElement {
    items: Array<any>
    constructor() {
        super()
      this.items = [];
    }
  
    addItem(item) {
       this.items.push(item);
    }

    removeItem(item) {
        if (!this.items.includes(item)) {
            throw new Error("array don't have this number");
        }
        this.items = this.items.filter(function(val){ 
            return val !== item ;
        });
    }
  }

  const second = new HtmlSelectElement();

  second.addItem(3434)
  second.addItem(34)
  second.addItem('34')
  second.removeItem(34)
  console.log(second.items)
  console.log(second.click())
  console.log(second.focus())
  //////////////////////////////////////////////////////