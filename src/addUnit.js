import { ClickUnit } from "./clickUnit";
import { DragElement } from "./dragElement";
import { DragUnit } from "./dragUnit";
import { GetElement } from "./getElement";

class AddUnit {
  static add() {
    const add = GetElement.getAddElement()
    add.addEventListener('click', () => {
      const unit = AddUnit.createElement()
      add.parentNode.insertBefore(unit, add)
    })
  }

  static createElement() {
    const unit = document.createElement('div')
    unit.classList.add('one-unit')
    ClickUnit.addListener(unit)
    // new DragElement(unit)
    new DragUnit(unit)
    unit.innerHTML = `
      <span class="currency">New</span>
      <div>
        <span class="num">66</span>
        <span class="symbol">%</span>
      </div>
    `
    return unit
  }
}

AddUnit.add()

export { AddUnit }