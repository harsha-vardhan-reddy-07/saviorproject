import React, { useState } from 'react';
import '../styles/posts.css';
import { AiTwotoneHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { FaGlobeAmericas } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";


const KidPost = ({kiddata}) => {

  let descLen = kiddata.desc.length;
  let identityLen = kiddata.identityMarks.length;

  let windowWidth = window.innerWidth;

  const [isReadMoreShownDesc, setReadMoreShownDesc] = useState(false);
  const [isReadMoreShownIdentity, setReadMoreShownIdentity] = useState(false);







  const descViewMore =() =>{


  }

  const identityViewMore =() =>{


  }

  const descViewLess =() =>{


  }

  const identityViewLess =() =>{


  }


  return (
    <>
    <div className="Post">

        <div className="postTop">
          <img src={kiddata.userpic} alt="" className="userpic" />
          <h3 className="usernameTop">{kiddata.username}</h3>
          <HiSpeakerphone className='foundOrLostNotify'/>
        </div>

        <img className='postimg' src={kiddata.img} alt="" />


        <div className="postReact">
            <div className="supliconcol"><AiTwotoneHeart className='support reactbtn' name='support' />
            <label htmlFor="support" className='supportCount'>{kiddata.supports}</label></div>
            <BiCommentDetail className='comment reactbtn' />
            <FiSend className='share reactbtn' />
            <div className="placeiconcol"><FaGlobeAmericas className='placeicon reactbtn' name='place' />
            <label htmlFor="place" className='place'>{kiddata.place}</label></div>
        </div>


        <div className="detail">
            <div className="desccol datacol"><span className="username" name='username'>{kiddata.username} </span>
            <div className='descdataWithBtn'><label htmlFor='username' className="desc labeldata" id='desc'>{kiddata.desc}</label>
            <button id='viewMore' onClick={toggle} >view more</button>
            <button id='viewLess' onClick={descViewLess} >view less</button></div></div>
            <div className="namecol datacol"><span className="name datatitle" name='name'>Name: </span>
            <label htmlFor='name' className="breeddata labeldata">{kiddata.name}</label></div>
            <div className="agecol datacol"><span className="age datatitle" name='age'>Age: </span>
            <label htmlFor='age' className="agedata labeldata">{kiddata.age} yrs</label></div>
            <div className="heightcol datacol"><span className="height datatitle" name='height'>Height: </span>
            <label htmlFor='height' className="heightdata labeldata">{kiddata.height} cm</label></div>
            <div className="idcol datacol"><span className="identity datatitle" name='identity'>IdentityMarks: </span>
            <div className='identitydataWithBtn'><label htmlFor='identity' className="identitydata labeldata">{kiddata.identityMarks}</label>
            <button id='viewMore' onClick={identityViewMore} >view more</button>
            <button id='viewLess' onClick={identityViewLess} >view less</button></div></div>
        </div>
    </div>
    </>
  )

}

export default KidPost