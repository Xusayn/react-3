import React from 'react'
import './Section1.scss'
import {video , vd} from '../../assets'
export default function Section1() {
  return (
    <>
      <section className='section1'>
        <div className="container">
          <h1>О компании <span className='span'>LEANGROUP</span></h1>
           <div className="section1__divs">
           <div className="section1__left">
                <img src={video} alt="" />
                <img className='vd' src={vd} alt="" />
            </div>
            <div className="section1__right">
              <h5>Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на
                 сегодняшний день является ведущей компанией по производству ламинатных и 
                 экструзионных туб <br /> <br />
                Имея две технологии – для производства ламинатных и экструзионных 
                туб, мы предлагаем вам широкий спектр возможностей. Большим преимуществом является 
                собственный печатный цех в ламинате и in-line печать в экструзии с возможностью различных
                 дополнительных опций декора. <br /> <br /> <br /> Особое внимание уделяется работе с 
                поставщиками для контроля и поддержания качества производимой нами продукции.
                С января 2018 года компания стала членом Европейской Ассоциации
                производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке Европы. 
                </h5>
            </div>
           </div>

        </div>
      </section>
    </>
  )
}
