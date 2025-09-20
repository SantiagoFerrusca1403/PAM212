const personas =[
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "María", edad: 28}
];

const encontrado = personas.find(individuo => individuo.nombre == "Luis");
console.log(encontrado);

personas.forEach(individuo => {
    console.log(individuo.nombre, "tiene la edad de", individuo.edad);
});

const total = personas.reduce((acumulador, individuo) => {
    return acumulador + individuo.edad;
}, 0);

console.log("La suma total de las edades es:", total);
