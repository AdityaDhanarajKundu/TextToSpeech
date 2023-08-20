//creating an instance of the SpeechSynthesisUtterance interface
let speech = new SpeechSynthesisUtterance();

const box = document.getElementById("textarea");
const btnEl = document.getElementById("listen");
const selectEl = document.getElementById("voices");

let voices = [];    //all the available voices will be fetched and will be stored in this array

//function to load all the available voices in the select element when the page loads
window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((element)=>{
        const optionEl = document.createElement("option");
        optionEl.value = element.voiceURI;
        optionEl.textContent = element.name;
        selectEl.appendChild(optionEl);
    })
};

//function to select a particular voice from the list
selectEl.addEventListener("change",()=>{
    const selectedVoiceURI = selectEl.value;
    speech.voice = voices.find(voice => voice.voiceURI === selectedVoiceURI);
});

btnEl.addEventListener("click",()=>{
    speech.text = box.value;
    window.speechSynthesis.speak(speech);
});