let classificação = 0
let vitoria = 0
let derrota = 0
let media = 0
function saldoVitorias(vitoria, derrota) {
    media = vitoria - derrota
}
for (let i = 0; i <= 30; i++) {
    derrota += 1
}
saldoVitorias(140, derrota)
if (media <= 10) {
    console.log("Classificação Ferro");
}
else if (media >= 11 && media <= 20) {
    classificação = ("Classificação Bronze")
}
else if (media >= 21 && media <= 50) {
    classificação = ("Classificação Prata")
}
else if (media >= 51 && media <= 80) {
    classificação = ("Classificação Ouro")
}
else if (media >= 81 && media <= 90) {
    classificação = ("Classificação Diamante")
}
else if (media >= 91 && media <= 100) {
    classificação = ("Classificação Lendário")
}
else if (media > 101) {
    classificação = ("Classificação Imortal")
}



console.log("O Herói tem o saldo de " + media, " e está no nível de " + classificação)
