// Desafio Bônus – Ranking Interativo 🏆
let jogos = ['Rocket League' , 'Minecraft' , 'Overwach 2'];
let jogoFavorito = 'Rocket League';

let quant = jogos.length;

for(i = 0; i < quant; i++){
    if(jogoFavorito === jogos[i]){
        console.log(`O jogo ${jogos[i]} está em ${i + 1}º 🏆lugar no ranking, ele é o jogo favorito`);
    }
}
console.log("------------------------------------")
console.log("O ranking completo é: ")
console.log(`${jogos[0]} | em ${i - 2}º lugar no ranking🏆`);
console.log(`${jogos[1]} | em ${i - 1}º lugar no ranking🏆`);
console.log(`${jogos[2]} | em ${i}º lugar no ranking🏆`);