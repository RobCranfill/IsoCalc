class IsoCalc {
  constructor() {
    // this.reset()
  }

reset() {
  this.netWeightDisplay.innerHTML = 'OK!'
}

  computeAndDisplay() {
    console.info("computeAndDisplay!")
    if (netWeightDisplay === null) {
      console.error("NW IS NULL! in computeAndDisplay")
    }
    else {
      console.info("got NW ok! in computeAndDisplay")
    }
    netWeightDisplay.innerHTML = 'calc!'
  }


  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }
}


const calcButton = document.querySelector('button[type="submit"]')
// const calcButton = document.querySelector('button[type="submit"], button:not([type])')
if (calcButton === null) {
  console.error("BUTTON IS NULL!")
}
else {
  console.info("got button ok!")
}

// const numberButtons = document.querySelectorAll('[data-number]')
const netWeightDisplay =  document.querySelector('div[name="cnw"]')
if (netWeightDisplay === null) {
  console.error("NW IS NULL!")
}
else {
  console.info("got NW ok!")
}

// TODO: const percentDisplay =  document.querySelector('[net_weight]')


const isocalc = new IsoCalc()


calcButton.addEventListener('click', button => {
  isocalc.computeAndDisplay()
})


// numberButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     calculator.appendNumber(button.innerText)
//     calculator.updateDisplay()
//   })
// })
