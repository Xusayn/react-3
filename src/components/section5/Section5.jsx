import React from 'react'
import './Section5.scss'
import { section61 ,section62,section63,section64,section65 } from '../../assets'
export default function Section5() {
  return (
    <>
      <section className="section5">
        <h1>Наша <span>команда</span></h1>


        <div className="komanda">
          <div className="profile">
            <img src={section61} alt="" />
            <h3 className="nik">Войнич Дарья</h3>
            <h4>Заместитель директора по продажам</h4>
            <h3 className="number">+375 (17) 270-53-77 (317)</h3>
            <h3 className="email"></h3>
          </div>





          <div className="profile">
            <img src={section62} alt="" />
            <h3 className="nik">Мисько Екатерина</h3>
            <h4>Начальник отдела сопровождения</h4>
            <h3 className="number">+375 (17) 270-53-77 (115)   +375 29 112-73-48</h3>
            <h3 className="email">k.melnichenko@leangroup.by</h3>
          </div>







          <div className="profile">
            <img src={section63} alt="" />
            <h3 className="nik">Дмитроченко Дмитрий</h3>
            <h4>Начальник отдела допечатной подготовки</h4>
            <h3 className="number">+375 (17) 270-53-77 (333)  +375 29 360-32-26</h3>
            <h3 className="email">dmitrochenko@leangroup.by</h3>
          </div>







          <div className="profile">
            <img src={section64} alt="" />
            <h3 className="nik">Антух Евгений</h3>
            <h4>Начальник отдела снабжения</h4>
            <h3 className="number">+375 (17) 270-53-77 (148)   +375 44 764-16-28</h3>
            <h3 className="email">j.antuh@leangroup.by</h3>
          </div>






          <div className="profile">
            <img src={section65} alt="" />
            <h3 className="nik">Мисник Елена</h3>
            <h4>Специалист по работе с клиентами</h4>
            <h3 className="number">+375 (17) 270-53-77 (322)   +375 29 329-34-03</h3>
            <h3 className="email">e.misnik@leangroup.by</h3>
          </div>
        </div>
        <button>Наша команда</button>


      </section>
    </>
  )
}
