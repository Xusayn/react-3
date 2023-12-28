import React from 'react'
import './Section3.scss'
import {section31 ,section32, section33, section34, section35} from '../../assets'
export default function Section3() {
  return (
      <>
          <section className="section3">
            <h1>Наша <span>продукция</span></h1>
            <div className="buttons">
              <button>Ламинатные тубы</button>
              <button className='center'>Экструзионные тубы</button>
              <button>Другая упаковка</button>
            </div>
            <div className="images">
              <img src={section31} alt="" />
              <img src={section32} alt="" />
              <img src={section33} alt="" />
              <img src={section34} alt="" />
              <img src={section35} alt="" />
            </div>
            <button className='btn'>Перейти в каталог</button>
          </section>
      </>
  )
}
