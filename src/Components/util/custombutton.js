import React from 'react';
import './css/web-button.css'; // Optional: for styling

const Custombtn = ({ onClick, idx, bgcolor, color, children, disabled = false,icon: Icon, style = {},type = 'button', className = '' }) => {


  const handleClick = () => {
        if (onClick) {    
          onClick(bgcolor,color);
        } 
        
      };

      const styles = {
        backgroundColor: bgcolor || "gray",
        color: color ,
        padding: "10px 20px",
        border: "none",
        fontWeight:600,
        borderRadius: "5px",
        cursor: "pointer", 
      };

    return (
        <button 
            type={type} 
            id={idx} 
            onClick={handleClick}
            style={styles}
            disabled={disabled}            
            className={`Web-btn ${className}`}
            bgcolor ={bgcolor}
            color = {color}     >     
            {Icon && <Icon className="Web-btn-icon" />}      
            {children}
        </button>
    );
};
export default Custombtn;