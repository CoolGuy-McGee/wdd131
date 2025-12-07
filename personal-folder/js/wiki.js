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
        review: "I gave this game a 4 out of 5 because it offers a solid blend of action and platforming with a memorable gothic atmosphere. I still haven't finished it, but it is fun and easy to pick up. The level design is well-crafted, and the variety of enemies keeps the gameplay engaging. However, some sections can be quite challenging, which may deter casual players. Overall, it's a classic that has stood the test of time.",
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
        review: "I gave this game a 3 out of 5 because while it is an enjoyable and iconic run-and-gun shooter, its high difficulty level can be quite punishing. The cooperative mode adds a lot of fun, but the game can feel repetitive after a while. The level design is solid, and the variety of weapons keeps the gameplay interesting. However, the steep challenge may not appeal to all players. Even with using the Konami Code, I still cannot beat this game.",
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
        review: "I gave this game a 5 out of 5 because it is an incredibly charming and well-designed platformer that showcases Kirby's unique abilities. The copy mechanic adds depth to the gameplay, allowing for creative problem-solving and varied playstyles. The levels are colorful and imaginative, making it a joy to explore. Additionally, the game strikes a perfect balance between challenge and accessibility, making it suitable for players of all ages. Overall, Kirby's Adventure is a delightful experience that remains a classic in the platforming genre. This game also pushed the NES to its limits with impressive graphics and sound for the system, and it was one of the few games to use a battery backup to save progress.",
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
        review: "I gave this game a 3 out of 5 because it offers a unique blend of puzzle-solving and action elements that can be quite engaging. The block manipulation mechanic is innovative and requires strategic thinking to navigate through the levels. However, the game's difficulty can be quite steep, which may frustrate some players. The level design is solid, but the repetitive nature of the rooms can make it feel monotonous after a while. Overall, Solomon's Key is an interesting title that stands out for its creativity, but it may not appeal to everyone.",
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
        review: "I gave this game a 3 out of 5 because while it is a groundbreaking and iconic platformer that laid the foundation for the genre, it does feel more frustrating than the third game. The level design is straightforward, and the gameplay mechanics are easy to grasp, making it accessible for players of all ages. However, the lack of variety in enemies and environments can make the experience feel repetitive after a while. Despite its simplicity, Super Mario Bros. remains a classic that is worth playing for its historical significance and nostalgic value.",
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
        review: "I gave this game a 5 out of 5 because it is an exceptional platformer that builds upon the foundation laid by its predecessor. The introduction of new power-ups, such as the Super Leaf and Tanooki Suit, adds depth and variety to the gameplay. The level design is creative and diverse, offering players a wide range of challenges and environments to explore. The addition of an overworld map allows for non-linear progression, giving players the freedom to choose their path. Overall, Super Mario Bros. 3 is a timeless classic that continues to captivate players with its charm and innovation. This game has me coming back to it again and again.",
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
        review: "I gave this game a 4 out of 5 because it is a pioneering action-adventure title that laid the groundwork for many games in the genre. The open-world exploration and non-linear gameplay were revolutionary at the time, allowing players to tackle challenges in various orders. The game's puzzles and dungeons are well-designed, requiring players to think critically and use their acquired items creatively. However, the lack of in-game guidance can make it difficult for new players to navigate the world and find objectives. Despite this, The Legend of Zelda remains a beloved classic that continues to influence game design today. I still have yet to finish this game, but I enjoy exploring its world and discovering its secrets. I also appreciate this game for starting one of my favorite video game franchises. I love most of the games in the series.",
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

function init() {
    rendergame(games[0]);
}

init();