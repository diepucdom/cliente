const contarPalabras = palabras => {
  const mapa = new Map();
  palabras.forEach(p => mapa.set(p, (mapa.get(p) || 0) + 1));
  return mapa;
};

const mapa = contarPalabras(pedirPalabras());
mostrar([...mapa].map(([palabra, veces]) => `${palabra}: ${veces}`).join("\n"));