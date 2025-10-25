const books = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'images/magyk-cover.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'images/magnus-chase1-cover.jpg',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: 'Belgariad Book One: Pawn of Prophecy',
		date: 'Feb 12, 2022',
		description:
			"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
			'images/pawn-of-prophecy-cover.jpg',
		imgAlt: 'Book cover for Pawn of Prophecy',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐⭐'
	}
];

    let bookList = document.querySelector('#book-list');
    books.forEach(book => {

    let html = `<article class="book-entry">
        <div class="info">
        <p class="date">${book.date}</p>
        <p>${book.ages}</p>
        <p>${book.genre}</p>
        <p><span aria-label="${book.stars.length} out of 5 stars" role="img">${book.stars}</span></p>
        </div>
        <div class="book">
        <h2>${book.title}</h2>
        <img src=${book.imgSrc} alt=${book.imgAlt}>
        <p id='desc'>${book.description}</p>
        </div>
		</article>`;

        bookList.innerHTML += html;
    });
          


