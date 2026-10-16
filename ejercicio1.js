let data = [
  {name: "Nacho", telephone: "966112233", age: 40},
  {name: "Ana", telephone: "911223344", age: 35},
  {name: "Mario", phone: "611998877", age: 15},
  {name: "Laura", telephone: "633663366", age: 17}
];

// Añadir dos elementos al final
data.push(
  {name: "Pedro", telephone: "611944444", age: 25},
  {name: "Julia", phone: "633232323", age: 37}
);
console.log(data);

// Ordenar por edad
data.sort((a, b) => a.age - b.age);
console.log(data);

// Ordenar por nombre
data.sort((a, b) => a.name.localeCompare(b.name));
console.log(data);

// Mayores de 30 años
const mayores30 = data.filter(p => p.age > 30);
console.log(mayores30);
