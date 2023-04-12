const button = document.getElementById("sub")
function validate(value) {
    if(value < 0) {
        return 0
    }
    if(value > 255) {
        return 255
    }
    return value
}
function update() {
    let redValue = document.getElementById("red").value
    let greenValue = document.getElementById("green").value
    let blueValue = document.getElementById("blue").value
    redValue = validate(redValue)
    greenValue = validate(greenValue)
    blueValue = validate(blueValue)
    document.getElementById("rVal").innerHTML = redValue
    document.getElementById("gVal").innerHTML = greenValue
    document.getElementById("bVal").innerHTML = blueValue
    document.getElementById("preview").style.fontSize = "30px"
    document.getElementById("preview").style.fontFamily = "Comic Sans"
    document.getElementById("title").style.fontFamily = "Papyrus"
    document.getElementById("purplePar").style.color = "purple"
    document.getElementById("color-box").style.fill ="rgb("+redValue+", "+greenValue+", "+blueValue+")"
}
