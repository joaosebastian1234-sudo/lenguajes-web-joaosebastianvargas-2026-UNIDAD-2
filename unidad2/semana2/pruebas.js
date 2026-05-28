const { CuentaBancaria, CuentaAhorros, CuentaCorriente } = require('./finanzas.js');

console.log("=== EJECUTANDO PRUEBAS DE LA SEMANA 2 ===\n");

// 1. Probar validación inicial
try {
    console.log("Intentando crear una cuenta con saldo inicial negativo (-5000)...");
    const cuentaInvalida = new CuentaBancaria("Invalida", -5000);
} catch (error) {
    console.log(`[OK] Validación de saldo negativo exitosa: ${error.message}`);
}

// 2. Probar Cuenta de Ahorros
console.log("\n--- Prueba Cuenta de Ahorros ---");
const miAhorro = new CuentaAhorros("Joao Ahorros", 100000, 50000);
console.log(`Saldo inicial: $${miAhorro.saldo}`);
console.log("Intentando retirar $60.000 (Debería fallar)...");
miAhorro.retirar(60000);

// 3. Probar Cuenta Corriente
console.log("\n--- Prueba Cuenta Corriente ---");
const miCorriente = new CuentaCorriente("Joao Corriente", 30000);
console.log(`Saldo inicial: $${miCorriente.saldo}`);
console.log("Intentando retirar $60.000 (Usará sobregiro)...");
miCorriente.retirar(60000);
console.log(`Saldo final tras sobregiro: $${miCorriente.saldo}`);
