/* script.js - LOGICA DE AFIȘARE GRID */
// Notă: Variabila 'fleetData' vine din fișierul data.js

const grid = document.getElementById('fleet-grid');
const filterOrigin = document.getElementById('origin-filter');
const filterProp = document.getElementById('prop-filter');
const filterRole = document.getElementById('role-filter');

function render() {
    grid.innerHTML = '';

    const selOrigin = filterOrigin.value;
    const selProp = filterProp.value;
    const selRole = filterRole.value;

    const filtered = fleetData.filter(plane => {
        const matchOrigin = selOrigin === 'all' || plane.origin === selOrigin;
        const matchProp = selProp === 'all' || plane.propulsion === selProp;
        const matchRole = selRole === 'all' || plane.role === selRole;
        return matchOrigin && matchProp && matchRole;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '<h3 style="color:#ffcc00; grid-column:1/-1; text-align:center;">NO AIRCRAFT MATCH CRITERIA</h3>';
        return;
    }

    filtered.forEach(plane => {
        const placeholder = `https://placehold.co/600x400/1e1e1e/ffcc00?text=${encodeURIComponent(plane.name)}`;
        
        // CÂMPUL CRITIC: Link-ul trimite ID-ul corect la details.html
        const html = `
            <a href="details.html?id=${plane.id}" class="cargo-card" style="text-decoration:none;">
                <div class="card-img-box">
                    <img src="${plane.image}" alt="${plane.name}" onerror="this.src='${placeholder}'">
                </div>
                <div class="card-details">
                    <h2>${plane.name}</h2>
                    <div class="spec-row">
                        <span class="spec-label">ORIGIN:</span>
                        <span class="spec-val">${plane.origin.toUpperCase()}</span>
                    </div>
                    <div class="spec-row">
                        <span class="spec-label">SYSTEM:</span>
                        <span class="spec-val">${plane.propulsion.toUpperCase()}</span>
                    </div>
                    <div class="spec-row">
                        <span class="spec-label">MISSION:</span>
                        <span class="spec-val">${plane.role.toUpperCase()}</span>
                    </div>
                </div>
            </a>
        `;
        grid.innerHTML += html;
    });
}

// Event Listeners
if(filterOrigin) { 
    filterOrigin.addEventListener('change', render);
    filterProp.addEventListener('change', render);
    filterRole.addEventListener('change', render);
    
    document.addEventListener('DOMContentLoaded', render);
}