'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var box = 0
  var arraybinario = num.toString().split('').reverse()
for (let i = 0; i < arraybinario.length; i++) {
  box += Math.pow(2, i) * arraybinario[i];
   
    }return box

}

function DecimalABinario(num) {
  // tu codigo aca
  let arrayBinario = []
  while(num > 0){
    arrayBinario.unshift(num % 2)
    num = Math.floor(num / 2)
  }
  return arrayBinario.join('')

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}