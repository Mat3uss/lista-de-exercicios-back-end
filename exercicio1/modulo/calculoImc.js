const calcularImc = function(pesoF, alturaF){
    
  let peso = pesoF.replace(',' , '.')
  let altura = alturaF.replace(',' , '.')
  let resultado
  let situacao
  let status = false

      if(peso == ' ' || peso == ' '){
          console.log('ERRO: Todos os valores devem ser digitados')

      }
      else if(isNaN(peso) || isNaN(altura)){
          console.log('ERRO: Todos os valores devem ser números')
      }
      else{
          Number(peso)
          Number(altura)
          Number(resultado)

          resultado = peso / (Math.pow(altura, 2))
          console.log('O Imc é: ' + resultado.toFixed(1))
          status = true
          
          if(resultado < 18.5){
              situacao = 'O paciente está abaixo do peso ideal'
          }else if(resultado >= 18.5 && resultado <= 24.9 ){
              situacao = 'O paciente está no peso ideal'
          }else if(resultado >= 25 && resultado <= 29.9){
              situacao = 'O paciente está com sobrepeso'
          }else if(resultado >= 30 && resultado <= 34.9){
              situacao = 'O paciente está com obesidade nível 1'
          }else if(resultado >= 35 && resultado <= 39.9){
              situacao = 'O paciente está com obesidade nível 2'
          }else if(resultado >= 40){
              situacao = 'O paciente está com obesidade nível 3'
          }

          console.log(situacao)

      }

      return status

      

}
module.exports = {
  calcularImc
}



