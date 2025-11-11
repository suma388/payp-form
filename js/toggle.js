document.getElementById('cash-out-box').style.display = 'none';
document.getElementById('Transfer').style.display = 'none';
document.getElementById('bonus-form').style.display = 'none';
document.getElementById('pay-bill-form').style.display = 'none';
// toggle function------------------------------------------

document.getElementById('add-money').addEventListener('click', function(){
    document.getElementById('add-money-box').style.display = 'block';
    document.getElementById('cash-out-box').style.display = 'none';
    document.getElementById('Transfer').style.display = 'none';
    document.getElementById('bonus-form').style.display = 'none';
    document.getElementById('pay-bill-form').style.display = 'none';
});
document.getElementById('cash-out').addEventListener('click', function(){
    document.getElementById('cash-out-box').style.display = 'block';
    document.getElementById('add-money-box').style.display = 'none';
    document.getElementById('Transfer').style.display = 'none';
    document.getElementById('bonus-form').style.display = 'none';
    document.getElementById('pay-bill-form').style.display = 'none';
});
document.getElementById('transfer').addEventListener('click', function(){
    document.getElementById('pay-bill-form').style.display = 'none';
    document.getElementById('bonus-form').style.display = 'none';
    document.getElementById('cash-out-box').style.display = 'none';
    document.getElementById('add-money-box').style.display = 'none';
    document.getElementById('Transfer').style.display = 'block';
}); 
document.getElementById('bonus-box').addEventListener('click', function(){
    document.getElementById('bonus-form').style.display = 'block';
    document.getElementById('cash-out-box').style.display = 'none';
    document.getElementById('add-money-box').style.display = 'none';
    document.getElementById('Transfer').style.display = 'none';
    document.getElementById('pay-bill-form').style.display = 'none';
})
document.getElementById('pay-bill-box').addEventListener('click', function(){
    document.getElementById('pay-bill-form').style.display = 'block';
    document.getElementById('bonus-form').style.display = 'none';
    document.getElementById('cash-out-box').style.display = 'none';
    document.getElementById('add-money-box').style.display = 'none';
    document.getElementById('Transfer').style.display = 'none';
})
