import KuralHeader from '../KuralHeader/KuralHeader';
import SpeakButton from '../SpeakButton/SpeakButton';
import './KuralLine.css';

function KuralLine({ title, lang, kuralLine1, kuralLine2, explanation }) {

  let line = kuralLine1;
  line += kuralLine2 ? kuralLine2 : '';

  return (
    <div className="kural-lines-group">
      <KuralHeader title={title}>
        <SpeakButton kuralLine={line} lang={lang} />
      </KuralHeader>
      <p className="kural-line">"{kuralLine1} {kuralLine2 ? '' : '"' }</p>
      {kuralLine2 ? <p className="kural-line">{kuralLine2}"</p> : ''}
      <p className="explanation">{explanation}</p>
    </div>
  );
}

export default KuralLine;
