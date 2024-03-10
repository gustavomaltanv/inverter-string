function inverterString(string){
    let novaString = '';
    for (let i=string.length-1;i>=0;i--){
        novaString += string[i];
    }
    return novaString;
}

const exemplo = 'Hello!';
const resultado = inverterString(exemplo);

console.log('Original: ' + exemplo);
console.log('Invertida: ' + resultado);