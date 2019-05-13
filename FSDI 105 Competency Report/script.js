let salon = {
    name: "The Pet Wash",
    phone: "719-123-4567",
    address: {
        street: "Platte Ave",
        number: "0000"
    },
    workingHours: {
        open: "1000",
        closes: "1800"
    },

    pets: []

};

var petCnt = 0; //Because we're starting at 0 pets
function Pet(name, age, serviceType, ownerName, contactPhone) {
    this.id = "Pet" + petCnt;
    petCnt += 1;
    this.hunger = 20;
    this.happiness = 10;
    this.name = name;
    this.age = age;
    this.serviceType = serviceType;
    this.ownerName = ownerName;
    this.contactPhone = contactPhone;

    this.feed = function () {
        //this.hunger=this.hunger-10;
        this.hunger -= 10;
        this.happiness += 10;
    }
    this.status = function () {
        console.log(this.name, "Hunger Level=" + this.hunger, "Happy Level=" + this.happiness);
    }
}

function registerPet() {

    var txtName = document.getElementById("txtName");
    var txtAge = document.getElementById("txtAge");
    var txtOwner = document.getElementById("txtOwner");
    var txtPhone = document.getElementById("txtPhone");
    var selServices = document.getElementById("selServices");

    var thePet = new Pet(txtName.value, txtAge.value, selServices.value, txtOwner.value, txtPhone.value);

    console.log(thePet);

    eraseBtn();

    salon.pets.push(thePet);

    displayPetTable(thePet);

    alert("We have " + salon.pets.length + " pets as a customer.");

}

function eraseBtn() {
    txtName.value="";
    txtAge.value="";
    txtOwner.value="";
    txtPhone.value="";
    selServices="";
}

function displayPet(aPet) {
    var list = document.getElementById('petList');

    var li = document.createElement('li');
    li.innerText = aPet.name + " --- " + aPet.serviceType;
    li.classList.add("bordered");

    list.appendChild(li);
}

function displayPetTable(aPet) {

    var tBody = document.getElementById("listBody");

    var row = `<tr id='${aPet.id}'> <td>${aPet.name}</td> <td>${aPet.age}</td> <td>${aPet.ownerName}</td> <td>${aPet.contactPhone}</td> <td>${aPet.serviceType}</td> <td><button class='btn-remove' onclick='removePet("${aPet.id}");'> Remove </button></td></tr>`;
    tBody.innerHTML += row;
}

function removePet(petId) {
    console.log('Wants to remove a pet', petId);
    var indexDelete=0;

    for (var i=0;i<salon.pets.length;i++) 
    {
        var indexPet=salon.pets[i];
        if (indexPet.id==petId)
        {
            indexDelete=i;
        }
    }
    salon.pets.splice(indexDelete,1);
    var tr=document.getElementById(petId);
    tr.remove();
}

function petSearch() {

    var searchInput = document.getElementById("n");
    searchName=searchInput.value;
    var indexofFoundedPet=0;
    for (var i=0;i<salon.pets.length;i++) {

        var indexSearch=salon.pets[i];

        if (indexSearch.name==searchName) 
        {
            indexofFoundedPet=i;
        }
    }

    var theFoundedPet=salon.pets[indexofFoundedPet];
    console.log(theFoundedPet);
}