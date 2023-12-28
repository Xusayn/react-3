import React from 'react'
import './Section6.scss'
import {section71,section72, section73} from '../../assets'
export default function Section6() {
  return (
      <>
        <section className="section6">
          <h1>Новости</h1>

          <div className="cards">
            <div className="card">
              <img src={section71} alt="" />
              <h4>28.01.2022</h4>
              <h3>"ЛеанГрупп" серебряный призер EcoVadis!</h3>
            </div>



            <div className="card">
              <img src={section72} alt="" />
              <h4>28.01.2022</h4>
              <h3>"ЛеанГрупп" серебряный призер EcoVadis!</h3>
            </div>




            <div className="card">
              <img src={section73} alt="" />
              <h4>28.01.2022</h4>
              <h3>"ЛеанГрупп" серебряный призер EcoVadis!</h3>
            </div>
          </div>

          <button>Все новости</button>
        </section>
      </>
  )
}
