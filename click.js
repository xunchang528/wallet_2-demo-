{
  // const elementList = [...document.querySelectorAll('.one-unit')]

  // elementList.forEach(el => {
  //   el.addEventListener('click', elementClick)
  // })

  // function elementClick(event) {
  //   console.log("here");
  //   console.log(event);

  //   const target = event.currentTarget
  //   console.log(target);

  //   const addUnit = target.classList.contains('add-unit')
  //   console.log(addUnit);

  //   if (addUnit) {
  //     addUnitFunc(target)
  //   } else {
  //     selectUnitFunc(target)
  //   }
  // }

  // function selectUnitFunc(target) {
  //   console.log('select unit');
  //   const elementList = [...document.querySelectorAll('.one-unit')]
  //   // elementList.some(el => {
  //   //   if (el.classList.contains('selected-unit')) {
  //   //     el.classList.remove('selected-unit')
  //   //     return false
  //   //   }
  //   // })

  //   for (let el of elementList) {
  //     el.classList.remove('selected-unit')
  //   }

  //   // elementList.every(el => {
  //   //   if (el.classList.contains('selected-unit')) {
  //   //     console.log('selected-unit');
  //   //     el.classList.remove('selected-unit')
  //   //     return false
  //   //   } else {
  //   //     return true
  //   //   }
  //   // })

  //   target.classList.add('selected-unit')
  // }

  // function addUnitFunc(target) {
  //   console.log('add unit');
  //   const newUnit = document.createElement('div')
  //   newUnit.classList.add('one-unit')
  //   newUnit.innerHTML = `
  //     <span class="currency">New</span>
  //     <div>
  //       <span class="num">66</span>
  //       <span class="symbol">%</span>
  //     </div>
  //   `
  //   console.log(target.parentNode);
  //   // target.parentNode.insertBefore(newUnit, target)
  //   target.parentNode.insertBefore(newUnit, target.parentNode.firstElementChild)

  //   newUnit.addEventListener('click', elementClick)
  // }


  // function getElementList() {
  //   return [...document.querySelectorAll('.one-unit')]
  // }
}

class ElementClick {
  constructor() {
    // console.log('ElementClick Create');
    this.run()
  }

  run = () => {
    console.log('ElementClick Create');
    // this._elementListAddClickListener();
    this.addListener()
  }

  addListener() {
    this._elementListAddClickListener();
  }

  removeListener() {
    this._getElementList().forEach(el => {
      el.removeEventListener('click', this._elementClick)
    })
  }

  _getElementList = () => {
    return [...document.querySelectorAll('.one-unit')]
  }

  _elementListAddClickListener = () => {
    this._getElementList().forEach(el => {
      el.addEventListener('click', this._elementClick)
    })
  }
  _elementClick = (event) => {
    const target = event.currentTarget
    const addUnit = target.classList.contains('add-unit')
    addUnit ? this._addUnitFunc(target) : this._selectUnitFunc(target)
  }

  _addUnitFunc = (target) => {
    console.log('add');
    const newUnit = document.createElement('div')
    newUnit.classList.add('one-unit')
    newUnit.innerHTML = `
    <span class="currency">New</span>
    <div>
      <span class="num">66</span>
      <span class="symbol">%</span>
    </div>
  `
    console.log(target.parentNode);
    // target.parentNode.insertBefore(newUnit, target)
    target.parentNode.insertBefore(newUnit, target.parentNode.firstElementChild)

    newUnit.addEventListener('click', this._elementClick)
  }

  _selectUnitFunc = (target) => {
    console.log("select");
    const elementList = this._getElementList()
    for (let el of elementList) {
      el.classList.remove('selected-unit')
    }
    target.classList.add('selected-unit')
  }
}


export { ElementClick }