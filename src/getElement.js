class GetElement {

  static oneUnitClass = 'one-unit'
  static addUnitClass = 'add-unit'
  static selectedUnitClass = 'selected-unit'
  static moveBarClass = 'moveBar'
  static containerClass = 'container'

  static getUnits() {
    return [...document.querySelectorAll('.' + GetElement.oneUnitClass)].filter(el => !el.classList.contains(GetElement.addUnitClass))
  }

  static getAddElement() {
    return document.querySelector('.' + GetElement.addUnitClass)
  }

  static getSelectUnit() {
    return document.querySelector('.' + GetElement.selectedUnitClass)
  }

  static getMoveBar() {
    return document.querySelector('.' + GetElement.moveBarClass)
  }

  static getContainer() {
    return document.querySelector('.' + GetElement.containerClass)
  }

}

export { GetElement }