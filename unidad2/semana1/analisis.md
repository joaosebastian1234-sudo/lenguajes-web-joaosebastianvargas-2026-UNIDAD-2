# Informe de Auditoría Técnica: Análisis de Mecanismos Internos de JavaScript

## 1. Mecanismo de Hoisting
El **Hoisting** es un proceso del motor de JavaScript donde las declaraciones de variables (con `var`) y funciones se mueven a la parte superior de su contexto de ejecución durante la fase de compilación.

* **Problema detectado:** Al usar `var`, la variable se inicializa automáticamente como `undefined`. Esto permite acceder a ella antes de su línea de creación, lo que genera errores lógicos silenciosos y "deuda técnica".
* **Implicación de seguridad:** Se pueden procesar datos inexistentes sin que el sistema lance un error, afectando la integridad de los registros bibliotecarios.
* **Solución aplicada:** Migrar a `let` y `const`, que introducen la **Zona Muerta Temporal (TDZ)**, bloqueando el acceso hasta que la variable esté realmente definida.

## 2. Coerción de Tipos: El caso `[] == ![]`
Este fenómeno ocurre por la **coerción implícita** (conversión automática de tipos):
1.  `![]` convierte un objeto (array) a booleano y lo niega, dando `false`.
2.  `[]` se convierte a un primitivo cadena vacía `""`.
3.  Finalmente, ambos se convierten al número `0`. Como `0 == 0` es verdadero, la expresión retorna `true`.

* **Estrategia de mitigación:** Se establece como estándar el uso del operador de **igualdad estricta (`===`)**, que compara tanto el valor como el tipo de dato, eliminando conversiones inesperadas.

## 3. Gestión de Estados Nulos y Undefined
Para el modelado de datos de libros, se han definido los siguientes criterios técnicos:
* **`null`:** Representa una **ausencia intencional** de valor. Ejemplo: Un libro que confirmamos que no tiene un subtítulo.
* **`undefined`:** Representa que el valor **no ha sido asignado** todavía o la propiedad no existe en el objeto.
