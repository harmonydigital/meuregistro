'use strict';



const preencherFormulario = (endereco) =>{
    document.getElementById('iendereco').value = endereco.logradouro;
    document.getElementById('ibairro').value = endereco.bairro;
    document.getElementById('icidade').value = endereco.localidade;
    document.getElementById('iestado').value = endereco.uf;
}
 
const eNumero = (numero) => /^[0-9]+$/.test(numero); 
const cepValido = (cep) => cep.length == 8 && eNumero(cep); 

const pesquisarCep = async() => {
 
    const cep = document.getElementById('icep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
     
	   if (cepValido(cep)){
	 
        const dados = await fetch(url);
        const endereco = await dados.json();
		
		     console.log('dados',dados)
			 console.log('endereco',endereco)
        
		if (endereco.hasOwnProperty('erro')){
            document.getElementById('endereco').value = 'CEP não encontrado!';
        }else {
            preencherFormulario(endereco);
        }
        }else{
			document.getElementById('iendereco').value = 'CEP não encontrado!';
		}
		
		
	 

}

document.getElementById('icep').addEventListener('focusout',pesquisarCep);