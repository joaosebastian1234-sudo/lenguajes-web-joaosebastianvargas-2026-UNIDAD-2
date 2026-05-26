/**
 * PUNTO 3: ENCAPSULAMIENTO
 * Protección de datos mediante Clausuras (Closures).
 */
function crearSistemaSeguridad() {
    let claveAcceso = "MaestriaSoftware2026"; // Variable privada

    return {
        validarClave: function(intento) {
            return claveAcceso === intento;
        },
        actualizarClave: function(nuevaClave) {
            if (nuevaClave.length >= 8) {
                claveAcceso = nuevaClave;
                return "Clave actualizada con éxito.";
            } else {
                return "Error: La clave es muy corta.";
            }
        }
    };
}

const sistema = crearSistemaSeguridad();
