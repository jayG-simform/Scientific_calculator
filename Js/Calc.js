let buttons = document.querySelectorAll('button');

let key = document.getElementsByClassName("__keys");

// display Input
let input = document.getElementById("displayInput");

// display output
var output = document.getElementById('output_display');


let string = ""

let arr = Array.from(buttons);
arr.forEach(buttons => {
    buttons.addEventListener('click', (e) => {
        if (e.target.value == '=') {

            try {
                output.value = input.value;
                string = eval(input.value);

                input.value = string
            }
            catch (error) {
                output.innerHTML = "<p style='color:red'>Syntax error!</p>";

            }
            let str = input.value
            const fun = str.split(" ");
            let a = fun[0];
            let b = fun[2];
            
            // Calculate yroot 
            if (fun[1] == 'yroot') {
                output.value = input.value
                input.value = Math.pow(a, 1 / b)
            }

            // Calculate y log base x 
            else if (fun[1] == 'log'){
                let c = fun[3];
                output.value = input.value;
                input.value = Math.log(a) / Math.log(c);
            }
        }
        // Clear all 
        else if (e.target.value == 'C') {
            if (input.value) {
                input.value = "";
            }
            else if (output.value) {
                output.value = "";
            }
        }
        // Single delete 
        else if (e.target.value == 'DE') {
            input.value = input.value.replace("DE", "").slice(0, -1);
        }
        else {
            input.value += e.target.value;
        }

    })
})

// change the 2nd number
function change() {
    let display_class = document.getElementsByClassName("operator");
    let hidden_class = document.getElementsByClassName("operator1");
    const btn = document.getElementById("change");
    if (hidden_class[0].style.display === "inline-block") {
        for (let i = 0; i < 6; i++) {
            display_class[i].style.display = "inline-block";
        }
        for (let i = 0; i < 6; i++) {
            hidden_class[i].style.display = "none";
        }
    }
    else {
        for (let i = 0; i < 6; i++) {
            hidden_class[i].style.display = "inline-block";
        }
        for (let i = 0; i < 6; i++) {
            display_class[i].style.display = "none";
        }
    }
}

function ftoE() {

    var str = input.value;
    if (input.value) {
        input.value = str + 'e+0';
    }
    else {
        input.value = 'e+0';
    }
}

// Inverse number 
function inverse() {
    input.value = -(input.value);
}

// Sin function 
function sin() {
    output.value = `sin(${input.value})`
    input.value = Math.sin(input.value);
}

// Cos function 
function cos() {
    output.value = `cos(${input.value})`
    input.value = Math.cos(input.value);
}

// Tan function 
function tan() {
    output.value = `tan(${input.value})`
    input.value = Math.tan(input.value);
}

// Cot function 
function cot() {
    output.value = `1 / tan(${input.value})`
    input.value = 1 / Math.tan(input.value);
}

// Csc function 
function csc() {
    output.value = `1 / sin(${input.value})`
    input.value = 1 / Math.sin(input.value);
}

// Sec function 
function sec() {
    output.value = `1 / cos(${input.value})`
    input.value = 1 / Math.cos(input.value);
}

// Factorial n!
function fact() {
    let n = input.value;
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    }
    else if (n > 1) {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
    }
    else {
        input.value = "number has to be positive.";
    }
    output.value = `fact(${input.value})`;
    input.value = answer;
}

// calculate square 
function sqr() {
    output.value = `sqr(${input.value})`;
    input.value = input.value * input.value;
}

function sqrt() {
    output.value = `√ (${input.value})`;
    input.value = Math.sqrt(input.value);
}

// Calculate cube 
function cube() {
    output.value = `cube(${input.value})`;
    input.value = input.value * input.value * input.value;
}

// Calculate cuberoot 
function cuberoot() {
    output.value = `cuberoot(${input.value})`;
    input.value = Math.cbrt(input.value);
}

// Calculate 2root 
function secondRoot() {
    output.value = `2^(${input.value})`;
    input.value = 2 ** (input.value);
}

// Calculate 10Root 
function tanRoot() {
    output.value = `10^(${input.value})`;
    input.value = 10 ** (input.value);
}

// Calculate Log
function log() {
    output.value = `log(${input.value})`;
    input.value = Math.log10(input.value);
}

// Calculate ln
function ln() {
    output.value = `ln(${input.value})`;
    input.value = Math.log(input.value);
}

// Calculate e^ 
function epower() {
    let e = 2.718281828459045;
    output.value = `e^(${input.value})`;
    input.value = e ** (input.value);
}

// Calculate |x| 
function abs() {
    output.value = `abs(${input.value})`;
    input.value = Math.abs(input.value);
}

// calculate 1/x 
function oneDevid() {
    output.value = `1/(${input.value})`;
    input.value = 1 / (input.value);
}

// Calculate ceil
function ceil() {
    output.value = `ceil(${input.value})`;
    input.value = Math.ceil(input.value);
}

// Calculate floor
function floor() {
    output.value = `floor(${input.value})`;
    input.value = Math.floor(input.value);
}

// Calculate exp
function exp() {
    var str = input.value;
    if (input.value) {
        input.value = str + '.e+0';
    }
    else {
        input.value = '0.e+0';
    }
}



