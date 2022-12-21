const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

 const getSelectValue = function () {
    var selectedValue = document.getElementById('list').value;
    var selectedVade = parseInt(selectedValue);
    console.log(selectedVade, typeof selectedVade);
    return selectedVade;
}
getSelectValue();

document.querySelector('.hesapla').addEventListener('click', function(){

    let anaPara =Number(document.querySelector('.anapara').value);
    let faizOrani = Number(document.querySelector('.faiz-orani').value);
    let aylikFaiz = anaPara  * faizOrani  * (getSelectValue() / 36500);
    let totalMoney = aylikFaiz + anaPara; 
    console.log(anaPara, typeof anaPara, faizOrani, typeof faizOrani, aylikFaiz);
    

    if(!anaPara) {
        document.querySelector('.message').innerHTML = "Lütfen <b>Ana Para</b> Miktarı Belirtiniz!"
    } else if (!faizOrani){
        document.querySelector('.message').innerHTML = "Lütfen <b>Faiz Oranı</b> Miktarı Belirtiniz!"
    } else {
        displayMessage('');
        document.querySelector('.mountly-earn').textContent = '₺'+ aylikFaiz.toFixed(2);
        document.querySelector('.total-money').textContent = '₺'+totalMoney.toFixed(2);
    }

    document.querySelector('.temizle').addEventListener('click', function(){

        document.querySelector('.anapara').value = '';
        document.querySelector('.faiz-orani').value = '';
        document.querySelector('.mountly-earn').textContent = '';
        document.querySelector('.total-money').textContent = '';
        displayMessage('');
        console.log("Temizle'ye basıldı!");
    
    });

});
