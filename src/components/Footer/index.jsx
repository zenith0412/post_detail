import React from 'react'
import inputImage from '../../assets/imageIcon.svg'
import './Footer.css'

const Footer = () => {
    return (
        <main className="footer_main">
            <div>
                <label htmlFor="input"><img src={inputImage} alt="" /></label>
            </div>
            <div className="footer_write_comment">
                <input type="text" className="footer_input" placeholder='댓글을 남겨주세요.' />
            </div>
            <div className="footer_action">
                <button className="footer_button">등록</button>
            </div>
        </main>
    )
}

export default Footer