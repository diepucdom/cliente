// 2.1
const numeros = [1, 2, 3, 4, 5];

const sumaIterativa = arr => {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma;
};

const sumaRecursiva = (arr, i = 0) =>
  i === arr.length ? 0 : arr[i] + sumaRecursiva(arr, i + 1);

console.log(sumaIterativa(numeros)); // 15
console.log(sumaRecursiva(numeros)); // 15
// Mejor la iterativa: más eficiente y sin riesgo de desbordar la pila con arrays grandes.

// 2.2
const productos = [
  { nombre: "Camiseta", precio: 20 },
  { nombre: "Pantalón", precio: 30 },
  { nombre: "Zapatos", precio: 50 }
];
productos.forEach(p => {
  p.precio = p.precio * 1.1;
});
console.log(productos);

// 2.3
const personas = [
  { nombre: "Juan", edad: 17 },
  { nombre: "Ana", edad: 22 },
  { nombre: "Pedro", edad: 19 },
  { nombre: "Laura", edad: 16 }
];
const total = personas
  .filter(p => p.edad > 18)
  .map(p => p.edad * 2)
  .reduce((acc, edad) => acc + edad, 0);
console.log(total); // 82