import React from "react";
import { SidebarBottom, SidebarData, sidebarMore } from "../../../../data/sidebar";
import SidebarOption from "./sidebar-option";
import "./sidebar.css";



function Sidebar(){


    const topOption = SidebarData;
    const more = sidebarMore;
    const bottomOption = SidebarBottom;

    return <div className = "sidebar">  
              <div className = "sidebar-top"> 

              <div>
                  {topOption.map((option)=>{
                      return (<SidebarOption option={option} 
                          isActive={option.name === "Calls" ? true : false}

                      />
                  );
                  })}
              </div>  

              </div>

              <div>
                  <SidebarOption option={more} />
              </div>

              <div className = "sidebar-bottom">  
              {bottomOption.map((option)=>{
                  return <SidebarOption option={option}/>;
              })

              }
              </div>
           </div>;
}

export default Sidebar;