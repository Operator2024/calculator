// CALCULATE

const display = document.getElementById('display');
const cls_numbers = ["item0", "item1", "item2", "item3", "item4",
    "item5", "item6", "item7", "item8", "item9"]
const cls_signs = ["item-divide", "item-myltiply", "item-minus", "item-plus"]

function appendToDisplay(input) {


    // display.value += input.target.innerHTML;
    if (display.value.search(/(\+|\-|\*|\/)$/g) != -1) {
        var use_sign = true;
    }
    else {
        var use_sign = false;
    }

    var idx_sign = input.target.innerHTML.toString().search(/(\+|\-|\*|\/)$/g);
    console.log(idx_sign, use_sign)
    // var numbers = display.value.serach(/\+|\-|\×|\÷/g);
    if (idx_sign != -1 && !use_sign) {
        sign = input.target.innerHTML.toString()[idx_sign];
        if (sign == "*" || sign == "+" || sign == "-" || sign == "/") {
            display.value += sign;
            use_sign = true;
        }
        else {
            display.value += 'Error1';
        };
    } else if (idx_sign == -1 && use_sign) {
        display.value += input.target.innerHTML;
    } else if (idx_sign != -1 && use_sign) {
        display.value += input.target.innerHTML
        calculate(use_sign);
        use_sign = false;
    } else {
        display.value += input.target.innerHTML;
    };
    console.log(idx_sign, display.value[idx_sign]);
}

function clearDisplay() {
    display.value = '';
}

function calculate(next_sign = false) {
    try {
        if (next_sign){
            console.log(display.value);
        } else {
            console.log(display.value)
            display.value = eval(display.value);
        }

        // display.value = eval(display.value);
    }
    catch (e) {
        display.value = 'Error';
    }
}

cls_numbers.forEach(function (cls_number) {
    document.getElementsByClassName(cls_number)[0].addEventListener("click", appendToDisplay, false);
});

cls_signs.forEach(function (cls_number) {
    document.getElementsByClassName(cls_number)[0].addEventListener("click", appendToDisplay, false);
});
