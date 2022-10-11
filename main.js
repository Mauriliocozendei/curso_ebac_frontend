const form = document.getElementById('formulario');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');

function validaForm(campoA, campoB){
    return campoB > campoA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    if (validaForm(campoA.valueAsNumber, campoB.valueAsNumber)) {
        document.querySelector('.mensagem-sucesso').style.display = 'block'
    } else {
        campoB.style.border = '1px solid red';
        document.querySelector('.mensagem-erro').style.display = 'block';
    }
})

campoA.addEventListener('change', function(e) {
    
    if (campoB > campoA){
        document.querySelector('.mensagem-sucesso').style.display = 'block'
    } else {
        document.querySelector('.mensagem-sucesso').style.display = 'none'
    }
})

campoB.addEventListener('change', function(e) {

    if (campoB < campoA){
        campoB.style.border = '1px solid red';
        document.querySelector('.mensagem-erro').style.display = 'block'
    } else {
        campoB.style = ''
        document.querySelector('.mensagem-erro').style.display = 'none'
    }

})
