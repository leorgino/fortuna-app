import React, { useState, useEffect } from 'react';
import fondo1 from './imagenes/fondo1.jpg';
import fondo2 from './imagenes/fondo2.jpg';
import fondo3 from './imagenes/fondo3.jpg';
import fondo4 from './imagenes/fondo4.jpg';
import './App.css';

const fortunes = [
  "Lo que sospechabas es verdad, procura ser amable con ellos, pues esta bondad ayudará a que todo mejore.",
  "Se te cumplirá un hermoso sueño y veras como otros sueños se hacen realidad.",
  "La realidad del ser humano es su pensamiento, no su cuerpo material.",
  "Te casarás con un atleta profesional. Si las competencias de comer pueden ser consideradas un deporte.",
  "Valiente es aquel que ama.",
  "No tienes que ser más rápido que el oso, solo tienes que ser más rápido que el chico más lento que corre de él.",
  "No te tomes la vida demasiado en serio. No saldrás de ella con vida.",
  "Mañana puede ser muy tarde para disfrutar lo que tienes hoy.",
  "Cuando busques lo que mas deseas, recuerda hacer tu mejor esfuerzo.",
  "No olvides que un amigo es un regalo que te das a ti mismo.",
  "Alégrate, un camino de hermosas pasiones te espera y debes transitarlo.",
  "Una reputación de mil años puede depender de la conducta de una hora.",
  "Siente la felicidad que espera por ti y no olvides atraparla para mantenerla contigo.",
  "Alégrate, un camino de hermosas pasiones te espera y debes transitarlo.",
  "No todo el mundo puede recibir las mismas cosas. Se practico.",
];

const images = [
  fondo1,
  fondo2,
  fondo3,
  fondo4
]

const App = () => {
  const [fortune, setFortune] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const randomFortuneIndex = Math.floor(Math.random() * fortunes.length);
    const randomImageIndex = Math.floor(Math.random() * images.length);
    setFortune(fortunes[randomFortuneIndex]);
    setImage(images[randomImageIndex]);
  }, []);

  const handleNewFortune = () => {
    const randomFortuneIndex = Math.floor(Math.random() * fortunes.length);
    const randomImageIndex = Math.floor(Math.random() * images.length);
    setFortune(fortunes[randomFortuneIndex]);
    setImage(images[randomImageIndex]);
  };

  return (
    <div className="App">
      <img src={image} alt="Galleta de la fortuna" />
      <div className="fortune-container">
        <button onClick={handleNewFortune}>Tu Fortuna en un click</button>
        <p>{fortune}</p>
      </div>
    </div>
  );
};

export default App;
