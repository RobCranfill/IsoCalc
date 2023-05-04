// (c)2023 rob cranfill
class IsoCalc {
  constructor() {
    // this.reset()
  }

  changeCans(grossWeight, netWeight) {
    // console.info("change cans: " + grossWeight + "/" + netWeight)
    document.querySelector('div[name="fgw"]').innerText = grossWeight
    document.querySelector('div[name="fnw"]').innerText = netWeight
    document.querySelector('div[name="ew"]').innerText = grossWeight - netWeight

    // clear old input and results
    document.querySelector('input[name="cgw"]').value = ""
    document.querySelector('div[name="ff"]').innerText = ""
    document.querySelector('div[name="cnw"]').innerHTML = ""
  }

  computeAndDisplay() {

    const fgw = document.querySelector('div[name="fgw"]').innerText
    const cgw = document.querySelector('input[name="cgw"]').value
    const ew = document.querySelector('div[name="ew"]').innerText

    // the calculations:
    var cnw = cgw - ew
    const fnw = document.querySelector('div[name="fnw"]').innerText
    const ff = Math.trunc((cnw / fnw) * 100)

    console.info("-> Current net weight: " + cnw)
    console.info("fnw: " + fnw)
    console.info("ff: " + ff + "%")
    
    // show the results
    document.querySelector('div[name="ff"]').innerText = ff + "%"
    document.querySelector('div[name="cnw"]').innerHTML = cnw
  }
}

const isocalc = new IsoCalc()
isocalc.changeCans(374, 227)

const calcButton = document.querySelector('button[type="submit"]')
calcButton.addEventListener('click', button => {isocalc.computeAndDisplay()})

const oz8Radio = document.querySelector('input[id="oz8"]')
oz8Radio.addEventListener('click', button => {isocalc.changeCans(374, 227)})

const oz4Radio = document.querySelector('input[id="oz4"]')
oz4Radio.addEventListener('click', button => {isocalc.changeCans(211, 110)})
