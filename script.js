import ajax from "./ajax.js";
import { createCard } from "./cardFunction.js";

//let main = document.querySelector("main");
//let mainDiv = document.createElement("div")
//main.append(mainDiv);

let body = document.querySelector("body");

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
const getCocktails = () => {
  ajax("https://www.thecocktaildb.com/api/json/v1/1/random.php", (res) => {
    let resArr2 = JSON.parse(res).drinks;
    resArr2.forEach((drink) => {
      // Cocktail API DOM elements
      let drinkTitle = drink.strDrink;
      let drinkCategory = drink.strCategory;
      let drinkGlass = drink.strGlass;
      let drinkInstruct = drink.strInstructions;

      // create image element + url
      let drinkImage = document.createElement("img");
      drinkImage.setAttribute("id", "drink-image");
      drinkImage.src = drink.strDrinkThumb;

      // add button to generate cocktails
      const buttonDrink = document.createElement("button");
      buttonDrink.setAttribute("id", "drink-button");
      buttonDrink.addEventListener("click", (evt) => {
        getCocktails();
      });

      // generate cocktail info
      let drinkInfoList = document.createElement("li");
      drinkInfoList.setAttribute("id", "drink-info");
      drinkInfoList.innerHTML = `
		<b>Cocktail:</b> ${drinkTitle}
		<li><b>Category:</b> ${drinkCategory}</li>
		<li><b>Glass:</b> ${drinkGlass}</li>
		<li><b>Ingredients:</b></li>
		<li>${drink.strIngredient1}, ${drink.strMeasure1}</li>
		<li>${drink.strIngredient2}, ${drink.strMeasure2}</li>
		<li>${drink.strIngredient3}, ${drink.strMeasure3}</li>
		<li>${drink.strIngredient4}, ${drink.strMeasure4}</li>
		<li>${drink.strIngredient5}, ${drink.strMeasure5}</li>
		<li>${drink.strIngredient6}, ${drink.strMeasure6}</li>
		<li><b>Make it:</b></li>
		<li>${drinkInstruct}</li>
		`;
      let filteredList = function (obj) {
        for (var empty in drinkInfoList) {
          if (drink.strMeasure6 === null) {
            delete drink.strMeasure6;
            return filteredList;
          }
        }
      };
      // append button to drink list
      buttonDrink.innerHTML = "New Cocktail Recipe";
      drinkInfoList.append(buttonDrink);

      // create cocktail card + append to page
      let drinkCard = document.createElement("div");
      drinkCard.setAttribute("class", "drink-card");
      drinkCard.append(drinkInfoList, drinkImage);

      let divTwo = document.getElementById("gridItem2");
      divTwo.innerHTML = "";
      divTwo.append(drinkCard);

      console.log(filteredList);
    });
  });
};
getCocktails();


const getArticles =()=>{
  ajax(
    "https://api.nytimes.com/svc/topstories/v2/food.json?api-key=Uou4anPgDJHztfUSXGm7Ru1SiHzqpcv5",
    (res) => {
      let resArr = JSON.parse(res).results;
      resArr
        .filter((event) => {
          //console.log(event)
          return event.section == "dining"; //&& event.subsection == "food";
        })
        .forEach((event, idx) => {
          if (idx >= 8) return;
          createCard(event);

        });
    },
  );
}

getArticles();

