import React from 'react';
import './css/web-button.css'; // Optional: for styling

const WebButton = ({ onClick, idd, children, disabled = false,icon: Icon,style = {},type = 'button', className = '' }) => {
    const handleClick = (event) => {
        if (onClick) {    
          onClick(children, Icon, event);// Pass children to the onClick handler
        }    
      };
    return (
        <button 
            type={type} 
            id={idd} 
            onClick={handleClick}
            style={style}
            disabled={disabled}
            className={`Web-btn ${className}`}>     
            {Icon && <Icon className="Web-btn-icon" />}      
            {children}
        </button>
    );
};
export default WebButton;