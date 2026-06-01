

const paises = ['Argentina', 'Brasil', 'Chile', 'Paraguay', 'Uruguay'];

for (const pais of paises) {
  if (pais === 'Uruguay') {
    console.log(` ${pais} (mi país)`);
  } else {
    console.log(`→ ${pais}`);
  }
}
