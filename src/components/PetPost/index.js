import React from 'react';
import '../styles/posts.css';
import { AiTwotoneHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { FaGlobeAmericas } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";


const PetPost = ({petdata}) => {
  return (
    <>
    <div className="Post">

        <div className="postTop">
          <img src={petdata.userpic} alt="" className="userpic" />
          <h3 className="usernameTop">{petdata.username}</h3>
          <HiSpeakerphone className='foundOrLostNotify'/>
        </div>

        <img className='postimg' src={petdata.img} alt="" />


        <div className="postReact">
            <div className="supliconcol"><AiTwotoneHeart className='support2 reactbtn' name='support' />
            <label htmlFor="support" className='supportCount'>{petdata.supports}</label></div>
            <BiCommentDetail className='comment reactbtn' />
            <FiSend className='share reactbtn' />
            <div className="placeiconcol"><FaGlobeAmericas className='placeicon reactbtn' name='place' />
            <label htmlFor="place" className='place'>{petdata.place}</label></div>
        </div>


        <div className="detail">
            <div className="desccol datacol"><span className="username" name='username'>{petdata.username} </span>
            <label htmlFor='username' className="desc labeldata">{petdata.desc}</label></div>
            <div className="breedcol datacol"><span className="breed datatitle" name='breed'>Breed: </span>
            <label htmlFor='breed' className="breeddata labeldata">{petdata.breed}</label></div>
            <div className="agecol datacol"><span className="age datatitle" name='age'>Age: </span>
            <label htmlFor='age' className="agedata labeldata">{petdata.age} yrs</label></div>
            <div className="colorcol datacol"><span className="color datatitle" name='color'>Color: </span>
            <label htmlFor='color' className="colordata labeldata">{petdata.color}</label></div>
            <div className="idcol datacol"><span className="identity datatitle" name='identity'>IdentityMarks: </span>
            <label htmlFor='identity' className="identitydata labeldata">{petdata.identityMarks}</label></div>
        </div>
    </div>
    </>
  )
}

export default PetPost