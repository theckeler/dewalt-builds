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
              <a href="/support/find-a-retailer" className="utility-nav__link">
                Find A Retailer
              </a>
            </li>
            <li className="utility-nav__item">
              <a
                href="/support/product-registration"
                className="utility-nav__link"
              >
                Product Registration
              </a>
            </li>
            <li className="utility-nav__item">
              <a href="/support" className="utility-nav__link">
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
                data-triggerdata="nav_37805c64-8163-4515-97be-1f14d60fb3a6"
                data-triggerdata-data="expanded"
                href="/products/power-tools"
              >
                Power Tools
              </a>
            </li>
            <li className="primary-nav__submenu-trigger-wrapper primary-nav__submenu-trigger-wrapper--is-light">
              <a
                className="header__submenu-trigger--tier-1 primary-nav__submenu-trigger--tier-1 primary-nav__trigger"
                data-triggerdata="nav_47ced1a5-f5fc-4a3d-ac04-699d5c025a82"
                data-triggerdata-data="expanded"
                href="http://anchors.dewalt.com/anchors/"
              >
                Anchors
              </a>
            </li>
            <li className="primary-nav__submenu-trigger-wrapper">
              <a
                className="header__submenu-trigger--tier-1 primary-nav__submenu-trigger--tier-1 primary-nav__trigger"
                data-triggerdata="nav_11b4d84b-6531-48a4-83a2-2ae99b15603e"
                data-triggerdata-data="expanded"
                href="/products/accessories"
              >
                Accessories
              </a>
            </li>
            <li className="primary-nav__submenu-trigger-wrapper">
              <a
                className="header__submenu-trigger--tier-1 primary-nav__submenu-trigger--tier-1 primary-nav__trigger"
                data-triggerdata="nav_542561eb-c01d-4041-9192-e43542f5393c"
                data-triggerdata-data="expanded"
                href="/products/hand-tools"
              >
                Hand Tools
              </a>
            </li>
            <li className="primary-nav__submenu-trigger-wrapper">
              <a
                className="header__submenu-trigger--tier-1 primary-nav__submenu-trigger--tier-1 primary-nav__trigger"
                data-triggerdata="nav_5a91c127-35ee-4d34-b548-5d90bef1d8be"
                data-triggerdata-data="expanded"
                href="/products/outdoor"
              >
                Outdoor
              </a>
            </li>
            <li className="primary-nav__submenu-trigger-wrapper">
              <a
                className="header__submenu-trigger--tier-1 primary-nav__submenu-trigger--tier-1 primary-nav__trigger"
                data-triggerdata="nav_a16941df-e149-4c37-a0df-d05a1b730480"
                data-triggerdata-data="expanded"
                href="/products/storage-and-gear"
              >
                Gear &amp; Storage
              </a>
            </li>
            <li className="primary-nav__submenu-trigger-wrapper">
              <a
                className="header__submenu-trigger--tier-1 primary-nav__submenu-trigger--tier-1 primary-nav__trigger"
                data-triggerdata="nav_235e5c1b-b6a6-4549-b335-5fccf09edf7d"
                data-triggerdata-data="expanded"
                href="/total-trade-solutions"
              >
                Total Trade Solutions
              </a>
            </li>
          </ul>
          <ul className="utility-nav clear">
            <li className="utility-nav__item">
              <a href="/support/find-a-retailer" className="utility-nav__link">
                Find A Retailer
              </a>
            </li>
            <li className="utility-nav__item">
              <a
                href="/support/product-registration"
                className="utility-nav__link"
              >
                Product Registration
              </a>
            </li>
            <li className="utility-nav__item">
              <a href="/support" className="utility-nav__link">
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
