import ajax from './ajax.js';
import {createCard} from './cardFunction.js';


//let main = document.querySelector("main");
//let mainDiv = document.createElement("div")
//main.append(mainDiv);

let body = document.querySelector('body');

//ajax(
//	'https://api.nytimes.com/svc/topstories/v2/food.json?api-key=Uou4anPgDJHztfUSXGm7Ru1SiHzqpcv5',
//	(res) => {
//		let resArr = JSON.parse(res).results;
//		resArr
//			.filter((event) => {
//				//console.log(event)
//				return event.section == 'dining'; //&& event.subsection == "drinks";
//			})
//			.forEach((event) => {
//				let articleTitle = event.title;
//				//document.write(articleTitle);
//
//				//        let images = event.multimedia;
//				//        images.forEach((img) =>{
//				//            let imgElement = document.createElement("img")
//				//            imgElement.src = img.url;
//				//            body.append(imgElement);
//				//        })
//				//body.append(imgElement)
//
//				// console.log(event);
//			});
//		//as much JS code to do what I want
//		//document.body.append(resArr)
//		//console.log(resArr)
//	}
//);

ajax('https://www.thecocktaildb.com/api/json/v1/1/random.php', (res) => {
	let resArr2 = JSON.parse(res).drinks;
	resArr2.forEach((drink) => {
		// Cocktail API DOM elements
		let drinkTitle = drink.strDrink;
		let drinkCategory = drink.strCategory;
		let drinkGlass = drink.strGlass;
		let drinkInstruct = drink.strInstructions;

		// create image element + url
		let drinkImage = document.createElement('img');
		drinkImage.setAttribute('id', 'drink-image');
		drinkImage.src = drink.strDrinkThumb;

		// add button to generate cocktails
		const buttonDrink = document.createElement('button');
		buttonDrink.setAttribute('id', 'drink-button');
		buttonDrink.addEventListener('click', (evt) => {
			location.reload();
		});

		// generate cocktail info
		let drinkInfoList = document.createElement('li');
		drinkInfoList.setAttribute('id', 'drink-info');
		drinkInfoList.innerHTML = `
		Cocktail: ${drinkTitle}
		<li>Category: ${drinkCategory}</li>
		<li>Glass: ${drinkGlass}</li>
		<li>Ingredients:</li>
		<li>${drink.strIngredient1}, ${drink.strMeasure1}</li>
		<li>${drink.strIngredient2}, ${drink.strMeasure2}</li>
		<li>${drink.strIngredient3}, ${drink.strMeasure3}</li>
		<li>${drink.strIngredient4}, ${drink.strMeasure4}</li>
		<li>${drink.strIngredient5}, ${drink.strMeasure5}</li>
		<li>${drink.strIngredient6}, ${drink.strMeasure6}</li>
		<li>Make it: ${drinkInstruct}</li>
		`;
		// let filteredList = function (obj) {
		// 	for (var empty in drinkInfoList) {
		// 		if (drink.strMeasure6 === null) {
		// 			delete drink.strMeasure6;
		// 			return filteredList;
		// 		}
		// 	}
		// };
		// append button to drink list
		buttonDrink.innerHTML = 'New Cocktail Recipe!';
		drinkInfoList.append(buttonDrink);

		// create cocktail card + append to page
		let drinkCard = document.createElement('div');
		drinkCard.setAttribute('class', 'drink-card');
		drinkCard.append(drinkInfoList, drinkImage);
        
        let divTwo = document.getElementById("gridItem2")
		divTwo.append(drinkCard);

		console.log(filteredList);
	});
});

ajax("https://api.nytimes.com/svc/topstories/v2/food.json?api-key=Uou4anPgDJHztfUSXGm7Ru1SiHzqpcv5"
, res => {
    let resArr = JSON.parse(res).results
    resArr.filter((event)=>{
        //console.log(event)
        return event.section == "dining"//&& event.subsection == "food";
    }).forEach((event)=>{
        createCard(event);
        
        
//        //DOM Elements
//        
//        //Create Article Card
//        let cardDivElement = document.createElement("div");
//        cardDivElement.id = 'cardDiv';
//        
//        //Article Link
//        let a = document.createElement("a");
//        a.href = event.url;
//        
//        //Card Content
//        let sectionElement = document.createElement("section");
//        let sectionTitle = document.createElement("h4")
//        let sectionDescription = document.createElement("p");
//        let pElement = document.createElement("p");
//        let imgElement = document.createElement("img");
//        
//        let images = event.multimedia;
//        images.forEach((img) =>{
//            imgElement.src = img.url;
//            return imgElement;
//        });
//    
//        //Appending Card Elements
//        sectionTitle.innerHTML = event.title;
//        sectionDescription.innerHTML = event.abstract;
//        mainDiv.append(cardDivElement);
//        cardDivElement.append(sectionElement);
//        sectionElement.append(imgElement, sectionTitle, pElement, sectionDescription);
//        
//        
//        console.log(event);
        
      
     })
    //as much JS code to do what I want
     //document.body.append(resArr)
    //console.log(resArr)
     
});

//ajax("https://content.guardianapis.com/search?show-elements=image&q=cocktails&api-key=6776e4cc-c284-4535-9eee-8901e1809648"
//	, res => {
//		let resArr2 = JSON.parse(res).response.results
//		console.log(resArr2)
//		resArr2.forEach((event) => {
//			cocktailCards(event)
//        
//        
//	})
//    
//});
