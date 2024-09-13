import React from 'react';
import './Header.scss';
// import { useEffect, useState } from 'react';
import avatar from '../../assets/img/orig.webp';
import ua from '../../assets/img/ua.png';
import Icon from '../Icon';

const Header = ({toggleSidebar}) => {
  // const [avatarUrl, setAvatarUrl] = useState('');

  // useEffect(() => {
  //   fetch('https://api.example.com/user')
  //     .then(response => response.json())
  //     .then(data => {
  //       setAvatarUrl(data.avatar);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching user data:', error);
  //     });
  // }, []);
  const avatarUrl = avatar;



  return (
    
    <header className="header">

      <button className="header__burger" onClick={toggleSidebar}>
           <div className="header__burger-icon">
          
      </div>
      </button>
      
      <div className="header__manager">
        <div className="header__manager-avatar">
          <img className='avatar' src={avatarUrl} />
          <div className="circle" style={{ background: '#4DDA8E' }}></div>
        </div>
        <div className="header__manager-name">
          <span>Ваш менеджер:</span>
          <span>H. Simpson</span>
        </div>
        <div className="header__manager-link">
          <Icon name="tg-black" className={"icon"}/>
        </div>
      </div>
      
      <div className="header__user-panel">
        <div className="header__balance">
          <div className="header__balance-coin">
            <Icon name="coin"/>
          </div>
          <span className="header__balance-gold">139,56</span>
          <div className="header__balance-line">
          </div>
          <span className="header__balance-greenlight">$ 153,56</span>
        </div>
        <div className="header__language">
          <img src={ua} alt="UA Flag" />
          <div className="header__user-arow">
            <Icon name="arow" className="icon-smal" />
          </div>
        </div>
        <div className="header__notice">
          <Icon name="notice" />
          <div className="header__notice-circle" style={{ background: '#FB5D7A' }}></div>
        </div>
        <div className="header__user-info">
          <div className="header__user-avatar">
            <img className='avatar' src={avatarUrl} />
            <div className="circle" style={{ background: '#4DDA8E' }}>
            </div></div>
            
          <div className="header__user-name">
            <span>H. Simpson</span>
            <span>@.hsmpson</span>
          </div>
          <div className="header__user-arow">
            <Icon name="arow" className="icon-smal" />
          </div>

          
        </div>
      </div>
    </header>
    
  );
};

export default Header;
