import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "./Menu";
import "./css/Sidebar.css";
import WebInput from "../Components/util/Web-Input";

const Sidebar = ({ isOpen }) => {
  const [sidebar, setSidebar] = useState("");
  const showSidebar = path => setSidebar(path);
  
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
       <div className="navbar">
              <span >Menu</span>
          </div>     
     
  
          <div class="half hide">    
            <div class="tab blue">
              <input id="tab-four" type="radio" name="tabs2"/>
              <label for="tab-four">UI</label>
              <div class="tab-content">
                <p>Ваша идеальная тема также зависит от типа контента, который публикует ваш сайт. По сути, вы хотите смотреть на такие вещи, как скорость загрузки, хотите ли вы современный дизайн или что-то действительно простое, такие функции, как магазин электронной коммерции.</p>
              </div>
            </div>
            <div class="tab blue">
              <input id="tab-five" type="radio" name="tabs2" />
              <label for="tab-five">Forms</label>
              <div class="tab-content">
                <p>Там нет правильных или неправильных ответов. Просто задайте себе подобные вопросы и запишите свои предпочтения. После этого процесса вы будете точно знать, чего хотите. </p>
              </div>
            </div>
            <div class="tab blue">
              <input id="tab-six" type="radio" name="tabs2" />
              <label for="tab-six">Product</label>
              <div class="tab-content">
                <p>Вы знаете свой веб-сайт и свои долгосрочные цели, и это важно. Вам не нужна тема, которая готова включить магазин, если вы не будете продавать что-либо сейчас или в будущем, но если это одна из ваших будущих целей, сейчас самое время подумать об этом. </p>
              </div>
            </div>
          </div>

         

            <ul className="nav-menu">
                {Menu.map((item, index) => {
                    return (
                        <li key={index} className={sidebar === item.path ? "nav-item active" : "nav-item"}>
                            <Link 
                                onClick={() => showSidebar(item.path)} 
                                to={item.path}>
                                {item.icon}
                                <span>
                                  {item.title}
                                </span>                              
                            </Link>
                        </li>
                    );
                })}
            </ul> 
    </div>
  );
};

export default Sidebar;