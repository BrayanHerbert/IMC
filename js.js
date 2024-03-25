function meuEscopo(){

let result = document.querySelector('#result')


let form = document.querySelector('.form')


form.addEventListener('submit', function clicar(enviar){
enviar.preventDefault()



let peso = document.querySelector('#peso').value
let altura = document.querySelector('#altura').value

const calc = peso / (altura * altura)


result.innerHTML = `Seu IMC é ${calc.toFixed(1)}`
    
if (peso <= 0 && altura <= 0 ) {
        result.innerHTML = ('<strong>Como você quer calcular seu IMC se você não coloca a altura e seu peso? </strong>')

}else if (peso <= 0 ){
    result.innerHTML = 'Você esqueceu do <strong>Peso</strong>'
}else if(altura <= 0) {
    result.innerHTML = 'Você esqueceu da <strong>Altura</strong>'
} else{
        if (calc <= 18.5){

            result.innerHTML = `Seu IMC é de ${calc.toFixed(1)} <strong>ABAIXO DO PESO</strong>`

        } else if (calc > 18.5 && calc <= 24.9){

            result.innerHTML = `Seu IMC é de ${calc.toFixed(1)} <strong>PESO NORMAL</strong>`
            
        }else if (calc > 25 && calc <= 29.9){

            result.innerHTML = `Seu IMC é de ${calc.toFixed(1)} <strong>SOBRE PESO</strong>`

        }else if (calc > 30 && calc <= 34.9){
            result.innerHTML = `Seu IMC é de ${calc.toFixed(1)} <strong>Obesidade grau 1</strong>`
        }else if (calc > 35 && calc <= 39.9){
            result.innerHTML = `Seu IMC é de ${calc.toFixed(1)} <strong>Obesidade grau 2</strong>`
        }else{
            result.innerHTML = `Seu IMC é de ${calc.toFixed(1)} <strong>Obesidade grau 3</strong> Mais gordo que isso só a sua mãe kskskks`
        }


}





})


}
meuEscopo()