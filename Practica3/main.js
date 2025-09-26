function simulatorAPI(){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve("Datos recibidos correctamente");

        }, 5000);
    });
}
async function obtenerDatos() {
    console.log("Solicitando datos")
    const respuesta = await simulatorAPI();
    console.log(respuesta);
    
}
console.log(obtenerDatos());