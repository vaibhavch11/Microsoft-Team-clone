import React from "react";
import { contactData } from "../../../data/right-fold";
import ContactsItem from "./contacts-item";
import "./right-fold.css";



function RightFold(){

    const contacts = contactData;
    return (<div className = "right-fold">
    <div className = "right-fold-heading">Contacts</div>
    

    <div className="right-fold-search-add">
          <div className = "right-fold-input">
          <i class="fi-rr-search"></i>
               <input  placeholder = "Find a contact" type = "text"/>
          </div>

          <div className = "right-fold-button">
               
                <button className="rightFold-button" type="submit"><i class="fi-rr-user-add"></i> Add Contacts</button>
          </div>
        
        
    </div>

        <div className = "right-fold-contacts">

        {contacts.map((item)=>{
            return  <ContactsItem item={item}/>;
        }
        )}
             
        </div>

    </div>
    );
}

export default RightFold;
