class IsoCalc {
  constructor() {
    // this.reset()
  }

  computeAndDisplay() {
    console.info("computeAndDisplay!")

    const calcButton = document.querySelector('button[type="submit"]')
    // const calcButton = document.querySelector('button[type="submit"], button:not([type])')
    if (calcButton === null) {
      console.error("BUTTON IS NULL!")
      }
    else {
      console.info("got button ok!")
      }

    // const numberButtons = document.querySelectorAll('[data-number]')
    const netWeightDisplay = document.querySelector('div[name="cnw"]')
    if (netWeightDisplay === null) {
      console.error("NW IS NULL!")
      }
    else {
      console.info("got NW ok!")
      }


    if (netWeightDisplay === null) {
      console.error("NW IS NULL! in computeAndDisplay")
    }
    else {
      console.info("got NW ok! in computeAndDisplay")
    }
    netWeightDisplay.innerHTML = 'calc!'

    // why not just get the objects now?


    const fgw_obj = document.querySelector('div[name="fgw"]')
    if (fgw_obj === null) {
      console.error("FGW IS NULL! in computeAndDisplay")
      return
    }
    const fgw = fgw_obj.innerText
    console.info("fgw: " + fgw)

    const cgw_obj = document.querySelector('input[name="cgw"]')
    if (cgw_obj === null) {
      console.error("CGW IS NULL! in computeAndDisplay")
      return
    }
    const cgw = cgw_obj.value
    console.info("cgw: " + cgw)

    
    const ew_obj = document.querySelector('div[name="ew"]')
    if (ew_obj === null) {
      console.error("EW IS NULL! in computeAndDisplay")
      return
    }
    const ew = ew_obj.innerText
    console.info("ew: " + ew)

    // the calculations:
    var cnw = cgw - ew
    console.info("CURRENT NET WEIGHT: " + cnw)

    
    const fnw_obj = document.querySelector('div[name="fnw"]')
    if (fnw_obj === null) {
      console.error("FNW IS NULL! in computeAndDisplay")
      return
    }
    const fnw = fnw_obj.innerText
    console.info("fnw: " + fnw)

    const ff = Math.trunc((cnw / fnw) * 100)
    console.info("ff: " + ff + "%")
  

    const ff_obj = document.querySelector('div[name="ff"]')
    if (ff_obj === null) {
      console.error("FF IS NULL! in computeAndDisplay")
      return
    }
    ff_obj.innerText = ff + "%"
    
    netWeightDisplay.innerHTML = cnw
  }
}


const isocalc = new IsoCalc()

calcButton.addEventListener('click', button => {
  isocalc.computeAndDisplay()
})
