class IsoCalc {
  constructor() {
    // this.reset()
  }

  computeAndDisplay() {
    console.info("computeAndDisplay!")

    // why not just get the objects as needed?

    const fgw = document.querySelector('div[name="fgw"]').innerText
    console.info("fgw: " + fgw)

    const cgw = document.querySelector('input[name="cgw"]').value
    console.info("cgw: " + cgw)

    const ew = document.querySelector('div[name="ew"]').innerText
    console.info("ew: " + ew)

    // the calculations:
    var cnw = cgw - ew
    console.info("-> Current net weight: " + cnw)

    const fnw = document.querySelector('div[name="fnw"]').innerText
    console.info("fnw: " + fnw)

    const ff = Math.trunc((cnw / fnw) * 100)
    console.info("ff: " + ff + "%")
  
    document.querySelector('div[name="ff"]').innerText = ff + "%"
    document.querySelector('div[name="cnw"]').innerHTML = cnw
  }
}

const isocalc = new IsoCalc()

const calcButton = document.querySelector('button[type="submit"]')
calcButton.addEventListener('click', button => {
  isocalc.computeAndDisplay()
})
