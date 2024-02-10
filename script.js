let eldenDataInput = document.getElementById("eldenQuery");
let cardContainer = document.getElementById("card-container");

async function getQuery() {
    console.log(eldenDataInput.value);
    const eldenData = eldenDataInput.value;
    eldenDataInput.value = '';
    const response = await fetch(`https://eldenring.fanapis.com/api/bosses?name=` + eldenData);
    console.log("A",response);
    let data = await response.json();
    console.log("B",data.data);
    const bossCard = createBossCard(data.data);
    cardContainer.innerHTML += bossCard;
}

function createBossCard(data) {
    const bossCard = `
    <div class="card" style="width: 18rem;" id="balls">
    <img src="${data[0].image}" class="card-img-top" alt="${data[0].name}">
    <div class="card-body">
    <h5 class="card-title">${data[0].name}</h5>
    <p class="card-text"><strong>Description:</strong> ${data[0].description}</p>
    <p class="card-text"><strong>Location:</strong> ${data[0].location}</p>
    <p class="card-text"><strong>HP:</strong> ${data[0].healthPoints}</p>
    <p class="card-text"><strong>Drops:</strong> ${data[0].drops}</p>
    <a href="#" class="btn btn-danger">DELETE</a>
    </div>
    </div>`;
    return bossCard;
}