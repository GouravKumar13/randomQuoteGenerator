const generateQuote = () => {
    let url = "https://type.fit/api/quotes";
    fetch(url).then( (response) => {
    
       let json_out = response.json()
       return json_out
        
        
    }).then( (data) => {

        //this is producing random number b/w 0-1500
        let randNum = Math.floor((Math.random() * 1643) + 1);
        let randomQuote = data[randNum];
    
        
        document.getElementById("quote").innerHTML = `"${randomQuote.text}`;
        document.getElementById("author").innerHTML = `- ${randomQuote.author ? randomQuote.author : ""}`;
    });
}

