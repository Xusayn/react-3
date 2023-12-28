import React from 'react'
import './Header.scss'
import { logo ,headerbacground} from '../../assets'
export default function Header() {
  return (
    <>
      <header>
        <div className="container">
        <nav className="header__nav">
          <ul>
            <img className='nav__logo' src={logo} alt="" />
          </ul>
          <ul>
            <li className='add'>Продукция</li>
            <li>Сертификаты</li>
            <li>Наша команда</li>
            <li>О нас</li>
            <li>Новости</li>
            <li>Вакансии</li>
            <li>Контакты</li>
            <li><span className='span'>RU</span>|EN</li>
          </ul>
        </nav>

        <div className="laminat">
            <h3>LEANGROUP - тубы и этикетки</h3>
            <h1>Ламинатные тубы</h1>
            <h3>
              Используются для производства зубных паст. Широко применяются в 
              сегменте косметики, пищевой индустрии, 
              парафармацевтике, бытовой химии и DIY (Do-it-Yourself).
            </h3>
            <button>Каталог</button>
        </div>
        </div>




        <div className="header__div">
          <img src={headerbacground} alt="" />
        </div>
      </header>

    </>
  )
}
