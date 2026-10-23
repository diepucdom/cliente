const palabras = pedirPalabras();
const resultado = [...new Set(palabras)].sort((a, b) => b.localeCompare(a, "es"));
mostrar(resultado.join("\n"));