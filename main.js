function calculateImc() {

    var weight = document.getElementById('weightId').value;
    var height = document.getElementById('heightId').value / 100;

    var result = weight / Math.pow(height, 2);

    if(getWeightStatus(result))
    {   
    console.log("ok"); 
    document.getElementById('btn-calculo').setAttribute("data-target", "#modalResultado");
    document.getElementById('resultImcId').innerHTML = result.toFixed(2);
    document.getElementById('resultTextId').innerHTML = getWeightStatus(result);
    }
    else{
        alert("É necessário preencher com altura e peso.")
    }
}

function getWeightStatus(imc) {
    if (imc < 16) {
        return 'Magreza Grave';
    } if (imc >= 16 && imc <17) {
        return 'Muito Abaixo do Peso';
    } if (imc >= 17 && imc <= 18.49) {
        return 'Abaixo do Peso';
    } if (imc >= 18.5 && imc <= 24.9) {
        return 'Peso Normal';
    } if (imc >= 25 && imc <= 29.9) {
        return 'Acima do Peso';
    } if (imc >= 30 && imc <= 34.9) {
        return 'Obesidade grau 1';
    } 
    if (imc >= 35 && imc <= 39.9) {
        return 'Obesidade grau 2';
    } 
    if (imc >= 40) {
        return 'Obesidade grau 3';
    }
}