import React from "react";
function Header() {
  // const openMenu = () => {
  //   document.querySelector(".menu").classList.toggle("active");
  // };

  return (
    <nav className="coh-container" aria-label="Primary navigation">
      <div className="coh-container ssa-component coh-component ssa-component-instance-f5b1a7c8-82b7-440c-92b7-ee1197418836 coh-component-instance-f5b1a7c8-82b7-440c-92b7-ee1197418836 coh-style-header">
        <div className="coh-container header-main">
          <button
            className="coh-button material-icon mobile-menu-trigger coh-interaction"
            title="Open menu"
            type="button"
          ></button>
          <div className="coh-container header-main-logo">
            <div className="coh-block">
              <a href="/">
                <img
                  src="https://www.dewalt.com/sites/g/files/xnuzat961/files/dewalt_black%402x.png"
                  alt="Home"
                />
              </a>
            </div>
          </div>
          <div className="coh-container header-main-search">
            <div className="coh-block">
              <div
                className="views-exposed-form settings-tray-editable"
                data-drupal-selector="views-exposed-form-acquia-search-solr-page"
                id="block-exposedformacquia-search-solrpage"
                data-drupal-settingstray="editable"
              >
                <form>
                  <div className="js-form-item form-item js-form-type-search-api-autocomplete form-type-search-api-autocomplete js-form-item-search form-item-search form-no-label">
                    <label className="visually-hidden">Search</label>
                    <input
                      placeholder="Search"
                      data-drupal-selector="edit-search"
                      data-search-api-autocomplete-search="acquia_search_solr"
                      className="form-autocomplete form-text ui-autocomplete-input"
                      type="text"
                      id="edit-search"
                      name="search"
                      size="30"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div
            className="coh-block mobile-user-account-dropdown"
            data-analytics="[null]"
            data-analytics-layer="[null]"
          >
            <div className="usr-dropdown">
              <a
                href="#top"
                className="header-nav-utility aic-user-nav"
                title="User menu"
                aria-label="User menu"
              >
                <i className="t-icon t-icon-cart-xs-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="coh-container header-nav">
          <div className="coh-container header-nav-primary">
            <ul
              className="coh-menu-list-container coh-unordered-list"
              role="menu"
            >
              <li
                className="coh-menu-list-item level-1-menu-item js-coh-menu-item has-children is-collapsed"
                role="presentation"
                data-coh-settings='{"xl":"hidden"}'
              >
                <span
                  data-coh-settings='{ "xl":{"link_interaction":"click-through-to-link"},"sm":{"link_interaction":"no-interaction"} }'
                  className="coh-link js-coh-menu-item-link"
                  role="menuitem"
                  tabIndex="0"
                >
                  Products
                </span>
              </li>
              <li
                className="coh-menu-list-item level-1-menu-item js-coh-menu-item has-children is-collapsed"
                role="presentation"
                data-coh-settings='{"xl":"hidden"}'
              >
                <span
                  data-coh-settings='{ "xl":{"link_interaction":"click-through-to-link"},"sm":{"link_interaction":"no-interaction"} }'
                  className="coh-link js-coh-menu-item-link"
                  role="menuitem"
                  tabIndex="0"
                >
                  Systems
                </span>
              </li>
              <li
                className="coh-menu-list-item level-1-menu-item js-coh-menu-item has-children in-active-trail is-collapsed"
                role="presentation"
                data-coh-settings='{"xl":"hidden"}'
                data-menu-levels-shown="0"
              >
                <span
                  data-coh-settings='{ "xl":{"link_interaction":"click-through-to-link"},"sm":{"link_interaction":"no-interaction"} }'
                  className="coh-link js-coh-menu-item-link"
                  role="menuitem"
                  tabIndex="0"
                >
                  Support
                </span>
              </li>
              <li
                className="coh-menu-list-item level-1-menu-item js-coh-menu-item has-children is-collapsed"
                role="presentation"
                data-coh-settings='{"xl":"hidden"}'
              >
                <a
                  href="#top"
                  data-coh-settings='{ "xl":{"link_interaction":"click-through-to-link"},"sm":{"link_interaction":"no-interaction"} }'
                  className="coh-link js-coh-menu-item-link"
                  role="menuitem"
                >
                  Trade Solutions
                </a>
              </li>
            </ul>
          </div>
          <div className="coh-container header-nav-utility">
            <div className="coh-container utility-menu">
              <ul className="menu">
                <li className="menu-item">
                  <a href="#top" data-drupal-link-system-path="find-retailer">
                    Find a Retailer
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="#top"
                    data-drupal-link-query='{"destination":"\/node\/631"}'
                    data-drupal-link-system-path="account-login"
                  >
                    Product Registration
                  </a>
                </li>
              </ul>
            </div>
            <div className="coh-container language-switcher">
              <div className="coh-block">
                <div
                  className="language-switcher-language-url settings-tray-editable"
                  id="block-languageswitcher"
                  data-drupal-settingstray="editable"
                >
                  <nav id="lnav" role="navigation" aria-label="Language menu">
                    <ul className="lang-nav">
                      <li>
                        <a href="#top">
                          <span> US | EN </span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="coh-container user-account">
              <div className="coh-block">
                <div className="usr-dropdown">
                  <a
                    href="#top"
                    className="header-nav-utility aic-user-nav"
                    title="User menu"
                    aria-label="User menu"
                  >
                    <i className="t-icon t-icon-cart-xs-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
