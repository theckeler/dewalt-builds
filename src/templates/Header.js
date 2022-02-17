const Header = () => {
  return (
    <header
      role="banner"
      className="header header--search-expanded"
      data-logged-in="false"
      data-username-text=""
    >
      <div className="page-module__inner header__inner clear">
        <a href="/" className="site-logo__link">
          <img
            src="https://www.dewalt.com/~/media/dewalt/images/global/53.png?h=37&amp;w=153&amp;la=en-US"
            className="site-logo__image--desktop"
            alt="DEWALT Logo"
          />
          <img
            src="https://www.dewalt.com/~/media/dewalt/images/global/54.png?h=35&amp;w=129&amp;la=en-US"
            className="site-logo__image--mobile"
            alt="DEWALT Logo"
          />
        </a>
        <div className="header__mobile-menu-triggers">
          <button
            className="icon-language header__mobile-menu-trigger triggerdata__trigger triggerdata__target"
            data-triggerdata="language-selector"
            data-triggerdata-data="expanded"
          >
            Select Language
          </button>
          <button
            className="icon-user header__mobile-menu-trigger header__mobile-menu-trigger--user triggerdata__trigger triggerdata__target"
            data-triggerdata="user"
            data-triggerdata-data="expanded"
          >
            User
          </button>
          <button
            className="icon-nav header__mobile-menu-trigger triggerdata__trigger triggerdata__target"
            data-triggerdata="primary-nav"
            data-triggerdata-data="expanded"
          >
            Menu
          </button>
        </div>

        <div className="header__utility-items-wrapper">
          <ul className="utility-nav clear">
            <li className="utility-nav__item">
              <a href="#top" className="utility-nav__link">
                Find A Retailer
              </a>
            </li>
            <li className="utility-nav__item">
              <a href="#top" className="utility-nav__link">
                Product Registration
              </a>
            </li>
            <li className="utility-nav__item">
              <a href="#top" className="utility-nav__link">
                Support
              </a>
            </li>
          </ul>
          <div
            className="header__submenu header__submenu--user triggerdata__target"
            data-triggerdata="user"
          >
            <button className="header__submenu-trigger--tier-1 user-menu__submenu-trigger icon-arrow-right">
              Log in
            </button>
          </div>
          <hr className="header__divider" />

          <div className="language-selector__wrapper">
            <button
              className="icon-small-arrow-down header__submenu-trigger--tier-1 language-selector__submenu-trigger triggerdata__trigger triggerdata__target"
              data-triggerdata="language-selector-submenu"
              data-triggerdata-data="expanded"
              aria-label="DEWALT Global Websites and languages"
            >
              en
            </button>
          </div>
        </div>
      </div>
      <div
        className="header__submenu header__submenu--primary-nav triggerdata__target"
        data-triggerdata="primary-nav"
      >
        <nav
          role="navigation"
          aria-label="Primary Navigtion"
          className="page-module__inner primary-nav__inner clear"
          id="ui-skip-48"
        >
          <a href="/" className="site-logo__link">
            <img
              src="/~/media/dewalt/images/global/54.png?h=35&amp;w=129&amp;la=en-US"
              alt="DEWALT Logo"
            />
          </a>
          <ul className="primary-nav clear">
            <li className="primary-nav__submenu-trigger-wrapper">
              <a
                className="header__submenu-trigger--tier-1 primary-nav__submenu-trigger--tier-1 primary-nav__trigger"
                href="#top"
              >
                Power Tools
              </a>
            </li>
            <li className="primary-nav__submenu-trigger-wrapper primary-nav__submenu-trigger-wrapper--is-light">
              <a
                className="header__submenu-trigger--tier-1 primary-nav__submenu-trigger--tier-1 primary-nav__trigger"
                href="#top"
              >
                Anchors
              </a>
            </li>
            <li className="primary-nav__submenu-trigger-wrapper">
              <a
                className="header__submenu-trigger--tier-1 primary-nav__submenu-trigger--tier-1 primary-nav__trigger"
                href="#top"
              >
                Accessories
              </a>
            </li>
            <li className="primary-nav__submenu-trigger-wrapper">
              <a
                className="header__submenu-trigger--tier-1 primary-nav__submenu-trigger--tier-1 primary-nav__trigger"
                href="#top"
              >
                Hand Tools
              </a>
            </li>
            <li className="primary-nav__submenu-trigger-wrapper">
              <a
                className="header__submenu-trigger--tier-1 primary-nav__submenu-trigger--tier-1 primary-nav__trigger"
                href="#top"
              >
                Outdoor
              </a>
            </li>
            <li className="primary-nav__submenu-trigger-wrapper">
              <a
                className="header__submenu-trigger--tier-1 primary-nav__submenu-trigger--tier-1 primary-nav__trigger"
                href="#top"
              >
                Gear &amp; Storage
              </a>
            </li>
            <li className="primary-nav__submenu-trigger-wrapper">
              <a
                className="header__submenu-trigger--tier-1 primary-nav__submenu-trigger--tier-1 primary-nav__trigger"
                href="#top"
              >
                Total Trade Solutions
              </a>
            </li>
          </ul>
          <ul className="utility-nav clear">
            <li className="utility-nav__item">
              <a href="#top" className="utility-nav__link">
                Find A Retailer
              </a>
            </li>
            <li className="utility-nav__item">
              <a href="#top" className="utility-nav__link">
                Product Registration
              </a>
            </li>
            <li className="utility-nav__item">
              <a href="#top" className="utility-nav__link">
                Support
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
