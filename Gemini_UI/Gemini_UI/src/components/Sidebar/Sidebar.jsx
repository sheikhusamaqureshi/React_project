import React from 'react';
import { useState } from 'react';
import './sidebar.css';
import assets from '../../assets/assets';

const Sidebar = () => {
    const [extended, setExtended] = useState(false);

    return (
        <div className="sidebar" style={{width: extended ? '250px' : '60px', transition: 'width 0.2s'}}>
            <div className="top">
                <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
                <div className="bottom-item new-chat" style={{justifyContent: extended ? 'flex-start' : 'center'}}>
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ? (
                    <div className="recent">
                        <p className="recent-title"> Recent </p>
                        <div className="recent-entry">
                            <img src={assets.message_icon} alt="" />
                            <p>what is react ...</p>
                        </div>
                    </div>
                ) : null}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry" >
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                
                </div>
                 <div className="bottom-item recent-entry" >
                    <img src={assets.history_icon} alt="" />
                    {extended ?<p>Activity</p> : null}
                </div>
                   <div className="bottom-item recent-entry" >
                    <img src={assets.settings_icon} alt="" />
                  {extended ?  <p>Setting</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;