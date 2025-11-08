
const character = {
    name: 'Kaelen',
    image: 'images/character.jpg',
    class: 'Ranger',
    level: 1,
    health: 100,
    attacked: function () {
        if ((this.health - 20) == 0)
        {
            this.health = 0;
            setTimeout(function() {alert("Your character has fought his last battle. His adventure is over.");}, 1);
        }
        else if (this.health > 0)
        {
            this.health = this.health - 20;
        }
        else {
            alert("Your character is already dead.");
        }
    },
    levelUp: function () {
        this.level = this.level + 1;
        }
  };
    
document.querySelector("#attacked").addEventListener("click", function() {
    character.attacked();
    document.querySelector('#health').textContent = character.health;
});

document.querySelector("#levelup").addEventListener("click", function() {
    character.levelUp();
    document.querySelector('#level').textContent = character.level;
});

document.querySelector('#name').textContent = character.name;
document.querySelector('#class').textContent = character.class;
document.querySelector('#level').textContent = character.level;
document.querySelector('#health').textContent = character.health;


document.querySelector('img').setAttribute('src', character.image);
document.querySelector('img').setAttribute('alt', 'Kaelen, the Shadow Warden');

