
import "./Navbar.css";
import { BiHomeAlt } from "react-icons/bi";
import { BsChatSquareText } from "react-icons/bs";
import { CgAddR } from "react-icons/cg";
import { TbNotification } from "react-icons/tb";
import Profile from "../../img/profileImg.jpg";


const Navbar = () => {
  
  return (
    <div className="Navbar">
      <div className="navIcons">
        <BiHomeAlt className="homebtn btns" />
        <BsChatSquareText  className="chatbtn btns" />
        <CgAddR className="createPostbtn btns" />
        <TbNotification className="Notifybtn btns" />
        <img className="profile" src={Profile} alt="" />
      </div>

     

  
      
    </div>
  );
};

export default Navbar;
