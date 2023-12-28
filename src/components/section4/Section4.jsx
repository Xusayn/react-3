import React from 'react'
import './Section4.scss'
import {s4} from '../../assets'
export default function Section4() {
  return (
      <>
        <section className='section4'>
          <img src={s4} alt="" />
          <div className="info">
            <h1>Получить подробную <span>информацию</span></h1>
            <h3>Просто заполните форму, наш менеджер свяжется с вами в ближайшее время</h3>


            <div className="inputs">
              <input type="text" placeholder='Ваше имя' />
              <input type="text"placeholder='+375 (29) 0000000' />
              <input className='gig' type="text" placeholder='Комментарий' />
            </div>
            
            <button>Получить информацию</button>
          </div>
        </section>
      </>
  )
}
