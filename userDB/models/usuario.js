export class Usuario{
    constructor(id, nombre, fechaCreacion) {
        this.id = id;
        this.nombre = nombre;
        this.fechaCreacion = fechaCreacion || new Date().toISOString();
    }
    static validar(nombre){
    if (!nombre || nombre.trim().length === 0){
        throw new Error('El nombre no puede estar vacío');
    }
    if (nombre.lenght > 50){
        throw new Error('El nombre no puede tener mas de 50 letras');
    }
    return true;
}
}
