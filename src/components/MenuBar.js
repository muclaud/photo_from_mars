import React, { useState } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function MenuBar() {
  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'home' : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu inverted secondary color='brown' size='huge'>
      <Container>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
          as={Link}
          to='/'
        />
        <Menu.Item
          position='right'
          name='info'
          active={activeItem === 'info'}
          onClick={handleItemClick}
          as={Link}
          to='/info'
        />
      </Container>
    </Menu>
  );
}

export default MenuBar;
