for (let i = 0; i < 50; i++) {
  const combinacion = new Set();
  while (combinacion.size < 6) {
    combinacion.add(Math.floor(Math.random() * 49) + 1);
  }
  console.log([...combinacion].sort((a, b) => a - b));
}
