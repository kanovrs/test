

import React from 'react';
import './Sidebar.scss'
import Icon from '../Icon';
import FooterIcons from '../Footer/FooterIcons'

const Sidebar = ({ isOpen, onClose }) => {



  return (
    <div className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
      <div className="sidebar__logo">
        <a href="" className='sidebar__logo-txt'><span>One</span>
  <span>Media</span></a>
        <button className="sidebar__close" onClick={onClose}>
        </button>
      </div>
      <nav>
        <ul className='sidebar__menu'>
          <li >
            <a className='sidebar__menu-link' href='/'>
                <Icon name="dashboard" className={"icon"} />
              Дашборд</a></li>
          <li >
            <a className='sidebar__menu-link' href='/offers'>
              <Icon name="offers" className={"icon"}/>
              Офферы</a></li><li >
            <a className='sidebar__menu-link' href='/'>
              <Icon name="flows" className={"icon"}/>
              Потоки</a></li>
          <li >
            <a className='sidebar__menu-link' href='/'>
              <Icon name="stats" className={"icon"}/>
              Статистика</a></li>
          <li >
            <a className='sidebar__menu-link' href='/'>
              <Icon name="finances" className={"icon"}/>
              Финансы</a></li>
          <li >
            <a className='sidebar__menu-link' href='/'>
              <Icon name="api" className={"icon"}/>
              Апи</a></li>
           <li >
            <a className='sidebar__menu-link' href='/'>
              <Icon name="news" className={"icon"}/>
              Новости</a></li>
        </ul>
      </nav>
      <FooterIcons />
    </div>
  );
};

export default Sidebar;
