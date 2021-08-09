import React from "react";
import { callsMenu, DialerList} from "../../../data/calls";
import DialerItem from "./dialer-item";
import MenuItem from "./menu-item.js";
import "./left-fold.css";

function LeftFold(){
    const menu = callsMenu;
    const dialerlist = DialerList;
   
    return <div className = "leftFold">
              <div className = "leftFold-menu">
                <label className = "menu-label">Calls</label>
                <div>
                    {menu.map((item)=>{
                        return <MenuItem item={item}/>
                    }
                    )}
                </div>

            </div>    
                <div className = "leftFold-dailer">
                   <label className = "dialerlabel">Make a Call</label>

                    <div className = "dialer-search">
                       <input type = "text" placeholder= "type a name" contentEditable="true" />
                    
                    </div>


                   <div className = "dialer-suggested">

                        <label className= "dialer-suggestion">Suggested</label>
                         <div className = "suggested-list">
                             {dialerlist.map((item)=>{
                                return <DialerItem item={item}/>
                             })}
                           </div>

                   </div>
                   


                    <div className = "dialer-bottom">
                        <div className = "dialer-bottom-icon">
                           <i class="fi-rr-microphone"></i>
                        </div>
                        <div className = "dialer-bottom-icon">
                            <i class="fi-rr-video-camera"></i>
                        </div>
                    </div>
                </div>
            
        </div>;
}

export default LeftFold;
