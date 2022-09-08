import React from 'react';
import classes from './buttonTeal.module.css';
const buttonTeal = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
};

export default buttonTeal;
