import * as React from 'react'

import {
  nav,
  navLinks,
  navLinkItem,
  navLinkText,
  navHome,
  showSidebar
} from '../styles/nav.module.css'

const Nav = () => <nav id={nav}>
  <button id={showSidebar}>
    +
  </button>
  <a className={navHome} href="https://wiki.viva-la-vita.org">
    生如夏花
  </a>
  <ul className={navLinks}>
    <li className={navLinkItem}>
      <a href="https://viva-la-vita.org" className={navLinkText}>
        主页
      </a>
    </li>
    <li className={navLinkItem}>
      <a href="https://bbs.viva-la-vita.org" className={navLinkText}>
        论坛
      </a>
    </li>
    <li className={navLinkItem}>
      <a href="https://github.com/viva-la-vita/wiki" className={navLinkText}>
        仓库
      </a>
    </li>
  </ul>
</nav>

export default Nav
