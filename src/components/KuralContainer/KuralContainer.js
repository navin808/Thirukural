import KuralLine from '../KuralLine/KuralLine';
import './KuralContainer.css';
import React, { useState, useEffect } from 'react';

function KuralContainer({ kuralNumber, onRefreshClick }) {

  const [kural, setKural] = useState('');

  useEffect(() => {
    if (kuralNumber)
      fetchKural(kuralNumber);
  }, [kuralNumber]);

  function fetchKural(kuralNum) {
    makeKuralAPI(kuralNum).then(kural => {
      setKural(kural);
    }, err => {
      console.log(err);
    });
  }

  const makeKuralAPI = (number) => {
    return window
      .fetch(`https://api-thirukkural.vercel.app/api?num=${number}`, {
        method: 'GET',
      })
      .then(r => r.json());
  }

  const content = kural ?
    <>
      <KuralLine
          title="தமிழ் "
          lang="Tamil Male"
          kuralLine1={kural.line1}
          kuralLine2={kural.line2}
          explanation={kural.tam_exp}
      />
      <KuralLine
          title="English"
          lang="US English Male"
          kuralLine1={kural.eng}
          explanation={kural.eng_exp}
      />
    </> :
    '';

  return (
    <div>
      <h3 className="content-header">
        <b>குறள்: {kuralNumber}</b>
        <button onClick={onRefreshClick} className="refresh-button">
            <span className="material-icons">refresh</span>
        </button>
      </h3>
      {content}
    </div>
  );
}

export default KuralContainer;
