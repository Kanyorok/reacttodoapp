import { useState, useRef } from 'react'
import { useOnClickOutside } from './useOnClickOutside';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useOnClickOutside(menuRef, showMenu, () => setShowMenu(false));
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li ref={menuRef}>
          <button onClick={() => setShowMenu(!showMenu)}>
            Services <span>&#8595;</span>
          </button>
          {showMenu && (<ul>
            <li>Design</li>
            <li>Development</li>
          </ul>)}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
