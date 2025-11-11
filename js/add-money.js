document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const pin = document.getElementById('pin-fild').value;
    const convertedPin = parseInt(pin);
    const amount = document.getElementById('amount-fild').value;
    const convertedAmount = parseFloat(amount);
    const mainBlance = document.getElementById('main-balance').innerText;
    const convertedBlance = parseFloat(mainBlance);
    const number = document.getElementById('number-fild');
    if(convertedAmount && convertedPin){
        if(convertedPin === 1234){
        const sum = convertedBlance + convertedAmount;
        document.getElementById('main-balance').innerText = sum;
        }
        else{
            alert('Invalid pin');
        }
    }
    else{
        alert('Please enter valid number');
    }
})