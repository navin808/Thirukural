import './SpeakButton.css';

function SpeakButton({ kuralLine, lang }) {

  function playKural() {
    window.responsiveVoice.speak(kuralLine, lang, {rate: 0.8});
  }
  
  return (
    <button className="speak-button" onClick={playKural}>
      <span className="material-icons speak-icon">volume_up</span>
    </button>
  );
}

export default SpeakButton;
