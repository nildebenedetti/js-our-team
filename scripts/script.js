'user strict';

// per ogni oggetto, voglio creare la mia card 

// identifico le variabili che mi servono nel dom

const mainContainer = document.querySelector('.cards-container');
let tempContentContainer = '';


for (const teamMember of teamMembers) {

   tempContentContainer += `<div class="card row bg-light m-3">
                    <div class="image-container">
                        <img src="${teamMember.img}" alt="${teamMember.name}" class="portrait">
                    </div>
                    <div class="member-info px-2 py-3">
                        <h3 class="name-surname py-2 fw-bold">${teamMember.name}</h3>
                        <h5 class="role py-1">${teamMember.role}</h4>
                        <a href="mailto:${teamMember.email}" class="email pt-2 text-info">${teamMember.email}</a>
                    </div>
            </div>`;

}
mainContainer.innerHTML = tempContentContainer; 
