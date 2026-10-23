const pedirPalabras = () => {
  const palabras = [];
  let palabra = prompt("Introduce una palabra:");
  while (palabra !== null && palabra.trim() !== "") {
    palabras.push(palabra.trim());
    palabra = prompt("Introduce una palabra:");
  }
  return palabras;
};

const mostrar = texto => {
  document.getElementById("resultado").textContent = texto;
};