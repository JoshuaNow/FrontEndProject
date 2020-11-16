import ajax from './ajax.js';

let body = document.querySelector("body");


ajax("https://api.nytimes.com/svc/topstories/v2/food.json?api-key=Uou4anPgDJHztfUSXGm7Ru1SiHzqpcv5"
, res => {
    let resArr = JSON.parse(res).results
    resArr.filter((event)=>{
        //console.log(event)
        return event.section == "dining" //&& event.subsection == "drinks";
    }).forEach((event)=>{
        let articleTitle = event.title;
        //document.write(articleTitle);
        
        
//        let images = event.multimedia;
//        images.forEach((img) =>{
//            let imgElement = document.createElement("img")
//            imgElement.src = img.url;   
//            body.append(imgElement);
//        })
        //body.append(imgElement)
        
        
        console.log(event);
        
      
     })
    //as much JS code to do what I want
     //document.body.append(resArr)
    //console.log(resArr)
     
});

ajax("https://www.thecocktaildb.com/api/json/v1/1/random.php"
, res => {
    let resArr2 = JSON.parse(res).drinks
    resArr2.forEach((drink)=>{
        
    })
    
    console.log(resArr2)
    
});



