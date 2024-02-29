'use strict';




const preencherFormulario = (endereco) =>{
    document.getElementById('iendereco').value = endereco.logradouro;
    document.getElementById('ibairro').value = endereco.bairro;
    document.getElementById('icidade').value = endereco.localidade;
    document.getElementById('iestado').value = endereco.uf;
}

const pesquisarCep = async() => {
 
    const cep = document.getElementById('icep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
     
        const dados = await fetch(url);
        const endereco = await dados.json();
        
    if (endereco.hasOwnProperty('erro')){
            document.getElementById('endereco').value = 'CEP não encontrado!';
        }else {
            preencherFormulario(endereco);
        }
     console.log('dados',dados)
     console.log('endereco',endereco)
}

document.getElementById('icep').addEventListener('focusout',pesquisarCep);