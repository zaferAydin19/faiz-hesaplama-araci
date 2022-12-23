const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
 
 const getSelectValue = function () {
    var selectedValue = document.getElementById('list').value;
    var selectedVade = parseInt(selectedValue);
    // console.log(selectedVade, typeof selectedVade);
    return selectedVade;
}
getSelectValue();

document.querySelector('.hesapla').addEventListener('click', function(){

    let anaPara =Number(document.querySelector('.anapara').value);
    let faizOrani = Number(document.querySelector('.faiz-orani').value);
    let aylikFaiz = anaPara  * faizOrani  * (getSelectValue() / 36500);
    let totalMoney = aylikFaiz + anaPara; 

    let aylikKazanc = function(){ 
        if(getSelectValue() == 92){
            document.querySelector('.mountly-earn').textContent = (aylikFaiz / 3 ).toFixed(2);
        } else if(getSelectValue() == 181){
            document.querySelector('.mountly-earn').textContent = (aylikFaiz / 6 ).toFixed(2);
        } else if(getSelectValue() == 360){
            document.querySelector('.mountly-earn').textContent = (aylikFaiz / 12).toFixed(2);
        } else {
            document.querySelector('.mountly-earn').textContent = '';
        }
    };

    aylikKazanc();

    console.log(anaPara, typeof anaPara, faizOrani, typeof faizOrani, aylikFaiz,aylikKazanc());
   
    if(!anaPara) {
        document.querySelector('.message').innerHTML = "Lütfen <b>Ana Para</b> Miktarı Belirtiniz!"
    } else if (!faizOrani){
        document.querySelector('.message').innerHTML = "Lütfen <b>Faiz Oranı</b> Miktarı Belirtiniz!"
    } else {
        displayMessage('');
        document.querySelector('.faiz-earn').textContent = '₺'+ aylikFaiz.toFixed(2);
        document.querySelector('.total-money').textContent = '₺'+totalMoney.toFixed(2);
        // document.querySelector('.mountly-earn').textContent = '₺'+aylikKazanc.toFixed(2);
    }

    document.querySelector('.temizle').addEventListener('click', function(){

        document.querySelector('.anapara').value = '';
        document.querySelector('.faiz-orani').value = '';
        document.querySelector('.faiz-earn').textContent = '';
        document.querySelector('.total-money').textContent = '';
        document.querySelector('.mountly-earn').textContent = '';
        displayMessage('');
        getSelectValue();
        console.log("Temizle'ye basıldı!");
    
    });
});
