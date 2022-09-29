import React, { useState } from 'react';
import '../styles/posts.css';
import { AiTwotoneHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { FaGlobeAmericas } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";


const KidPost = ({kiddata, commentToggle}) => {

  // Add "view more" option to description and identity marks

  let windowWidth = window.innerWidth;//get size of screen

  // length of strin (no.of characters of desc, identity marks)
  var limitdesc = 130;
  var limitidentity = 70;

  if (windowWidth < 500){
    limitdesc = 60;
    limitidentity = 25;
  }
  else if (windowWidth < 750){
    limitdesc = 90;
    limitidentity = 40;
  }

  // original length of data
  let descLen = kiddata.desc.length;
  let identityLen = kiddata.identityMarks.length;

  // to note whether toggle is opened or not  
  const [isReadMoreShownDesc, setReadMoreShownDesc] = useState(false);
  const [isReadMoreShownIdentity, setReadMoreShownIdentity] = useState(false);

  const toggleIdentity =(e) =>{
    e.preventDefault();
    setReadMoreShownIdentity(prevState => !prevState);
  }

  const toggledesc =(e) =>{
    e.preventDefault();
    setReadMoreShownDesc(prevState => !prevState);
  }


  // //User Found or Lost Notification
  let LFNstyle = {};
  if (kiddata.issue === 'lost') {
    LFNstyle={color:'rgb(249, 27, 31)'};
  }else if (kiddata.issue === 'found'){
    LFNstyle={color:'rgb(27, 249, 108)'};
  }


  // Support button (Like)

  const Support =(e) => {
    e.preventDefault();
    
  }

  
  let Supportstyle = {};
  if (kiddata.supported) {
    Supportstyle={color: 'rgb(18, 180, 249)'};
  }else if (!kiddata.supported){
    Supportstyle={color: 'rgb(185, 215, 249)'};
  }

  


  return (
    <>
    <div className="Post">

        <div className="postTop">
          <img src={kiddata.userpic} alt="" className="userpic" />
          <h3 className="usernameTop">{kiddata.username}</h3>
          <HiSpeakerphone className='foundOrLostNotify' style={LFNstyle}/>
        </div>

        <img className='postimg' src={kiddata.img} alt="" />


        <div className="postReact">
            <div className="supliconcol"><AiTwotoneHeart className='support reactbtn' name='support' onClick={Support} style={Supportstyle}/>
            <label htmlFor="support" className='supportCount'>{kiddata.supports}</label></div>
            <BiCommentDetail className='comment reactbtn' onClick={commentToggle}/>
            <FiSend className='share reactbtn' />
            <div className="placeiconcol"><FaGlobeAmericas className='placeicon reactbtn' name='place' />
            <label htmlFor="place" className='place'>{kiddata.place}</label></div>
        </div>


        <div className="detail">
            <div className="desccol datacol"><span className="username" name='username'>{kiddata.username} </span>
            <div className='descdataWithBtn'><label htmlFor='username' className="desc labeldata" id='desc'>{isReadMoreShownDesc ? kiddata.desc : kiddata.desc.substr(0, limitdesc) + "....."}</label>
            <button id='viewMoreDesc' className='viewMore' onClick={toggledesc} >{descLen > limitdesc ? (isReadMoreShownDesc ? "View less" : "View more") : '' }</button></div></div>
            <div className="namecol datacol"><span className="name datatitle" name='name'>Name: </span>
            <label htmlFor='name' className="breeddata labeldata">{kiddata.name}</label></div>
            <div className="agecol datacol"><span className="age datatitle" name='age'>Age: </span>
            <label htmlFor='age' className="agedata labeldata">{kiddata.age} yrs</label></div>
            <div className="heightcol datacol"><span className="height datatitle" name='height'>Height: </span>
            <label htmlFor='height' className="heightdata labeldata">{kiddata.height} cm</label></div>
            <div className="idcol datacol"><span className="identity datatitle" name='identity'>IdentityMarks: </span>
            <div className='identitydataWithBtn'><label htmlFor='identity' className="identitydata labeldata">{isReadMoreShownIdentity ? kiddata.identityMarks : kiddata.identityMarks.substr(0,limitidentity) + "....."}</label>
            <button id='viewMoreIdentity' className='viewMore' onClick={toggleIdentity} >{identityLen > limitidentity ? (isReadMoreShownIdentity ? "View less" : "View more") : ''}</button></div></div>
        </div>
    </div>
    </>
  )

}

export default KidPost