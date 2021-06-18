const input = document.getElementById('calc_inp');
const inp_value = input.value;
const equal = document.getElementById('btn_eq');
// console.log(inp_value);

// const clear = (item) => {
//     item.innerText = "";
// }

//숫자누르면
const calc_num = [];

document.querySelectorAll('.btn_num').forEach((btnNum) => {
    btnNum.addEventListener('click', () => {

        input.innerText += Number(btnNum.value);
        calc_num.push(btnNum.value);
        console.log(calc_num)
        
    })
})


//c 누르면
document.getElementById('btn_c').addEventListener('click', () => {
    calc_num.remove;
    calc_mark.remove;
})

//연산기호 누르면
const calc_mark =[]
document.querySelectorAll('.btn_mark').forEach((mark) => {
    mark.addEventListener('click', () => {
        if(!input.innerText) {
            return
        }
        else {
            input.innerText += mark.value;

            calc_mark.push(mark.value)
            console.log('mark: ' + calc_mark)
        }
    })
})

//=누르면
// equal.addEventListener('click', () => {
//     console.log('dddd')
//     const num = calc.slice("+");
//     console.log(num)
// })






