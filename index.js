
function generateLyrics(event) {
event.preventDefault();
let lyricsElement = document.querySelector(".search-result");

lyricsElement.innerHTML= "Hello World this is my song";

console.log(lyricsElement);

}





let form =document.querySelector(".formElement");

form.addEventListener("submit", generateLyrics);