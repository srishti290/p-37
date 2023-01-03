class Form {
  constructor() {
   this.input = createInput("").attribute("placeholder","Enter Your Name")
   this.playButton = createButton("PLAY")
   this.titleImg = createImg("./assets/title.png","game title")
   this.greeting = createElement("h2")
  }

  hide(){
    this.input.hide()
    this.playButton.hide()
    this.greeting.hide()
  }

  handleMousePressed(){
    this.playButton.mousePressed(()=>{
      this.input.hide()
      this.playButton.hide()
      var message = `
      Hello ${this.input.value()}
      </br> Wait for another player to join !!!
      `
      this.greeting.html(message)
    })
  }
   
  setElementsPostition(){
    this.titleImg.position(120,100)
    this.input.position(width/2-110,height/2-80)
    this.playButton.position(width/2-100,height/2-20)
    this.greeting.position(width/2-300,height/2-100)
  }

  display(){
    this.setElementsPostition()
    this.handleMousePressed()
  }
}
