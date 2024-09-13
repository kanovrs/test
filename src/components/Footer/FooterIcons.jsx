import Icon from '../Icon';

const FooterIcons = () => {
  
  return (
    
      <div className="footer__social">
          <div className="footer__social-logo">
              <a className="">
                  Arbitrage Up
                <Icon name="logo-aup" width="72" height="52"/>
              </a>
              <a className="">
                  One Partners
                <Icon name="logo-oep"width="52" height="52" />
              </a>
          </div>
          <div className='footer__social-link'>
              <a href="/"><Icon name="tg" width="36" height="36"/></a>
              <a href="/"><Icon name="insta" width="36" height="36"/></a>
              <a href="/"><Icon name="tiktok" width="36" height="36"/></a>
              
          </div>
    </div>
    
  );
};

export default FooterIcons;
