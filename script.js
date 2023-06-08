const btn=document.getElementById("btn")
const quoteE1=document.getElementById("quote")
 const auth=document.getElementById("author")


const url=`https://api.quotable.io/random`;
async function getQuote()
{
    try {
        btn.innerText="loading...";
        btn.disabled=true;
        quoteE1.innerHTML="Updating..."
        auth.innerText="Updating.."
        
        const res=await fetch(url);
        const data=await res.json();
        const content=data.content;
        const author=data.author;
        quoteE1.innerText=content;
        auth.innerText=author; 
        btn.innerText="Get a quote";
        btn.disabled=false;
        console.log(data)
    } catch (error) {
        console.log(error);
        quoteE1.innerText="an error occurred.."
        btn.disabled=true;
    }
}
btn.addEventListener("click",getQuote);