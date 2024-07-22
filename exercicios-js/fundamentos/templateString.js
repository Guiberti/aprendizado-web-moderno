const nome = "rebeca";
const concatenacao = "Olá " + nome + "!"; //padrao
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template);

// expressoes...
console.log(` 1 + 1 = ${1+1}`);

const up = texto => texto.toUpperCase(); //funcao arrow

console.log(`Ei... ${up("cuidado!")}`);