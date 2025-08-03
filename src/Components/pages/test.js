import React, { useEffect, useRef, useState } from 'react';
import Header from "../../layout/header";
import Sidebar from "../../layout/sidebar";
import Footer from "../../layout/footer";
import Custombtn from '../util/custombutton';

const Webtest = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isdivOpen, setIsdivOpen] = useState(false);  
  const [output, setoutput] = useState(null);  
  const divRef = useRef(null);



  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (divRef.current) {      
      const customData = divRef.current.getAttribute('bgcolor');     
      console.log('Custom Data:', customData);
     
    }
  }, []);


  const ChangeColor = (bgcolor,color) => { 
    // eslint-disable-next-line no-useless-concat
   setoutput('bgColor: '+bgcolor +' , ' + ' Color: '+color);
   console.log(bgcolor,color);
   setIsdivOpen(!divRef);
  };


  return (
    <div className="container-fluid">
      <Header toggleSidebar={toggleSidebar} />
      <div className="outlet-content">
        <Sidebar isOpen={isSidebarOpen} />
        <div className="content">
          <div className="container-fluid">
            <h1> Test Page </h1>
            

              <div className="group_item">
              <Custombtn bgcolor="orange" color="black"  onClick={ChangeColor}type="button" ref={divRef}>                
                    Cick me
                </Custombtn>
                <Custombtn bgcolor="green" color="yellow" onClick={ChangeColor}type="button" ref={divRef}>                
                    Cick me
                </Custombtn> 
                <Custombtn bgcolor="purple" color="white" onClick={ChangeColor} type="button">                
                    Cick me
                </Custombtn>     
                <Custombtn bgcolor="blue" color="yellow" onClick={ChangeColor} type="button">                
                    Cick me
                </Custombtn>      
              </div>
              <div className="group_item">
               
                <p isdivOpen={isdivOpen}>{output} </p>
              </div>
          </div>      
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Webtest;
