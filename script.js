let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector('select');
const desiredVoices = [
    "Microsoft Ravi - English (India)",
    "Microsoft Heera - English (India)",
    "Microsoft David - English (United States)",
    "Microsoft Mark - English (United States)",
    "Microsoft Zira - English (United States)"
];
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices().filter(voice => 
        desiredVoices.includes(voice.name)
    );
    if (voices.length > 0) {
        speech.voice = voices[0];
    }
    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});
document.querySelector("#speakButton").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
document.querySelector("#stopButton").addEventListener("click", () => {
    window.speechSynthesis.cancel();
});