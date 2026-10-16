const personas = new Map();
personas.set("Nacho", 40);
personas.set("Ana", 35);
personas.set("Mario", 15);

// Actualizar la edad de uno
personas.set("Ana", 36);

for (const [nombre, edad] of personas) {
  console.log(`${nombre}: ${edad}`);
}
