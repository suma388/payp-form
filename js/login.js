document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const numberFild = document.getElementById('number-fild').value;
    const pinFild = document.getElementById('pin-fild').value;
    const nPinFild = parseInt(pinFild);
    if(numberFild.length === 11){
        if(nPinFild === 1234){
            window.location.href="home.html";
        }
        else{
            alert('Incorect Password')
        }
    }
    else{
        alert('Invalid Number')
    }
})