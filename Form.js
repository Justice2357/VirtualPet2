class Form {

    constructor() {
      this.name = createInput("Name");
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.button = createButton('Named')
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.name.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Car Racing Game");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.name.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
  
      this.button.mousePressed(()=>{
        this.name.hide();
        this.button.hide();
        pup.name = this.name.value();
        pup.update();
        this.greeting.html("Here's " + pup.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
    }
  }
  