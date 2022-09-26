import React from 'react';
import '../styles/posts.css';
import { AiTwotoneHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { FaGlobeAmericas } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { useState } from 'react';


const PetPost = ({petdata}) => {

  // Add "view more" option to description and identity marks

  let windowWidth = window.innerWidth; //get size of screen

  // length of strin (no.of characters of desc, identity marks)
  var limitdesc = 150; 
  var limitidentity = 70;
  if (windowWidth < 500){
    limitdesc = 70;
    limitidentity = 30;
  }
  else if (windowWidth < 750){
    limitdesc = 100;
    limitidentity = 50;
  }

  // original length of data
  let descLen = petdata.desc.length;
  let identityLen = petdata.identityMarks.length;

  // to note whether toggle is opened or not
  const [isReadMoreShownDesc, setReadMoreShownDesc] = useState(false);
  const [isReadMoreShownIdentity, setReadMoreShownIdentity] = useState(false);

  const toggledesc =(e) =>{
    e.preventDefault();
    setReadMoreShownDesc(prevState => !prevState);
  }
  const toggleIdentity =(e) =>{
    e.preventDefault();
    setReadMoreShownIdentity(prevState => !prevState);
  }



  //User Found or Lost Notification
  let LFNstyle = {};
  if (petdata.issue == 'lost') {
    LFNstyle={color:'rgb(249, 27, 31)'};
  }else if (petdata.issue == 'found'){
    LFNstyle={color:'rgb(27, 249, 108)'};
  }

  // Support button (Like)
  let Supportstyle = {};
  if (petdata.Supported) {
    Supportstyle={color: 'rgb(0, 183, 255)'};
  }else if (!petdata.Supported){
    Supportstyle={color: 'rgb(169, 209, 255)'};
  }

  const Support =(e) => {
    e.preventDefault();

  }


  return (
    <>
    <div className="Post">

        <div className="postTop">
          <img src={petdata.userpic} alt="" className="userpic" />
          <h3 className="usernameTop">{petdata.username}</h3>
          <HiSpeakerphone className='foundOrLostNotify' id='foundOrLostNotify' style={LFNstyle}/>
        </div>

        <img className='postimg' src={petdata.img} alt="" />


        <div className="postReact">
            <div className="supliconcol"><AiTwotoneHeart className='supportbtn' name='support' onClick={Support} style={Supportstyle} />
            <label htmlFor="support" className='supportCount'>{petdata.supports}</label></div>
            <BiCommentDetail className='comment reactbtn' />
            <FiSend className='share reactbtn' />
            <div className="placeiconcol"><FaGlobeAmericas className='placeicon reactbtn' name='place' />
            <label htmlFor="place" className='place'>{petdata.place}</label></div>
        </div>


        <div className="detail">
            <div className="desccol datacol"><span className="username" name='username'>{petdata.username} </span>
            <div className='descdataWithBtn'><label htmlFor='username' className="desc labeldata" id='desc'>{isReadMoreShownDesc ? petdata.desc : petdata.desc.substr(0, limitdesc) + "....."}</label>
            <button id='viewMoreDescpet' className='viewMore' onClick={toggledesc} >{descLen > limitdesc ? (isReadMoreShownDesc ? "View less" : "....View more") : ''}</button></div></div>
            <div className="breedcol datacol"><span className="breed datatitle" name='breed'>Breed: </span>
            <label htmlFor='breed' className="breeddata labeldata">{petdata.breed}</label></div>
            <div className="agecol datacol"><span className="age datatitle" name='age'>Age: </span>
            <label htmlFor='age' className="agedata labeldata">{petdata.age} yrs</label></div>
            <div className="colorcol datacol"><span className="color datatitle" name='color'>Color: </span>
            <label htmlFor='color' className="colordata labeldata">{petdata.color}</label></div>
            <div className="idcol datacol"><span className="identity datatitle" name='identity'>IdentityMarks: </span>
            <div className='identitydataWithBtn'><label htmlFor='identity' className="identitydata labeldata">{isReadMoreShownIdentity ? petdata.identityMarks : petdata.identityMarks.substr(0,limitidentity) + "....."}</label>
            <button id='viewMoreIdentitypet' className='viewMore' onClick={toggleIdentity} >{identityLen > limitidentity ? (isReadMoreShownIdentity ? "View less" : "....View more") : ''}</button></div></div>
        </div>
    </div>
    </>
  )
}

export default PetPost