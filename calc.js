const click = (e) => {
    if (e.target.innerText === "=") {
      document.getElementById("divScreen").innerText +=
        "=" + eval(document.getElementById("divScreen").innerText)
      setTimeout(() => {
        document.getElementById("divScreen").innerText = ""
      }, 4500)
    } else if (e.target.innerText === "C") {
      document.getElementById("divScreen").innerText = ""
    } else if (e.target.innerText === "DEL") {
      document.getElementById("divScreen").innerText = document
        .getElementById("divScreen")
        .innerText.substring(
          0,
          document.getElementById("divScreen").innerText.length - 1
        )
    } else if (e.target.innerText === "x^2") {
      document.getElementById("divScreen").innerText = Math.pow(
        eval(document.getElementById("divScreen").innerText),
        2
      )
    } else if (e.target.innerText === "x^0.5") {
      document.getElementById("divScreen").innerText = Math.pow(
        eval(document.getElementById("divScreen").innerText),
        0.5
      )
    } else if (e.target.innerText === "10^x") {
      document.getElementById("divScreen").innerText = Math.pow(
        10,
        eval(document.getElementById("divScreen").innerText)
      )
    } else if (e.target.innerText === "|x|") {
      document.getElementById("divScreen").innerText = Math.abs(
        eval(document.getElementById("divScreen").innerText)
      )
    } else if (e.target.innerText === "+/-") {
      x = eval(document.getElementById("divScreen").innerText)
      document.getElementById("divScreen").innerText = -1 * x
    } else {
      document.getElementById("divScreen").innerText += e.target.innerText
    }
    //e.target.innerText-to get access to element text that push click
  }
  document
    .querySelectorAll(".myDiv")
    .forEach((el) => el.addEventListener("click", click))

  //document.getElementById('screen').innerText += e.target.innerText
  setInterval(() => {
    console.log("2")
  }, 1000)