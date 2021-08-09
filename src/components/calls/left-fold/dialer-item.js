import React from "react";
import "./dialer-item.css";

function DialerItem({item,isActive}){
    
    return (
    <div className = "dialer-items">
     
      <img src= {item.avatar} className = "dialer-item-img"/>
      <div className = "team-info">
          <label className = "item-title">{item.name}</label>
          <div className = "item-subtitle">{item.type }</div>
      </div>

      <div className = "item-icons">

         <div className = "item-icon">
             <i class="fi-rr-microphone"></i>
         </div>

         <div className = "item-icon">
              <i class="fi-rr-video-camera"></i>
         </div>
      </div>
     
    </div>
    );
     
}

export default DialerItem;