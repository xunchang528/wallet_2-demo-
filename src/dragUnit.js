import { GetElement } from "./getElement";
import { DragElement } from "./dragElement"

class DragUnit extends DragElement {

  constructor(target) {
    super(target)
    this.target = target
    this.mousemove()
  }

  mousemove = () => {
    document.body.addEventListener('mousemove', (event) => {
      if (this.mouseDown) {
        console.log('here');
      }
    })
  }

}

export { DragUnit }