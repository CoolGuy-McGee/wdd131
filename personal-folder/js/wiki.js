const games = [  
    {
        code: 'battletoads',
        image: 'images/covers/battletoads.png',
        alt: "Battletoads Cover Art",
        title: "Battletoads",
        description: "An action/platform beat-em-up known for its challenging difficulty and varied level design.",
        releaseDate: '1991 (NES)',
        entry: "Battletoads combines fast-paced platforming with beat-em-up combat and vehicle sections. The game is famous for its difficulty spikes and creative level mechanics, offering cooperative play for two players.",
        review: "I gave this game a 2 out of 5 because while it has some fun and creative levels, the overall difficulty can be frustrating and unfair at times. The controls can feel a bit clunky, making precise platforming sections more challenging than they need to be. However, the cooperative mode does add some enjoyment when playing with a friend, though it makes the game far more difficult.",
        developer: 'Rare',
        publisher: 'Tradewest',
        genres: ['Action', 'Platformer'],
        playerModes: ['Single-player', 'Multiplayer'],
        rating: 2
    },
    {
        code: 'castlevania',
        image: 'images/covers/castlevania.png',
        alt: "Castlevania Cover Art",
        title: "Castlevania",
        description: "A gothic action-platformer where players battle Dracula and his minions using classic weapons like the whip.",
        releaseDate: '1986 (JP), 1987 (NA)',
        entry: "Castlevania established a dark, atmospheric tone for the genre with tight platforming and action-oriented combat. Players traverse Dracula's castle, facing monsters and bosses while collecting sub-weapons and power-ups.",
        review: "",
        developer: 'Konami',
        publisher: 'Konami',
        genres: ['Action', 'Platformer'],
        playerModes: ['Single-player'],
        rating: 4
    },
    {
        code: 'contra',
        image: 'images/covers/contra.png',
        alt: "Contra Cover Art",
        title: "Contra",
        description: "A run-and-gun shooter known for cooperative play, fast action, and iconic level design.",
        releaseDate: '1987 (JP), 1988 (NA)',
        entry: "Contra is a high-energy shooter that challenges players with enemy waves, platforming segments, and memorable boss encounters. The game popularized cooperative gameplay and is remembered for its difficulty and the famous Konami Code.",
        review: "",
        developer: 'Konami',
        publisher: 'Konami',
        genres: ['Shooter', 'Action'],
        playerModes: ['Single-player', 'Multiplayer'],
        rating: 3
    },
    {
        code: 'kirby',
        image: 'images/covers/kirby.png',
        alt: "Kirby's Adventure Cover Art",
        title: "Kirby's Adventure",
        description: "A colorful platformer introducing Kirby's copy ability and a more detailed graphical style.",
        releaseDate: '1993 (NES)',
        entry: "Kirby's Adventure expanded on Kirby's toolkit by adding copy abilities that let Kirby absorb enemies' powers. The game features charming visuals, inventive level mechanics, and a gentle difficulty curve with secrets to discover.",
        review: "",
        developer: 'HAL Laboratory',
        publisher: 'Nintendo',
        genres: ['Platformer', 'Adventure'],
        playerModes: ['Single-player'],
        rating: 5
    },
    {
        code: 'solomonskey',
        image: 'images/covers/solomonskey.png',
        alt: "Solomon's Key Cover Art",
        title: "Solomon's Key",
        description: "A puzzle-action game where players manipulate blocks to reach keys and exit each room.",
        releaseDate: '1986 (Arcade/NES)',
        entry: "Solomon's Key challenges players with room-based puzzles that require planning and timing. The gameplay revolves around creating and destroying blocks to navigate hazards, collect items, and reach the exit.",
        review: "",
        developer: 'Tecmo',
        publisher: 'Tecmo',
        genres: ['Puzzle', 'Action'],
        playerModes: ['Single-player'],
        rating: 3
    },
    {
        code: 'smb',
        image: 'images/covers/smb.png',
        alt: "Super Mario Bros. Cover Art",
        title: "Super Mario Bros.",
        description: "The original side-scrolling platformer that popularized the genre and introduced Mario to a global audience.",
        releaseDate: '1985 (JP/NA)',
        entry: "Super Mario Bros. set the standard for platformers with precise controls, memorable level design, and a clear goal structure. Players run and jump through the Mushroom Kingdom to rescue the princess, discovering warp zones, secrets, and a variety of power-ups.",
        review: "",
        developer: 'Nintendo',
        publisher: 'Nintendo',
        genres: ['Platformer'],
        playerModes: ['Single-player', 'Multiplayer'],
        rating: 3
    },
    {
        code: 'smb3',
        image: 'images/covers/smb3.png',
        alt: "Super Mario Bros. 3 Cover Art",
        title: "Super Mario Bros. 3",
        description: "This platformer features Mario and Luigi as they embark on a quest to save Princess Toadstool and the Mushroom World from Bowser and his Koopalings.",
        releaseDate: '1988 (JP), 1990 (NA)',
        entry: "Super Mario Bros. 3 is a classic platformer that introduced many new gameplay mechanics and power-ups to the Mario series. Players can explore various worlds, each with its own unique theme and challenges. The game is known for its tight controls, inventive level design, and memorable music. It remains one of the best-selling video games of all time and is often regarded as one of the greatest video games ever made.",
        review: "",
        developer: 'Nintendo',
        publisher: 'Nintendo',
        genres: ['Platformer', 'Adventure'],
        playerModes: ['Single-player', 'Multiplayer'],
        rating: 5
    },
    {
        code: 'zelda',
        image: 'images/covers/zelda.png',
        alt: "The Legend of Zelda Cover Art",
        title: "The Legend of Zelda",
        description: "An action-adventure game that established exploration, puzzle-solving, and non-linear progression.",
        releaseDate: '1986 (JP), 1987 (NA)',
        entry: "The Legend of Zelda introduced an open world filled with dungeons, items, and secrets. Players control Link as he explores Hyrule, acquires tools and weapons, and solves puzzles to rescue Princess Zelda and defeat Ganon.",
        review: "",
        developer: 'Nintendo',
        publisher: 'Nintendo',
        genres: ['Action-Adventure'],
        playerModes: ['Single-player'],
        rating: 4
    }
]

let dataContainer = document.querySelector('#data');
let entryContainer = document.querySelector('#wiki-entry');
let gameListContainer = document.querySelector('#game-list');

let button = document.querySelector('button');

function updateGameDetail(code) {
    let selectedGame = games.find(game => game.code === code);
    dataContainer.innerHTML = '';
    entryContainer.innerHTML = '';
    gameListContainer.innerHTML = '';
    rendergame(selectedGame);
}

function genreTemplate(genres) {
    return genres.map((genre)=> ' ' + genre);
}

function playerModesTemplate(modes) {
    return modes.map((mode)=> ' ' + mode);
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5">`
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        html += `<span aria-hidden="true" class="icon-star">★</span>`
      } else {
        html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
      }			
    }
    html += `</span>`
    return html
  }

function dataTemplate(game) {
    return `<img src="${game.image}" alt="${game.alt}" class="game-cover">
            <p>Release Date: ${game.releaseDate}</p>
            <p>Developer: ${game.developer}</p>
            <p>Publisher: ${game.publisher}</p>
            <p>Genre: ${genreTemplate(game.genres)}</p>
            <p>Player Modes: ${playerModesTemplate(game.playerModes)}</p>
            <p>My Rating: ${ratingTemplate(game.rating)}</p>`
}

function entryTemplate(game) {
    return `<h1>${game.title}</h1>
            <p>${game.entry}</p>
            <h2>My Thoughts:</h2>
            <p>${game.review}</p>
    `
}

function gameListTemplate(game) {
    return `<button onclick="updateGameDetail('${game.code}')">
                <section class="game-card">
                    <div class="game-card-image">
                        <img src="${game.image}" alt="${game.alt}"> 
                    </div>
                    <div class="game-card-content">
                        <h2>${game.title}</h3>
                        <p>${game.description}</p>
                        <p>My Rating: ${ratingTemplate(game.rating)}</p>
                    </div>
                </section>
            </button>`
}

function rendergame(game) {
    let dataHtml = dataTemplate(game);
    let entryHtml = entryTemplate(game);
    dataContainer.innerHTML += dataHtml;
    entryContainer.innerHTML += entryHtml;
    renderList();
}

function renderList() {
	for (let i = 0; i < games.length; i++) {
        gameListContainer.innerHTML += gameListTemplate(games[i]);
    }
}

// function init() {
// 	for (let i = 0; i < games.length; i++) {
// 		rendergame(games[i]);
//     }
// }

function init() {
    rendergame(games[0]);
}

init();