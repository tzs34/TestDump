import React from 'react';
import Chip from '@material-ui/core/Chip';

const PromoBar = ({ type, onClick }) => {
  let label, color;

  if (type === "MULTI_BUY") {
    label = "Multi Buy";
    color = "primary";
  }
  if (type === "PRICE_CUT") {
    label = "Price Cut";
    color = "secondary";
  }
  if (type === "UNCLASSIFIED") {
    label = "Unclassified";
    color = "default";
  }

  if(type === null) {
    return null
  }

  return (
    <Chip 
      style={{
        width: '100%'
      }} 
      color={color}
      label={label}
      onClick={onClick}
    />
  );
};

export default PromoBar