/*fetch("https://api.kanye.rest/")
.then(function(res){
    return res.json();
    
})
.then(function(data){
    console.log(data)
})
*/

async function get(){
const res = await fetch("https://api.kanye.rest/quote")
const data = await res.json()
console.log(data.quote)
document.getElementById("text-quote").innerHTML = data.quote
}

get()

document.getElementById('button').addEventListener('click' , function(){
    location.reload();
    return false;
})