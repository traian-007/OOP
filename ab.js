class Html {
    focus() {
        console.log("I'm from Focus");
      }
}

class HtmlElement extends Html {
    click() {
      console.log("I'm from Click");
    }
}

class HtmlSelectElement extends HtmlElement {
   
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

  const av = new HtmlSelectElement();

  av.addItem(3434)
  av.addItem(34)
  av.addItem('34')
  console.log(av.items)
  av.removeItem(34)
  console.log(av.items)
   console.log(av.click())
    console.log(av.focus())
  av.fo