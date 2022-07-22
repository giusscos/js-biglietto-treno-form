const ticketTax = 0.21;
const ticketDiscountYounger = 0.2;
const ticketDiscountOlder = 0.4;
let fullName = '', distance = 0, ageSelect = 0, submit, restore, ticketCost = 0,
discount = 0, ticketType, ticketPriceOutPut, outPutElement;

// Acquisizione elementi DOM
outPutElement = document.querySelector('.list_group');
ticketType = 'Biglietto Standard';
fullName = document.querySelector('input[name="full_name"]');
distance = document.querySelector('input[name="km"]');
ageSelect = document.querySelector('select[name="age_select"]');
submit = document.querySelector('input[name="submit"]');
undo = document.querySelector('input[name="undo"]');

// Al click lavorazione dei dati acquisiti e stampa
submit.addEventListener('click', function() {

    // Costo del biglietto senza sconto e Senza Numeri Negativi 
    ticketCost = Math.abs(distance.value) * ticketTax;    

    // Verifica se la distanza e' un numero
    if(isNaN(distance.value)){
        alert('Prezzo non inserito correttamente! Riprovare');
        outPutElement.innerHTML = ' ';
    } else{
         // Costo del biglietto con sconto in base all'eta
        if (parseFloat(ageSelect.value) === 1){
            discount = parsFloat(ticketCost) * ticketDiscountYounger;
            ticketType = 'Biglietto Ridotto';
        } else if (parseFloat(ageSelect.value) === 3){
            discount = ticketCost * ticketDiscountOlder;
            ticketType = 'Biglietto Ridotto';
        }
        
        // Applicazione sconto al biglietto e taglio a due posizioni dopo la virgola
        ticketCost -= discount;
        ticketPriceOutPut = ticketCost.toFixed(2) + ' &euro;';
        
        // OutPut
        outPutElement.innerHTML = 
        `<li class="list_item">
            <div class="row ticket">
                <div class="col">
                    <span class="info_ticket name_owner text_capitalize">
                        Nome passeggero
                    </span>
                    <span class="ticket_owner ticket_item">${fullName.value}</span><!-- Name Owner Ticket -->
                </div>
                <div class="col">
                    <span class="info_ticket">
                        Offerta
                    </span>
                    <span class="ticket_type ticket_item">
                        ${ticketType}
                    </span>
                </div>
                <div class="col">
                    <span class="info_ticket">
                        Carrozza
                    </span>
                    <span class="ticket_item">
                        5
                    </span>
                </div>
                <div class="col">
                    <span class="info_ticket">
                        Codice CP
                    </span>
                    <span class="ticket_item">
                        92911
                    </span>
                </div>
                <div class="col">
                    <span class="info_ticket">
                        Costo Biglietto
                    </span>
                    <span class="ticket_price ticket_item">${ticketPriceOutPut}</span><!-- Ticket Price-->
                </div>
            </div>
        </li>`;
    }
});

undo.addEventListener('click', function() {
    fullName.value = ' ';
    ageSelect.value = 2;
    distance.value = ' ';
    discount.value = 0;
    outPutElement.innerHTML = ' ';
});