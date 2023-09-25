import React, { useState, useEffect } from 'react';
import './App.css';
import cookie1 from './1.png';
import cookie2 from './2.png';
import cookie3 from './3.png';

function App() {
  // Загружаем значения из localStorage или устанавливаем их в 0, если нет сохраненных значений
  const [chislo1, setChislo1] = useState(parseInt(localStorage.getItem('chislo1')) || 0);
  const [chislo2, setChislo2] = useState(parseInt(localStorage.getItem('chislo2')) || 0);
  const [chislo3, setChislo3] = useState(parseInt(localStorage.getItem('chislo3')) || 0);

  function clickImg1() {
    setChislo1(chislo1 + 1);
  }
  function clickImg2() {
    setChislo2(chislo2 + 1);
  }
  function clickImg3() {
    setChislo3(chislo3 + 1);
  }

  useEffect(() => {
    localStorage.setItem('chislo1', chislo1.toString());
    localStorage.setItem('chislo2', chislo2.toString());
    localStorage.setItem('chislo3', chislo3.toString());
  }, [chislo1, chislo2, chislo3]);

  return (
    <div className="App">
      <div>
        <h1>Кликай на эмоции</h1>
        <img className='image1' id='img-cookie1' src={cookie1} onClick={clickImg1} alt="Cookie 1" />
        <img className='image2' id='img-cookie2' src={cookie2} onClick={clickImg2} alt="Cookie 2" />
        <img className='image3' id='img-cookie3' src={cookie3} onClick={clickImg3} alt="Cookie 3" />
        <div>
          <div className='chislo1'>{chislo1}</div>
          <div className='chislo2'>{chislo2}</div>
          <div className='chislo3'>{chislo3}</div>
        </div>
      </div>
    </div>
  );
}

export default App;