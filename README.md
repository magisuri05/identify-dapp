# Identity DApp - Prototipo de Registro de Identidad en Polkadot

## Descripción del proyecto
Este proyecto es un **prototipo funcional de una DApp de identidad** inspirado en la tecnología blockchain de Polkadot.
Permite registrar un nombre y un país (o cualquier valor) asociado a una “dirección” y luego leer esa información desde la misma interfaz.
Está diseñado para **mostrar la experiencia de usuario, la interacción con un smart contract y la lógica de Write/Read**, sin depender de una red real de blockchain.

El objetivo es demostrar cómo se podría implementar un sistema de identidad seguro, transparente y descentralizado en Polkadot, con un diseño moderno, minimalista y fácil de usar.

---

## Cómo usar el prototipo

1. Abrí `index.html` en tu navegador (Chrome, Edge o Firefox).
2. **Registrar identidad (Write)**:
   - En el campo **Nombre**, escribí tu nombre (por ejemplo: `Uriel`).
   - En el campo **País**, escribí tu país o cualquier texto (por ejemplo: `Argentina`).
   - Presioná **Write**. Esto simula guardar la identidad “on-chain”.
3. **Leer identidad (Read)**:
   - En el campo **Address**, pegá la dirección de ejemplo:
     ```
     5GrwvaEF5zXb26Fz9rcQpDWS3g1nrC1qT7Sp6kVd5B7XQGvU
     ```  
   - Presioná **Read**.
   - Verás la información mostrada con estilo:
     ```
     Display: Uriel
     Legal: Argentina
     ```
4. ¡Listo! Ahora probaste el flujo completo de registrar y leer identidad.

---

## Demo en vivo

Pueden probar la DApp directamente en:  
https://magisuri05.github.io/identify-dapp/

(Copiar y Pegar enlace directamente en tu navegador)

---

## Características del prototipo

- **Diseño moderno y minimalista:** fondo degradado, tipografía elegante, botones animados.
- **Experiencia de usuario amigable:** animaciones suaves y feedback inmediato al interactuar.
- **Simulación de blockchain:** el prototipo simula el registro on-chain usando un objeto JavaScript, ideal para demostraciones y video pitch.
- **Display y Legal separados con estilo:** la información se muestra claramente con bloques visuales llamativos.

---

## Qué encontrar en este repositorio

- `index.html` → Interfaz de usuario con inputs y botones.
- `app.js` → Lógica principal de Write/Read.
- `contract.js` → Configuración del contrato (simulado).
- `style.css` → Estilos modernos y animaciones.
- `deploy.js` → Script de prueba de conexión (opcional para Polkadot).
- `README.md` → Explicación completa y guía de uso.

---

## Contacto

Si querés hacer consultas sobre este prototipo o sobre el proyecto:

- **Nombre:** Uriel Magisrali
- **Correo / contacto:** magisuri3@gmail.com
- **GitHub Personal:** https://github.com/magisuri05

---

## Nota final

Este prototipo fue diseñado para **demostraciones y concursos**, mostrando la experiencia de usuario y la lógica de un sistema de identidad descentralizado.
La implementación en blockchain real sería el siguiente paso, utilizando cuentas y transacciones reales en Polkadot.



