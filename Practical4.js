function multiplicationTable(n) {
    let i = 1
    let str = "";
    for (i; i <= 10; i++)
        str = str + (n * i) + "	"
    return str
}

function randomColor() {
    var letter = "0123456789ABCDEF"
    var color = "#"
    for (let i = 0; i <= 5; i++)
        color += letter[Math.floor(Math.random() * 16)]
        console.log(color)
    return color;
}

let n = 2;
let font = 15;

var id = setInterval(function () {
    
    if (n <= 10) {
        let p = document.createElement("p")
        p.innerHTML = multiplicationTable(n)
        p.style.color = randomColor()
        p.style.fontSize = font + "px"
        p.style.textAlign = "center"
        document.body.appendChild(p)
        n++;
        font = font + 2;
    } else {
        clearInterval(id)
    }
}, 5000)