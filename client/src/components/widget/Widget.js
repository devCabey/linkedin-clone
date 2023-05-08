import { East, ExpandMore, Info } from "@mui/icons-material";
import React from "react";
import "./Widget.css";
import WidgetItem from "./widgetItem/WidgetItem";

function Widget() {
  return (
    <div className="widget_wrapper">
      <div className="widget_head">
        <div className="widget_head_title">
          <p>Add to your feed</p>
          <Info sx={{ color: "#5d5d5d", fontSize: "15px" }} />
        </div>
        {/* accounts */}
        <>
          <WidgetItem
            image="https://imageio.forbes.com/specials-images/imageserve/5f64397931669e167fc57eaf/0x0.jpg?format=jpg&width=1200"
            name="Blossom Dugabtey"
            description="|| Software Engineer || Typescript || Nodejs || Expressjs || Reactjs"
          />
          <WidgetItem
            image="https://ichef.bbci.co.uk/news/2048/cpsprodpb/B1FA/production/_113126554_patrick_george10pilston.jpg"
            name="Orison Tetteh"
            description="Software Developer | HTML | CSS | Javascript | Boostrap | Reactjs"
          />
          <WidgetItem
            image="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/yg15u7nbznugdewx7ltu"
            name="Jobly Ghana"
            description="Company . Staffing and Recruiting"
          />
          <WidgetItem
            image="https://caaas.rice.edu/sites/g/files/bxs2616/files/2019-10/tony-brown.jpg"
            name="Kofi Mensah"
            description="Software Engineering(Frontend Dev)"
          />
        </>
        <span className="widget_head_footer">
          <p>View all recommendations</p>
          <East sx={{ fontSize: "16px" }} />
        </span>
      </div>
      <div className="widget_sticky">
        <div className="widget_bottom">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D08AQEjFDHYBL1LbQ/croft-frontend-shrinkToFit1024/0/1618353108823?e=2147483647&v=beta&t=mofX44aFMJUDtS0NAyvYtLdmg7ew9BjOQFaPviUqXj8"
            alt="See who is hiring"
          />
        </div>
        <div className="widget_links">
          <ul>
            <li>About</li>
            <li>Accessiblity</li>
            <li>Help Center</li>
            <li>
              Privacy & Terms <ExpandMore />
            </li>
            <li>Ad Choices</li>
            <li>Advertising</li>
            <li>
              Business Services <ExpandMore />
            </li>
            <li>Get the Linkedin app</li>
            <li>More</li>
          </ul>
          <div className="widget_link_footer">
            <img src="./images/linkedin-alt.png" alt="linkedin-logo" />
            <p>Linkedin Coporation &copy; 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Widget;
