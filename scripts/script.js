'user strict';

// per ogni oggetto, voglio creare la mia card 

// identifico le variabili che mi servono nel dom

const mainContainer = document.querySelector('.cards-container');
const btnAdd = document.querySelector('.btn-add');
const modalForm = document.querySelector('.modal-dialog');
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

mainContainer.innerHTML = tempContentContainer;

addEventListener('click', btnClickHandler); */



// creo una funzione per creare una nuova member card
function createMemberCard(utente) {
    return `<div class="custom-card">
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

function btnClickHandler(event) {
    modalForm.classList.remove('d-none');
    console.log('form in arrivo!');
}