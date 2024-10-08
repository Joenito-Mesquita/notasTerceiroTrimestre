function notas(){
const nota1 = Number(document.getElementById('nota1').value);
const nota2 = Number(document.getElementById('nota2').value);
const resultado = document.getElementById('resultado');
if(nota1 < 0 || nota2 < 0){
  resultado.innerHTML = `<strong><mark>Você não pode colocar números negativos no valor da nota.</mark></strong>`;
} else {
let nota3 = (60 - (3 * nota1) - (3 * nota2)) / 4;
if (nota3 > 10){
  resultado.innerHTML = `<strong><mark>Você já está na recuperação!</mark></strong>`;
} else if(nota3 < 0) {
  resultado.innerHTML = `<strong><mark>Você colocou alguma nota errada!</mark></strong>`;
} else {
  resultado.innerHTML = `<strong>A nota que voce precisa tirar no terceiro trimetre é: <mark>${nota3}</mark></strong>`;
}
};
}
