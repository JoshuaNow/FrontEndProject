// JavaScript Document

export const createCard = (event) => {
	//DOM Elements
	let divThree = document.getElementById('gridItem3');

	//Create Article Card
	let cardDivElement = document.createElement('div');
	cardDivElement.classList.add('newsCard');

	//Article Link
	let a = document.createElement('a');
	a.href = event.url;

	//Card Content
	let sectionElement = document.createElement('section');
	let sectionTitle = document.createElement('h4');
	let sectionDescription = document.createElement('p');
	// let pElement = document.createElement('p');
	let imgElement = document.createElement('img');
	let imgHolder = document.createElement('div');
	imgHolder.classList.add('img-holder');
	console.log(event.multimedia);

	imgElement.src = event.multimedia.find(
		(img) => img.format == 'superJumbo'
	).url;
	imgHolder.append(imgElement);

	//Appending Card Elements
	sectionTitle.innerHTML = event.title;
	sectionDescription.innerHTML = event.abstract;
	cardDivElement.append(imgHolder, sectionTitle, sectionDescription);
	divThree.append(cardDivElement);

	//EventListener

	cardDivElement.addEventListener('click', (event) => {
		event.preventDefault();
		window.open(a.href);
	});

	// testing
	// console.log(cardDivElement);
	// console.log(event);
};
