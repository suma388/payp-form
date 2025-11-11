document.getElementById('cash-out-btn').addEventListener('click', function(){
    const withDraw = document.getElementById('withdraw-fild').value;
    const convertedWithdrawAmount = parseFloat(withDraw);
    const mainBlance =document.getElementById('main-balance').innerText;
    const convertedMainBlance = parseFloat(mainBlance);
    const pin = document.getElementById('pin-input').value;
    const convertedPin = parseInt(pin);
    const agentNumber = document.getElementById('agent-number').value;
        if(agentNumber.length === 11){
        if(convertedWithdrawAmount <= convertedMainBlance && convertedPin === 1234){
        const sum = convertedMainBlance - convertedWithdrawAmount;
        document.getElementById('main-balance').innerText = sum;
        }
        else{
            alert('Somthing went worng');
        }
    }
    else{
        alert('Enter agent 11 digit number');
    }
}); 