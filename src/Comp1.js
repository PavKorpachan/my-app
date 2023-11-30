import React from 'react'
import logo from './images/bozon.png';
import ds from './images/ds.png';

const Comp1 = () => {
  return (
    <div id='comp1'>
        <img src={logo} alt=''/>
        <div id='kratko'>
            <p id='van'> 
                <span>Уникальный </span>
                ванильный сервер
                <span> для всех </span>
            </p>
            <p id='mnogo'> 
                Стройте свои уникальные постройки, исследуйте бесконечный мир, выживайте в разных условиях и веселитесь с друзьями в режиме мультиплеера.
            </p>
        </div>
        <div id='butns'>
            <button id='by'>КУПИТЬ ПРОХОДКУ</button>
            <button id='ds'><img id='ds_img' src={ds} alt=''/>DISCORD</button>
        </div>
        <p id='ver'> 
             1.20-1.20.1 | Только Java | Без лицензии
        </p>
    </div>
  )
}

export default Comp1