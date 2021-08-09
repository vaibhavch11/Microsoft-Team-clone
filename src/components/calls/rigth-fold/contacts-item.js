import React from "react";
import "./contacts-item.css";

function ContactsItem({item,isActive}){
   return (
       <div className = "contact-card">
          
           <div className = "contact-top">
              <img className = "contact-avatar" src = {item.icon}/>
                  <div className = "contact-info">
                      <label className = "contact-title">{item.name}</label>
                      <label className = "contact-subtitle">{item.type}</label>
                  </div>
               
           </div>


           <div className = "contact-icons">
               <div className ="contact-icon" >
                    <i class="fi-rr-microphone"></i>
               </div>

               <div className ="contact-icon" >
                   <i class="fi-rr-video-camera"></i>
               </div>

               <div className ="contact-icon" >
                    <i class="fi-rr-menu-dots"></i>
               </div>

           </div>



       </div>
   );
}

export default ContactsItem;