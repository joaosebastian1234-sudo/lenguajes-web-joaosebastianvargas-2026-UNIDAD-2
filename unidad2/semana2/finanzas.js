/**
 * Clase Base: CuentaBancaria
 * Implementa encapsulamiento con campos privados (#) de ES2022.
 */
class CuentaBancaria {
    #titular;
    #saldo;

    constructor(titular, saldoInicial) {
        if (saldoInicial < 0) {
            throw new Error("Error: El saldo inicial no puede ser negativo.");
        }
        this.#titular = titular;
        this.#saldo = saldoInicial;
    }

    get titular() { return this.#titular; }
    get saldo() { return this.#saldo; }

    setSaldo(nuevoSaldo) {
        this.#saldo = nuevoSaldo;
    }

    depositar(monto) {
        if (monto <= 0) return false;
        this.#saldo += monto;
        return true;
    }

    retirar(monto) {
        if (monto <= 0 || monto > this.#saldo) return false;
        this.#saldo -= monto;
        return true;
    }
}

/**
 * Clase Derivada: CuentaAhorros
 * Regla: Impide retiros si el saldo remanente es inferior al umbral mínimo.
 */
class CuentaAhorros extends CuentaBancaria {
    constructor(titular, saldoInicial, umbralMinimo = 50000) {
        super(titular, saldoInicial);
        this.umbralMinimo = umbralMinimo;
    }

    retirar(monto) {
        if (this.saldo - monto < this.umbralMinimo) {
            console.error(`[X] Retiro rechazado: El saldo mínimo no puede ser menor a $${this.umbralMinimo}.`);
            return false;
        }
        this.setSaldo(this.saldo - monto);
        return true;
    }
}

/**
 * Clase Derivada: CuentaCorriente
 * Regla: Permite sobregiro limitado cobrando una comisión automática.
 */
class CuentaCorriente extends CuentaBancaria {
    constructor(titular, saldoInicial, limiteSobregiro = 200000, comisionSobregiro = 5000) {
        super(titular, saldoInicial);
        this.limiteSobregiro = limiteSobregiro;
        this.comisionSobregiro = comisionSobregiro;
    }

    retirar(monto) {
        if (monto <= this.saldo) {
            this.setSaldo(this.saldo - monto);
            return true;
        }

        const deficit = monto - this.saldo;
        const costoTotal = deficit + this.comisionSobregiro;

        if (costoTotal > this.limiteSobregiro) {
            console.error("[X] Retiro rechazado: Excede el límite de sobregiro permitido.");
            return false;
        }

        this.setSaldo(0 - costoTotal);
        console.log(`[!] Alerta: Se utilizó sobregiro. Comisión aplicada: $${this.comisionSobregiro}.`);
        return true;
    }
}

module.exports = { CuentaBancaria, CuentaAhorros, CuentaCorriente };
