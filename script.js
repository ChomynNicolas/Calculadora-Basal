const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const SUPERFC = document.getElementById('opciones');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').valueAsNumber;
    console.log('Dato ingresado ', DATO)
    if (DATO > 0) {
        if(DATO<31){
        ERROR.style.display = 'none';
        let flujo = calcflu(DATO);
        let mant = flujo * 1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mant + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    }else {
        ERROR.style.display = 'none';
        let flujo = calcflu(DATO);
        let mant = flujo * 1.5;
        FLU.innerHTML = flujo*1500 +' 0 '+flujo*2000 + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + Math.round(mant*1500)+' 0 '+Math.round(mant*2000) + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';

        


    }



    } else { ERROR.style.display = 'block'; }
})

function calcflu(peso) {
    let num = peso;
    let flujo = 0;
    if (num < 31) {
        if (num > 20) {

            aux = num - 20;
            flujo = 1500 + (aux * 20);
        }
        if (num > 10) {
            aux = num - 10;
            flujo = 1000 + (aux * 50);
        } else { flujo = num * 100; }
    } else {
        aux = num;
        res = (((aux * 4) + 7)/(aux + 90));
        res = Number(res.toFixed(2));
        flujo = res;
    }

    return flujo;
}