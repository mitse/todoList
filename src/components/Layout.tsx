import React from 'react';

const Layout: React.FC = (props) => {
  return (
    <div className="layout">
        <h1 className="flex-center">Todo List App</h1>
        {props.children}
    </div>
  );
}

export default Layout;