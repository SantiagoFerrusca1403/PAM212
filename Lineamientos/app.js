class inicioPAM 
{
    ReglamentoPOO() 
    {
        return `Reglamento de POO:
- No usar celulares
- No copiar código de IAs
- Entregar prácticas y trabajos a tiempo`;
    }

    LineamientosClassroom() 
    {
        return `Lineamientos de Classroom:
- Subir tareas en PDF
- No se aceptan trabajos incompletos
- Respetar fechas de entrega
- Mandar tareas y no solo SUBIRLAS`;
    }

    FechasDeParciales() 
    {
        return `Fechas de Parciales:
- Parcial 1: 29 de Septiembre del 2025
- Parcial 2: 03 de Octubre del 2025
- Parcial 3: 01 de Diciembre del 2025`;
    }

    PorcentajesPorParcial() 
    {
        return `Porcentajes:
- Parcial 1: 40% Conocimiento, 20% Desempeño, 30% Producto y 10% PI----------------------------------------------------------------------------------------------------------------------------------
- Parcial 2: 40% Conocimiento, 20% Desempeño, 20% Producto y 20% PI---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
- Parcial 3: 20% Conocimiento, 10% Desempeño, 40% Producto y 30% PI`;
    }
}


const pam = new inicioPAM();

function mostrar(opcion) {
    const output = document.getElementById("output");

    if (opcion === "reglamento") 
        {
        output.textContent = pam.ReglamentoPOO();
    } else if (opcion === "lineamientos") 
        {
        output.textContent = pam.LineamientosClassroom();
    } else if (opcion === "fechas") 
        {
        output.textContent = pam.FechasDeParciales();
    } else if (opcion === "porcentajes") 
        {
        output.textContent = pam.PorcentajesPorParcial();
    }
}
