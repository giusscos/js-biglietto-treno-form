const ticketTax = 0.21
let fullName = '', distance = 0, ageSelect = 0, submit, ticketCost = 0, discount = 0;

// Acquisizione elementi DOM
fullName = document.getElementById('full_name');
distance = document.getElementById('km');
ageSelect = document.getElementById('age_select');
submit = document.getElementById('submit');

// Al click lavorazione dei dati acquisiti e stampa
submit.addEventListener('click', function() {
    // Costo del biglietto senza sconto
    ticketCost = Math.abs(distance.value) * ticketTax;
    
    // Costo del biglietto con sconto in base all'eta
    if (parseFloat(ageSelect.value) === 0.2){
        discount = ticketCost * 0.2;
    } else if (parseFloat(ageSelect.value) === 0.4){
        discount = ticketCost * 0.4;
    }
    // Applicazione sconto al biglietto
    ticketCost -= discount;
});

