import React from 'react';
import {useThemeConfig, useColorMode} from '@docusaurus/theme-common';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle'; // Keep this if we plan to use the default toggle
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';

// Import the default Navbar from theme-original
import DefaultNavbar from '@theme-original/Navbar';

import styles from './index.module.css'; // This file might not be necessary if using default Docusaurus CSS classes

function Navbar(): JSX.Element {
  const {
    navbar: {hideOnScroll, style, items}, // Access items directly from navbar config
  } = useThemeConfig();
  const {colorMode, setColorMode} = useColorMode();
  const mobileSidebar = useNavbarMobileSidebar();

  // Split items based on position for rendering
  const [leftItems, rightItems] = splitNavbarItems(items);

  // Custom Theme Toggle
  const toggleTheme = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="navbar navbar--fixed-top">
      <div className="navbar__inner">
        <NavbarMobileSidebarToggle />
        <NavbarLogo />
        <ul className="navbar__items">
          {leftItems.map((item, i) => (
            <NavbarItem {...item} key={i} />
          ))}
        </ul>
        <ul className="navbar__items navbar__items--right">
          {rightItems.map((item, i) => (
            <NavbarItem {...item} key={i} />
          ))}
          {/* Custom Theme Toggle Button */}
          <li className="navbar__item">
            <button
              className="button button--secondary button--sm"
              onClick={toggleTheme}
              aria-label={`Switch between ${colorMode === 'dark' ? 'light' : 'dark'} mode`}>
              {colorMode === 'dark' ? '☀️' : '🌙'}
            </button>
          </li>
          <NavbarSearch />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;