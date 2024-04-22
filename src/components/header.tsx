import React from 'react';
import { NextPage } from 'next';

type HeaderProps = {
  isLogged: boolean;
};

const Header: NextPage<HeaderProps> = (props) => {
  return (
    <div>
      <h1>Header</h1>
      {props.isLogged ? <p>Logged in</p> : <p>Not logged in</p>}
    </div>
  );
};
 
export default Header;
