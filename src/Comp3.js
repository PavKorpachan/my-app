import React from 'react'
import Flexer from './images/flexer.png';

const Comp2 = () => {
  return (
    <div id='comp3'>
        <p id='prisoed'>
          Присоединяйтесь прямо сейчас!
        </p>
        <div id='cards'>
          <div id='def'>
            <p id='def_name'>
              ДЕФОЛТ
            </p>
            <div id='price_def'>
              <div id='r115'>
                <p id='r1151'>
                  115₽
                </p>
                <p id='r1152'>
                  в месяц
                </p>
              </div>
              <div id='r600'>
                <p id='r6001'>
                  600₽
                </p>
                <p id='r6002'>
                  за полгода
                </p>
              </div>
            </div>
            <div id='tovar_def'>
              <ul>
                <li>Доступ на сервер</li>
                <li>Круглосуточная поддержка</li>
              </ul>
            </div>
            <button>
              Выбрать
            </button>
          </div>
          <div id='flex'>
            <p id='flex_name'>
              ФЛЕКСЕР
            </p>
            <div id='price_flex'>
            <div id='r175'>
                <p id='r1751'>
                  175₽
                </p>
                <p id='r1752'>
                  в месяц
                </p>
            </div>
              <div id='r900'>
                <p id='r9001'>
                  900₽
                </p>
                <p id='r9002'>
                  за полгода
                </p>
              </div>
            </div>
            <div id='tovar_flex'>
              <ul>
                <li>
                  <div id='flex_flex'>
                  <p>Префикc </p>
                  <img id='flex_img' src={Flexer} alt=''/>
                  <p> перед ником</p>
                  </div>
                </li>
                <li>Выбор цвета ника</li>
                <li>Уникальный эффект в лобби</li>
                <li>Добавление смайликов в Discord</li>
                <li>Участие в голосованиях</li>
              </ul>
            </div>
            <button>
              Выбрать
            </button>
          </div>
        </div>
        <div id='foot'></div>
    </div>
  )
}

export default Comp2