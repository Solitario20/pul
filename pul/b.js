let az = prompt('AZN in məbləğini qeyd edin:')
let dollar = az/1.70
let result = az + ' AZN' + ' = ' + dollar + ' $'


document.getElementById('result').innerHTML = result