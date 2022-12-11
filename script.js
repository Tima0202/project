// let runningTotal = 0;
// let buffer = "0"
// let previousOperator;
//
// const screen = document.querySelector('.screen');
//
// function buttonClick(value) {
//     if (isNaN(value)) {
//         handleSymbol(value);
//     } else {
//         handleNumber(value);
//     }
//     screen.innerText = buffer;
// }
//
//
// function handleSymbol(symbol) {
//     switch (symbol) {
//         case 'C':
//             buffer = '0'
//             runningTotal = 0;
//             break;
//         case '=':
//             if (previousOperator === null) {
//                 return
//             }
//             flushOperation(parseInt(buffer));
//             previousOperator = null;
//             buffer = runningTotal;
//             runningTotal = 0;
//             break;
//         case '←':
//             if (buffer.length === 1) {
//                 buffer = '0'
//             } else {
//                 buffer = buffer.toString(0, buffer.length -1 );
//             }
//             break;
//         case '+':
//         case '-':
//         case 'x':
//         case '÷':
//             handleSymbol(symbol);
//             break;
//         default:
//             break;
//
//     }
// }
//
//
// function handleMath(symbol) {
//     if (buffer === '0') {
//         return;
//     }
//     const intBuffer = (buffer);
//     if (runningTotal === 0) {
//         runningTotal = intBuffer;
//     } else {
//         flushOperation(intBuffer)
//     }
//     previousOperator = symbol;
//     buffer = '0';
// }
//
// function flushOperation(inBuffer) {
//     if (previousOperator === '+') {
//         runningTotal += inBuffer;
//     } else if (previousOperator === '-') {
//         runningTotal -= inBuffer;
//     } else if (previousOperator === 'x') {
//         runningTotal *= inBuffer;
//     } else if (previousOperator === '÷') {
//         runningTotal /= inBuffer;
//     }
// }
//
// function handleNumber(numberString) {
//     if (buffer === "0") {
//         buffer = numberString;
//     } else {
//         buffer += numberString;
//     }
// }
//
// function init() {
//     document.querySelector('.calc-buttons').addEventListener('click', function (event) {
//         buttonClick(event.target.innerText)
//     })
// }
//
//
// init();
//
// handleNumber()
//
//
// handleMath()


let display_section = document.getElementById('display')

let buttons = Array.from(document.getElementsByClassName('button'))

buttons.map( button => {
    button.addEventListener('click', el => {
        doCalculate(el)
    })
})

function doCalculate(e) {
    if(display_section.innerText === '0'){
        display_section.innerText = ''
    }
    switch (e.target.innerText) {
        case 'AC':
            display_section.innerText = '0'
            break;
        case 'DEL':
            if(display_section.innerText){
                display_section.innerText = display_section.innerText.slice(0, -1);
            }
            if(display_section.innerText === ''){
                display_section.innerText='0'
            }

            break;
        case  '=':
            try{
                display_section.innerText = eval(display_section.innerText)
            }catch {
                display_section.innerText = 'Error';
            }

            break;
        default:
            display_section.innerText += e.target.innerText
            break;
    }
}
