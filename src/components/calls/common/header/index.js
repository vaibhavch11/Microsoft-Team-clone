import React from "react";
import "./header.css";

function Header(){
    return <div className= "header">

        <div className = "header-menu">
        <i class="fi-rr-layout-fluid"></i>
        </div>
        <div className = "header-leftfold">
            Microsoft Teams
        </div>
        <div className = "header-rightfold">

          <div className = "header-search">

             <i class="fi-rr-search"></i>
              <input placeholder = "Search"/>
              
          </div>

          <div className = "header-profile">

            <div className = "header-options">
               <i  class="fi-rr-menu-dots"></i>
            </div>
            <img className = "header-avatar" alt = "person" src = "https://img-premium.flaticon.com/png/128/2202/premium/2202112.png?token=exp=1626259745~hmac=45416b5f95e06089b1ffb8304bb54a8c" />
            
             
             
          </div>

        </div>
  
    </div>;
}

export default Header;
