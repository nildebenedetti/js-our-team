'use strict';

// per ogni oggetto, voglio creare la mia card 

// identifico le variabili che mi servono nel dom

const mainContainer = document.querySelector('.cards-container');
const btnAdd = document.querySelector('.btn-add');
const memberForm = document.querySelector('.new-member');
let tempContentContainer = '';

// per ogni membro del team, creo un card e la aggiungo 
// alla variabile contenuto temporaneo

/*

for (const teamMember of teamMembers) {

    tempContentContainer += `<div class="custom-card">
            <div class="card-image">
                <img src="${teamMember.img}" alt="${teamMember.name}">
            </div>
            <div class="card-content">
                <h3 class="name">${teamMember.name}</h3>
                <p class="role">${teamMember.role}</p>
                <a href="mailto:${teamMember.email}" class="email">${teamMember.email}</a>
            </div>
        </div>`;

}

// iniettiamo il contenuto temporaneo delláccumulatore nell'html

mainContainer.innerHTML = tempContentContainer; */

// creo una funzione per creare una nuova member card
function createMemberCard(utente) {
    return `
    <div class="custom-card">
            <div class="card-image">
                <img src="${utente.img}" alt="${utente.name}">
            </div>
            <div class="card-content">
                <h3 class="name">${utente.name}</h3>
                <p class="role">${utente.role}</p>
                <a href="mailto:${utente.email}" class="email">${utente.email}</a>
            </div>
        </div>`
}

// mi creo variabile stringa di appoggio per contenuto html
let listItemsHtml = '';


// aggiungo unzione per creare le card di tutto il team

function renderTeams() {
    // itero con il ciclo for per array team con funzione creazione 
    // card cosi da creare una card per ogni oggeto 
    // + add in accumulatore

    for (let member of teamMembers) {
        let listItemsHtml = createMemberCard(member) // per ogni persona attiva la funzione
        listItemsHtml += listItemsHtml; // aggiungi anche questa al contenuto temporaneo
    }

    // identifico rife3rimento e inietto html di tutta la stringa del team

    mainContainer.innerHTML = listItemsHtml;
}

// e poi chiamo la funzione

renderTeams();



// sposto btn clickhandler per ordine
addEventListener('click', btnClickHandler);

function btnClickHandler(event) {
    memberForm.classList.remove('d-none');
    console.log('form in arrivo!');
}