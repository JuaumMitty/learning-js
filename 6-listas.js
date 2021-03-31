console.log(`Trabalhando com  listas`);

// const salvador;
// const saoPaulo;
// const rioDeJaneiro;

const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`,
) // Sintaxe para criar array

listaDeDestinos.push(`Curitiba`); // Adicionando item no array
console.log(`Destinos possíveis: `);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);