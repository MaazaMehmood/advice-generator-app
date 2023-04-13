let id = document.getElementById('no');
let para = document.getElementById('txt');


//data fetching
function myFunction() {
async function adviceJSON() {
    const response = await fetch('https://api.adviceslip.com/advice');
    if (!response.ok) { 
      const message = `AN error has occurred: ${response.status}`;
      throw new Error(message);
    }
    const txt = await response.json();
    return txt;
}
  
adviceJSON().then(
resp => {
    console.log(resp);
    id.innerHTML = resp.slip.id;
    para.innerHTML = resp.slip.advice;
}, 
error => {
    console.log(error.message);
});

}

myFunction();