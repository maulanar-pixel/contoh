let quote = document.getElementById("quote");
let author = document.getElementById("author");
console.log(quote);
console.log(author);
async function getQuote(){
    try{
        let result=await fetch("https://dummyjson.com/quotes/random");
        let data=await result.json();
        console.log(data);
        quote.innerHTML=data.quote;
        author.innerHTML="Pembuat : " + "<b>" + data.author + "</b>";
    } catch (error){
        console.log("Error nya :"+error)
    }
}
