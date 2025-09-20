const persona = {
    nombre: "Santiago Alcaraz Ferrusca",
    edad: 18,
    direccion: {
        ciudad: "Querétaro",
        pais: "México"
    }
};

const {nombre,edad,direccion: { ciudad }}=persona;
console.log("Hola que tal, mi nombre es ", nombre, " tengo la edad de ", edad, " y vivo en ",ciudad);