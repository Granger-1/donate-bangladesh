function getInputValue(id) {
    const input = document.getElementById(id).value;
    const inputInt = parseInt(input);
    return inputInt;
};

// function getInnerText(id) {
//     const input = document.getElementById(id).innerText;
//     const inputInt = parseInt(input);
//     return inputInt;
// };

// const a = getInnerText('total-amount-home');
// const b = getInnerText('donated-amount');


let c = 0;
// let d = a;

// document.getElementById('btn-donate').addEventListener('click', function (event) {
//     const input = getInputValue('balance-total');
//     c += input;
//     d -= input;

//     document.getElementById('donated-amount').innerText = c;
//     document.getElementById('total-amount-home').innerText = d;

//     document.getElementById('balance-total').value = '';

// });

let totalValue = 0;
let homeTotalValue = 5000;

const allHomeValue = document.getElementsByClassName('home-value-js');

const allBtn = document.getElementsByClassName('btn-donate-js');

for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        const inputValue = parseInt(e.target.parentNode.childNodes[7].childNodes[1].value);
        const donatedValue = parseInt(e.target.parentNode.childNodes[1].childNodes[1].childNodes[3].childNodes[0].innerText);

        totalValue += inputValue;
        homeTotalValue -= inputValue;

        // navbar calculation
        for (const homeValue of allHomeValue) {
            homeValue.innerText = homeTotalValue;
        }
        
        totalValue += inputValue;
        e.target.parentNode.childNodes[1].childNodes[1].childNodes[3].childNodes[0].innerText = inputValue;
        // donated value increment






        e.target.parentNode.childNodes[7].childNodes[1].value = '';
    })
}