import React from 'react'
import './Footer.scss'
import {logo,w,f,ing,smooth} from '../../assets'
export default function Footer({handlbactop}) {

 



  return (
    <>
    <footer>
      <div className="container">
        <div className="images">
          <div className="img">
          <img src={logo} alt="" />
          </div>
          <div className="imgs">
            <img src={w} alt="" />
            <img src={f} alt="" />
            <img src={ing} alt="" />
          </div>
        </div>

        <hr />




        <div className="cards">
          <div className="card">
            <h2>Продукция</h2>
            <h4>Ламинатные тубы</h4>
            <h4>Экструзионные тубы</h4>
            <h4>Другая упаковка</h4>
          </div>




          <div className="card">
            <h2>Компания</h2>
            <h4>О нас</h4>
            <h4>Наша команда</h4>
            <h4>Сертификаты</h4>
          </div>




          <div className="card">
            <h2>Разделы</h2>
            <h4>Контакты</h4>
            <h4>Новости</h4>
            <h4>Вакансии</h4>
          </div>




          <div className="card">
            <h2 className='gold'>Беларусь</h2>
            <h4>+375 (17) 270 53 77  <br /> +375 (17) 270 53 78</h4>

            <div className="mt">
              <h3 className='gold'>Москва</h3>
              <h3>+7 (495) 280 73 44 <br />+7 (495) 280 73 44</h3>
            </div>
          </div>




          <div className="card">
            <h2 className='gold'>Европа</h2>
            <h4>+48 73 1111 044</h4>
            <div className="mt">
              <h3 className="gold">Екатеринбург</h3>
              <h3>+7 (343) 346 82 06</h3>
            </div>
            
          </div>
        </div>
        <div className="infos">
          <h5>
            © 2022 Leangroup. All Rights Reserved.
          Разработка и продвижение сайтов SkyWeb.by
        </h5>
        <img onClick={()=>handlbactop()} className='smt' src={smooth} alt="" />
        </div>
      </div>
    </footer>
    </>
      
  )
}
