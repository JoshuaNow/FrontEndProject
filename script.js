import ajax from "./ajax.js";
import { createCard } from "./cardFunction.js";
import { cocktailapi, timesapi } from "./config.js";

let body = document.querySelector("body");

// randomize cocktain api
const getCocktails = () => {
  ajax(cocktailapi, (res) => {
    let resArr2 = JSON.parse(res).drinks;
    resArr2.forEach((drink) => {
      console.log(drink);
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

      // create DOM elements
      let drinkInfoList = document.createElement("li");
      drinkInfoList.setAttribute("id", "drink-info");

      let name = document.createElement("div");
      let category = document.createElement("div");
      let glass = document.createElement("div");
      let inst = document.createElement("div");

      // drink attributes on HTML
      name.innerText = `Name: ${drinkTitle}`;
      category.innerText = `Category: ${drinkCategory}`;
      glass.innerText = `Glass: ${drinkGlass}`;
      inst.innerText = `How to make: ${drinkInstruct}`;

      drinkInfoList.append(name, category, glass);
      let ingList = document.createElement("ul");

      // remove null values from JSON api
      for (let i = 1; i <= 15; i++) {
        if (!drink["strIngredient" + i]) continue;
        let li = document.createElement("li");
        li.innerText = `${drink["strIngredient" + i]} - ${
          drink["strMeasure" + i] ? drink["strMeasure" + i] : ""
        }`;
        ingList.append(li);
      }
      drinkInfoList.append(ingList);

      // create cocktail card + append to page
      let drinkCard = document.createElement("div");
      drinkCard.setAttribute("class", "drink-card");
      drinkCard.append(drinkInfoList, drinkImage);
      drinkCard.append(inst);
      buttonDrink.innerHTML = "New Cocktail Recipe";
      drinkCard.append(buttonDrink);

      //append drink card to document
      let divTwo = document.getElementById("gridItem2");
      divTwo.innerHTML = "";
      divTwo.append(drinkCard);

      console.log(drinkInfoList);
    });
  });
};
getCocktails();

// NY times api function

const getArticles = () => {
  ajax(timesapi, (res) => {
    let resArr = JSON.parse(res).results;
    resArr
      .filter((event) => {
        //console.log(event)
        return event.section == "dining"; //&& event.subsection == "food";
      })
      .forEach((event, idx) => {
        if (idx >= 4) return;
        createCard(event);
      });
  });
};

getArticles();
