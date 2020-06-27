var firstNumber = '';
var secondNumber = '';
var operator = '';
var calculatedResult = '';


function clearScreen(){
    document.getElementById('calculator-screen').value = 0;
    this.firstNumber = '';
    this.secondNumber = '';
    this.operator = '';
    this.calculatedResult = '';
}

function getNumber(num){
    if(operator.length === 0){
        firstNumber += num;
        document.getElementById('calculator-screen').value = firstNumber;
    }
    else{
        secondNumber += num;
        document.getElementById('calculator-screen').value = secondNumber;
    }
}

function getDecimal(){
    if(!this.firstNumber.includes('.') && this.firstNumber.length > 0){
        this.firstNumber += '.';
        document.getElementById('calculator-screen').value = this.firstNumber;
    }
    if(!this.secondNumber.includes('.') && this.secondNumber.length > 0){
        this.secondNumber += '.';
        document.getElementById('calculator-screen').value = this.secondNumber;
    }
}

function doCalculation(){
    var num1 = +this.firstNumber;
    var num2 = +this.secondNumber;
    switch(this.operator){
        case '+': 
            this.calculatedResult = num1 + num2;
            break;
        case '-': 
            this.calculatedResult = num1 - num2;
            break;
        case '*': 
            this.calculatedResult = num1 * num2;
            break;
        case '/': 
            this.calculatedResult = num1 / num2;
            break;
    }   
    document.getElementById('calculator-screen').value = this.calculatedResult;
    this.firstNumber = this.calculatedResult;
    this.secondNumber = '';
}

function getOperation(op){
    console.log(op);
    if(this.firstNumber.length > 0){
        this.operator = op;
    }
    if(this.calculatedResult.length){
        this.firstNumber = this.calculatedResult;
        this.secondNumber = '';
    }
}