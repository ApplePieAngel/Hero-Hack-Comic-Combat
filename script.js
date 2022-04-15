const Villains = [
    ['CO2', 'The biggest contributor of Greenhouse gases, the colourless, odourless, CO2 wreaks havoc on the world by preventing heat from escaping the planet. This in turn leads to global warming, which causes draughts, increased temperatures, and melting glaciers amongst other problems'],
    ['Viruses', 'Small, microscopic infectors, Viruses invade living organisms and use the hosts own cells to replicate. This causes a multitude of diseases in Humans and Animals alike.'],
    ['UV Radiation', 'UV Radiation is split into 3 types, UVA, UVB, and UVC. These come from the Sun and can cause skin cancer through destruction of DNA in cells.'],
    ['Poachers', 'People that seek to illegally hunt and farm game, for their own gain, or as part of a larger organization. The animals hunted are generally endangered and will face extinction at the hands of overhunting.'],
    ['Carrion / Disease', 'The body of animals passed is the perfect breeding ground for bacteria and disease. These diseases can then spread elsewhere, poisoning the nearby environment.'],
];

const Heroes = [
    ['Trees', 'Covering about ~30% of the Earth’s land surface, trees filter out the air through the process of photosynthesis. This creates sugars for the plant, as well as gives off oxygen to the environment.'],
    ['Vaccines', 'An invention originating in 1796, vaccines have helped bolster the human immune system against a variety of infections and disease.'],
    ['Ozone Layer', 'Surrounding the Earth is a layer known as the Ozone layer. This layer helps keep certain types of radiation from entering the atmosphere.'],
    ['Wildlife Sanctuaries', 'As certain species face extinction, Sanctuaries are made in order to preserve these animals by giving them a safe, protected environment.'],
    ['Scavengers / Decomposers', 'Sometimes seen as a bad omen, scavengers such as vultures and buzzards are generally not wanted around as they feast on dead animals. They are; however, the cleanup crew of the animal kingdom, keeping the landscape clean of rotting carcasses and other waste material.'],
];
//0 to 5
let currentVillain = Math.floor(Math.random() * 5);

// Function to change the content of t2
function modifyImage() {
    document.getElementById("hero-answer").src =
    "https://www.halifaxpubliclibraries.ca/wp-content/uploads/sites/50/2021/12/iStock-1329359483-scaled-e1643634559500.jpg";
    document.getElementById("hero-drag-description").style.display = "none";
}

function modifyVillainText() {
    document.getElementById("villain-name").innerHTML = Villains[currentVillain][0];
    document.getElementById("villain-description").innerHTML = Villains[currentVillain][1];
}

function modifyHeroText() {

    document.getElementById("hero-name").innerHTML = Heroes[currentVillain][0];
    document.getElementById("hero-description").innerHTML = Heroes[currentVillain][1];
}

function clearHeroTextAndAnswer(){
    document.getElementById("hero-name").innerHTML = "";
    document.getElementById("hero-description").innerHTML = "";
    document.getElementById("hero-answer").src = "";
}

function reroll(){
    let prevVillain = currentVillain;
    while (prevVillain === currentVillain){
        currentVillain = Math.floor(Math.random() * 5);
    }
    modifyVillainText();
}

  
  // Add event listener to table
  const divs = document.querySelectorAll('.hero-img');

  divs.forEach(el => el.addEventListener('click', event => {
    modifyImage();
    modifyHeroText();
  }));

  document.querySelector(".victory-or-defeat-box-right").addEventListener('click', function(){
    clearHeroTextAndAnswer();
    reroll();
  });


function main(){
    modifyVillainText();
}

main();