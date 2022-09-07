import { GetElement } from "./getElement";

class ClickUnit {
  static addListener(el) {
    el.addEventListener('click', () => {
      GetElement.getSelectUnit().classList.remove(GetElement.selectedUnitClass)
      el.classList.add(GetElement.selectedUnitClass)
    })
    el.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      el.remove()
    })
  }
}

console.log(GetElement.getUnits());

GetElement.getUnits().forEach(el => {
  ClickUnit.addListener(el)
})

export { ClickUnit }