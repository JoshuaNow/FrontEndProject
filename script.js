import ajax from './ajax.js';
import {createCard, cocktailCards} from './cardFunction.js';

//let main = document.querySelector("main");
//let mainDiv = document.createElement("div")
//main.append(mainDiv);



ajax("https://api.nytimes.com/svc/topstories/v2/food.json?api-key=Uou4anPgDJHztfUSXGm7Ru1SiHzqpcv5"
, res => {
    let resArr = JSON.parse(res).results
    resArr.filter((event)=>{
        //console.log(event)
        return event.section == "dining" //&& event.subsection == "drinks";
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

ajax("https://content.guardianapis.com/search?show-elements=image&q=cocktails&api-key=6776e4cc-c284-4535-9eee-8901e1809648"
, res => {
    let resArr2 = JSON.parse(res).response.results
    console.log(resArr2)
    resArr2.forEach((event)=>{
        cocktailCards(event)
        
        
    })
    
    //console.log(resArr2)
    
});
