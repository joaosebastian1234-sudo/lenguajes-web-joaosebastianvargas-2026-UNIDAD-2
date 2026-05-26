/**
 * PUNTO 2: PROCESAMIENTO DE INVENTARIO
 * Uso de métodos funcionales para la gestión de libros.
 */

const libros = [
    { titulo: "El Aleph", autor: "Borges", ventas: 500, stock: 10 },
    { titulo: "Rayuela", autor: "Cortázar", ventas: 1200, stock: 2 },
    { titulo: "Ficciones", autor: "Borges", ventas: 850, stock: 5 },
    { titulo: "100 años de soledad", autor: "García Márquez", ventas: 3000, stock: 0 },
];

// 1. Títulos con ventas superiores a 1000
const ventasTop = libros
    .filter(libro => libro.ventas > 1000)
    .map(libro => libro.titulo);

// 2. Sumatoria total de ventas de "Borges"
const totalVentasBorges = libros
    .filter(libro => libro.autor === "Borges")
    .reduce((acc, libro) => acc + libro.ventas, 0);

// 3. Estado de disponibilidad ordenado por ventas (Descendente)
const inventarioCompleto = libros
    .map(libro => ({
        titulo: libro.titulo,
        estado: libro.stock > 0 ? "Disponible" : "Agotado",
        ventas: libro.ventas
    }))
    .sort((a, b) => b.ventas - a.ventas)
    .map(({ titulo, estado }) => ({ titulo, estado }));

// Resultados para verificación técnica
console.log("Libros más vendidos:", ventasTop);
console.log("Ventas totales de Borges:", totalVentasBorges);
console.table(inventarioCompleto);
