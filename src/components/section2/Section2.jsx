import React from 'react'
import './Section2.scss'
import { section21 ,section22, section23 ,section24,left,right } from '../../assets'
export default function Section2() {
  return (
    <>
      <section className='section2'>
        
        <h1>Качество продукции подтверждают <span>сертификаты</span></h1>
         
        <div className="div">
            <img src={left} alt="" />
            <img src={section21} alt="" />
            <img src={section22} alt="" />
            <img src={section23} alt="" />
            <img src={section22} alt="" />
            <img src={section24} alt="" />
            <img src={right} alt="" />
          </div>
      </section>
    </>
      
  )
}
