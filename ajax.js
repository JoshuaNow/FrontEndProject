// JavaScript Document
// <!-- We got this guys! We are team -->
// JavaScript Document

//main.append(divElement);
//Uou4anPgDJHztfUSXGm7Ru1SiHzqpcv5
const ajax = (url, callback, method = "GET") => {
  if (!url) return console.error("Request Required");
  if (!callback) return console.error("Callback Required");
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", (evt) => {
    let req = evt.target;
    if (req.readyState !== 4) return;
    if (req.status === 200) return callback(req.response);
    callback("");
  });
  request.open(method, url);
  request.send();
};


ajax("https://api.nytimes.com/svc/topstories/v2/food.json?api-key=Uou4anPgDJHztfUSXGm7Ru1SiHzqpcv5"
, res => {
    let resArr = JSON.parse(res).results
    resArr.filter((event)=>{
        //console.log(event)
        return event.section == "dining" //&& event.subsection == "drinks";
    }).forEach((event)=>{
        
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