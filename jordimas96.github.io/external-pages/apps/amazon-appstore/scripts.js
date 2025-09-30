// Evitar canviar url //
history.replaceState = function () { };

function redirigirPcMobil() {
    // Redirigir a la versió PC/mobil //
    const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    let nom = window.location.pathname.split('/').pop().split(".")[0]
    let nomVell = nom;
    if (nom.endsWith("-m")) nom = nom.slice(0, -2); // Treure -m si cal //
    if (isTouchDevice()) nom += "-m"; // Afegir -m si cal //
    if (nomVell != nom) location.href = nom + ".html"; // Redirigir si cal //
}

redirigirPcMobil();
