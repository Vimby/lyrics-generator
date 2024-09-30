function generateResponse(response){
  
    let lyricsElement = document.querySelector(".search-result");
    lyricsElement.innerHTML = response.data.answer;
   
}


function generateLyrics(event) {
event.preventDefault();
let keyword = document.querySelector("#search-input");
let apiKey = "0427ta248d3357oc689fb60cb0b7d838";
let prompt = `Generate song  lyrics  titled  ${keyword.value}. `;
let context =
  "Assume you are a song writer that follows given instructions. The composed song lyrics must have 2 verses and a chorus.  The verses and chorus must be wrapped  in a <p></p> and the paragraphs must be separated by a <br/>. Remove astericks from the song lyrics results";
 let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

 axios.get(url).then(generateResponse);
let lyricsElement = document.querySelector(".search-result");
lyricsElement.classList.remove("hidden");
lyricsElement.innerHTML= `<span> Generating lyrics to your song titled ${keyword.value}</span>`

}



let form =document.querySelector(".formElement");

form.addEventListener("submit", generateLyrics);