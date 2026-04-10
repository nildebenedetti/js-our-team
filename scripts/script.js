'user strict';

// per ogni oggetto, voglio creare la mia card 

// identifico le variabili che mi servono nel dom

const mainContainer = document.querySelector('.cards-container');
let tempContentContainer = '';


for (const teamMember of teamMembers) {

   tempContentContainer += `<div class="card container d-inline-flex flex-row bg-light">
                    <div class="image-container">
                        <img src="${teamMember.img}" alt="${teamMember.name}" class="portrait img-fluid">
                    </div>
                    <div class="member-info p-4 flex-grow-1">
                        <h3 class="name-surname py-2 fw-bold">${teamMember.name}</h3>
                        <h5 class="role py-1">Designer</h4>
                        <a href="mailto:${teamMember.email}" class="email pt-2 text-info">${teamMember.email}</a>
                    </div>
            </div>`;

}
mainContainer.innerHTML = tempContentContainer; 
