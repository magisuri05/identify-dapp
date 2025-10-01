// Objeto local para simular blockchain
const identities = {};

// Write
window.registerIdentity = function () {
  const name = document.getElementById("name").value.trim();
  const country = document.getElementById("country").value.trim();

  if (!name || !country) {
    alert("Por favor completá todos los campos");
    return;
  }

  // Dirección simulada (fija)
  const fakeAddress = "5GrwvaEF5zXb26Fz9rcQpDWS3g1nrC1qT7Sp6kVd5B7XQGvU";
  identities[fakeAddress] = { display: name, legal: country };

  alert("Identidad registrada! (simulado)");
};

// Read con animación fade-in progresiva
window.readIdentity = function () {
  const address = document.getElementById("address").value.trim();
  const identity = identities[address];

  const output = document.getElementById("output");
  output.innerHTML = ""; // limpiar contenido previo

  if (identity) {
    const displayEl = document.createElement("div");
    displayEl.className = "identity-field";
    displayEl.innerHTML = `<strong>Display:</strong> ${identity.display}`;

    const legalEl = document.createElement("div");
    legalEl.className = "identity-field";
    legalEl.innerHTML = `<strong>Legal:</strong> ${identity.legal}`;

    output.appendChild(displayEl);
    output.appendChild(legalEl);

    // Animación progresiva
    setTimeout(() => displayEl.classList.add("show"), 50);
    setTimeout(() => legalEl.classList.add("show"), 250);
  } else {
    output.innerText = "No se encontró identidad";
  }
};
