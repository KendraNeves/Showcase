
$(document).ready(function(){

  //Create new cards
  cardList.forEach( function (card) {
    $(".card-columns").append(
    `
        <div class="card bg-ltblue mb-3 shadow-lg">
          <img class="card-img-top">
          <div class="card-body">
            <h5 class="card-title"><a class="text-brown title" target="_blank">${card.title}</a></h5>
            <p class="card-text text-blue info"></p>
            <a target="_blank"><img src="../assets/GitHub-Mark/PNG/GitHub-Mark-32px.png" width="25"><img src="../assets/GitHub-Logos/GitHub_Logo.png" width="50"></a>
            <p class="card-text datePosted"><small class="text-muted"></small></p>
          </div>
        </div>
    `
    )
  })  

});


let cardList = [
  {
    "title":"Nutmeg Concrete",
    "image": "../assets/nutmeg-concrete.PNG",
    "imageAlt": "nutmeg concrete website",
    "link": "https://nutmegconcrete.com/",
    "info": "This card has supporting text below as a natural lead-in to additional content",
    "gitHubLink": "",
    "datePosted": "Posted December 11, 2019"
  },

  {
  "title":"",
  "image": "",
  "imageAlt": "",
  "link": "",
  "info": "",
  "gitHubLink": "",
  "datePosted": ""
  },

  {
    "title":"",
    "image": "",
    "imageAlt": "",
    "link": "",
    "info": "",
    "gitHubLink": "",
    "datePosted": ""
  }
]


