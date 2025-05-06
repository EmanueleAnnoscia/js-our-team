const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


// prelevo il contenitore delle card
const teamContainer= document.querySelector("#card-container");
// console.log(teamContainer)

// costruisco le card
const newCard = (member) =>{
  const {name, role, img} = member;

  return  `<div class="col-12 col-md-4 col-lg-4 mb-4 ">
              <img src="${img}" class="card-img" alt="${name}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                    <p class="card-text">${role}</p>
              </div>
            </div>`

}

const renderTeam = (arrayTeam) =>{
  let cards = ``;
  for (let member of arrayTeam){
    // concateneo le singole cards
    cards += newCard(member);
  }

  // stampo le card in pagina
  teamContainer.innerHTML = cards;
  
}

renderTeam(teamMembers);

const formElem = document.querySelector("form")

formElem.addEventListener("submit", (event) =>{
    event.preventDefault(); //interrompo il refresh del form
    const nameVal = document.querySelector("#name").value
    const surnameVal = document.querySelector("#surname").value
    const roleVal = document.querySelector("#role").value

  // da questi valori creo un nuovo oggetto

  const addMember = {
    name:nameVal,
    surname:surnameVal,
    role:roleVal
  }

  teamMembers.push(addMember)

  renderTeam(teamMembers)

})