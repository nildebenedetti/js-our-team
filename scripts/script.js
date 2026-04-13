'user strict';

// per ogni oggetto, voglio creare la mia card 

// identifico le variabili che mi servono nel dom

const mainContainer = document.querySelector('.cards-container');
const btnAdd = document.querySelector('.btn-add');
const modalForm = document.querySelector('.modal-dialog');
let tempContentContainer = '';


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
mainContainer.innerHTML = tempContentContainer; 

addEventListener('click', btnClickHandler);

function btnClickHandler(event) {
    
    
}