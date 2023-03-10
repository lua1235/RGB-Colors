const button = document.getElementById("sub")
function update() {
    let redValue = document.getElementById("red").value
    let greenValue = document.getElementById("green").value
    let blueValue = document.getElementById("blue").value
    document.getElementById("color-box").style.fill ="rgb("+redValue+", "+greenValue+", "+blueValue+")"
}
