/* details.js - POPULEAZĂ PAGINA DE DETALII */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Luăm ID-ul din URL (ex: details.html?id=c130)
    const urlParams = new URLSearchParams(window.location.search);
    const planeId = urlParams.get('id');

    // 2. Găsim avionul în fleetData (care a fost încărcat din data.js)
    const plane = fleetData.find(p => p.id === planeId);

    const container = document.querySelector('.details-container');

    // 3. Dacă avionul există, completăm HTML-ul
    if (plane) {
        document.getElementById('page-title').innerText = plane.name + " | Technical Data";
        
        // Elemente text
        document.getElementById('detail-name').innerText = plane.name;
        document.getElementById('detail-origin').innerText = plane.origin.toUpperCase() + " // " + plane.propulsion.toUpperCase();
        document.getElementById('detail-desc').innerText = plane.description;
        document.getElementById('detail-role').innerText = plane.role;

        // Imagine
        const imgElement = document.getElementById('detail-img');
        imgElement.src = plane.image;
        imgElement.onerror = function() {
            this.src = `https://placehold.co/800x600/1e1e1e/ffcc00?text=${encodeURIComponent(plane.name)}`;
        };

        // Specificații
        document.getElementById('spec-speed').innerText = plane.specs.speed;
        document.getElementById('spec-range').innerText = plane.specs.range;
        document.getElementById('spec-payload').innerText = plane.specs.payload;
        document.getElementById('spec-wingspan').innerText = plane.specs.wingspan;

    } else {
        // Dacă nu găsim avionul
        if (container) {
             container.innerHTML = "<h1 style='color:red; text-align:center;'>ERROR: AIRCRAFT NOT FOUND IN DATABASE. CHECK ID.</h1>";
        }
    }
});