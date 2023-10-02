const listaDePessoas = [
    { nome: 'João' },
    { nome: 'Maria' },
    { nome: 'Pedro' },
    { nome: 'Tavares' },
    { nome: 'Catiuca' },
    { nome: 'Pereira' },
];

const numeroPorTela = 3;
let contador = 0;


if (numeroPorTela <= listaDePessoas.length) {
    for (let i = 0; i < numeroPorTela; i++)
        console.log(listaDePessoas[i].nome);
} else {
    console.log('A quantidade de pessoas a imprimir é maior que o tamanho da lista.');
}