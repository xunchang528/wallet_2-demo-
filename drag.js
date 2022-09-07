class DragContainer {
  constructor() {
    this.init()
  }

  init() {
    this.mouseDownPosition = { x: 0, y: 0 }
    this.moveDistance = { x: 0, y: 0 }
    this.moveBarMouseDown = false
    this.originalMoveDistance = { x: 0, y: 0 }
  }

  run() {
    this.mousedown()
    this.mouseup()
    this.mousemove()
    this.moveBar()
  }

  mousedown() {
    document.body.addEventListener('mousedown', this._mouseDownOnBody)
  }

  mouseup() {
    document.body.addEventListener('mouseup', this._mouseUpOnBody)
  }

  mousemove() {
    document.body.addEventListener('mousemove', this._mouseMoveOnBody)
  }

  moveBar() {
    const bar = document.querySelector('.moveBar')
    bar.addEventListener('mousedown', () => {
      this.moveBarMouseDown = true
      console.log('mousedown');
    })
    bar.addEventListener('mouseup', () => {
      this.moveBarMouseDown = false
      console.log('up');
    })
  }

  _mouseDownOnBody = (event) => {
    // console.log("x:", event.clientX);
    // console.log("y:", event.clientY);
    this.mouseDownPosition.x = event.clientX
    this.mouseDownPosition.y = event.clientY
  }

  _mouseMoveOnBody = (event) => {
    // console.log("x:", event.clientX);
    // console.log("y:", event.clientY);
    if (this.moveBarMouseDown) {
      const target = document.querySelector('.container')
      this.moveDistance.x = event.clientX - this.mouseDownPosition.x + this.originalMoveDistance.x
      this.moveDistance.y = event.clientY - this.mouseDownPosition.y + this.originalMoveDistance.y

      target.style.transform = `translate(${this.moveDistance.x}px, ${this.moveDistance.y}px)`
    }
  }

  _mouseUpOnBody = (event) => {
    this.originalMoveDistance.x = this.moveDistance.x
    this.originalMoveDistance.y = this.moveDistance.y
  }
}

export { DragContainer }