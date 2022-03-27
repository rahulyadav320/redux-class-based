import React from 'react';

const MyHoc = (Component) => (props) =>
  (
    <Component message="World" {...props}>
      {props.children}
    </Component>
  );

export default MyHoc;
