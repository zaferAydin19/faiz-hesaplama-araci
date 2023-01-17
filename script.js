const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

function format(input)
            {
                var nStr = input.value + '';
                nStr = nStr.replace( /\,/g, "");
                x = nStr.split( ',' );
                x1 = x[0];
                x2 = x.length > 1 ? '.' + x[1] : '';
                var rgx = /(\d+)(\d{3})/;
                while ( rgx.test(x1) ) {
                    x1 = x1.replace( rgx, '$1' + '.' + '$2' );
                }
                input.value = x1 + x2;
            }

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
 
const getSelectValue = function () {
    var selectedValue = document.getElementById('list').value;
    var selectedVade = parseInt(selectedValue);
    // console.log(selectedVade, typeof selectedVade);
    return selectedVade;
}
getSelectValue();

document.querySelector('.hesapla').addEventListener('click', function(){

    let anaPara = parseInt(document.querySelector('.anapara').value);
    let faizOrani = parseInt(document.querySelector('.faiz-orani').value);
    let aylikFaiz = anaPara  * faizOrani  * (getSelectValue() / 36500);
    let totalMoney = aylikFaiz + anaPara;

    let aylikKazanc = function(){ 
        if(getSelectValue() == 92){
            document.querySelector('.mountly-earn').textContent = numberWithCommas((aylikFaiz/3).toFixed(2));
        } else if(getSelectValue() == 181){
            document.querySelector('.mountly-earn').textContent = numberWithCommas((aylikFaiz/6).toFixed(2));
        } else if(getSelectValue() == 360){
            document.querySelector('.mountly-earn').textContent = numberWithCommas((aylikFaiz/12).toFixed(2));
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
        document.querySelector('.faiz-earn').textContent = '₺'+ numberWithCommas(aylikFaiz.toFixed(2));
        document.querySelector('.total-money').textContent = '₺'+ numberWithCommas(totalMoney.toFixed(2));
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

function format(input)
            {
                var nStr = input.value + '';
                nStr = nStr.replace( /\,/g, "");
                x = nStr.split( '.' );
                x1 = x[0];
                x2 = x.length > 1 ? '.' + x[1] : '';
                var rgx = /(\d+)(\d{3})/;
                while ( rgx.test(x1) ) {
                    x1 = x1.replace( rgx, '$1' + ',' + '$2' );
                }
                input.value = x1 + x2;
            }

