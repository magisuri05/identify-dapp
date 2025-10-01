// Objeto local para simular la blockchain
const identities = {};

// Write
window.registerIdentity = function () {
  const name = document.getElementById("name").value;
  const country = document.getElementById("country").value;

  // Simula almacenar on-chain
  const fakeAddress = "5GrwvaEF5zXb26Fz9rcQpDWS3g1nrC1qT7Sp6kVd5B7XQGvU";
  identities[fakeAddress] = { display: name, legal: country };

  alert("Identidad registrada! (simulado)");
};

// Read
window.readIdentity = function () {
  const address = document.getElementById("address").value;
  const identity = identities[address];

  const output = document.getElementById("output");
  output.innerHTML = ""; // Limpiar contenido previo

  if (identity) {
    // Creamos elementos separados con estilo
    const displayEl = document.createElement("div");
    displayEl.className = "identity-field";
    displayEl.innerHTML = `<strong>Display:</strong> ${identity.display}`;

    const legalEl = document.createElement("div");
    legalEl.className = "identity-field";
    legalEl.innerHTML = `<strong>Legal:</strong> ${identity.legal}`;

    output.appendChild(displayEl);
    output.appendChild(legalEl);
  } else {
    output.innerText = "No se encontró identidad";
  }
};


