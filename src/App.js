import React from 'react';
import './styles2.css';
import TrackerTop from './componentes/TrackerTop.js';

function App() {
  return (
    <div>
      <nav className="navegation">
        <ul className="navegation__list">
          <li className="navegation__item">
            <a className="navegation__link" href="">
              <img className="navegation__img" src="https://assets.garmoth.com/icons/menu/grind-tracker.png" alt="" />
              <span className="navegation__text">Grind Tracker</span>
            </a>
          </li>
          <li className="navegation__item">
            <a className="navegation__link" href="">
              <img className="navegation__img" src="https://assets.garmoth.com/icons/menu/caphras.png" alt="" />
              <span className="navegation__text">Caphras Calc.</span>
            </a>
          </li>
          <li className="navegation__item">
            <a className="navegation__link" href="">
              <img className="navegation__img" src="https://assets.garmoth.com/icons/menu/artifacts.png" alt="" />
              <span className="navegation__text">Artifacts</span>
            </a>
          </li>
        </ul>
      </nav>

      <section className="tracker__bg">
        <div className="container">
          <div className="tracker">
            <div className="tracker__time">
              <div className="tracker__top">
                <p>Mins</p>
              </div>
              <div className="tracker__bottom">
                <input className="tracker__input" type="number" placeholder="0" />
              </div>
            </div>
            <div className="tracker__items">
              <div className="tracker__item">
                <TrackerTop name='Black-Stone' />
                <div className="tracker__bottom">
                  <input className="tracker__input" type="number" placeholder="0" />
                </div>
              </div>
              <div className="tracker__item">
                <TrackerTop name='Black-Stone' />
                <div className="tracker__bottom">
                  <input className="tracker__input" type="number" placeholder="0" />
                </div>
              </div>
              <div className="tracker__item">
                <TrackerTop name='Black-Stone' />
                <div className="tracker__bottom">
                  <input className="tracker__input" type="number" placeholder="0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
