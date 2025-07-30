import React from 'react'
import './Main.css'
import assets from '../../assets/assets';

const Main = () => {
  return (
    
    <div className="main">
      <div className="nav">
        <p>Gemini Clone</p>
        <img className='img' src={assets.Gemini} alt="" />
      </div>
          <div className="main-container">
            <div className="greet">
              <p><span>Hello,usama</span></p>
              <p>How can i help you?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly sumarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Braintoem me on the best way to learn a new languagep</p>
                <img src={assets.message1_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code </p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
              <div className="main-bottom">
              <div className="search-box">
                <input type="text" placeholder='Enter a prompt here' />
                <div>
                  <img src={assets.gallery_icon} alt="" />
                  <img src={assets.mic_icon} alt="" />
                  <img src={assets.send_icon} alt="" />
                </div>
              </div>
              <p className='bottom-info'>
                Gemini may display included content from third-party sources, such as websites, books, or articles. Gemini does not endorse or guarantee the accuracy of this content. Always verify information from trusted sources before making decisions based on it.
              </p>
            </div>
         </div>
      </div>
  )
}
export default Main;
