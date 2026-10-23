// 1.1
function cuadrado(n) {
  return n * n;
}
console.log(cuadrado(5));

// 1.2
(function () {
  let contador = 0;
  contador++;
  console.log(contador);
})();
try {
  console.log(contador);
} catch (e) {
  console.log(e.message); // contador is not defined
}

// 1.3
(function (texto, numero) {
  console.log(texto + numero);
})("Número: ", 5);

// 1.4
const esPar = n => n % 2 === 0;
console.log(esPar(4)); // true
console.log(esPar(7)); // false