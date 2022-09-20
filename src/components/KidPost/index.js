import React from 'react'
import './style.css'
import { AiTwotoneHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { FaGlobeAmericas } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";


const KidPost = ({data}) => {
  return (
    <>
    <div className="Post">

        <div className="postTop">
          <img src={data.userpic} alt="" className="userpic" />
          <h3 className="usernameTop">{data.username}</h3>
          <HiSpeakerphone className='issue1'/>
        </div>

        <img className='postimg' src={data.img} alt="" />


        <div className="postReact">
            <div className="supliconcol"><AiTwotoneHeart className='support reactbtn' name='support' />
            <label htmlFor="support" className='supportCount'>{data.supports}</label></div>
            <BiCommentDetail className='comment reactbtn' />
            <FiSend className='share reactbtn' />
            <div className="placeiconcol"><FaGlobeAmericas className='placeicon reactbtn' name='place' />
            <label htmlFor="place" className='place'>{data.place}</label></div>
        </div>


        <div className="detail">
            <div className="desccol"><span className="username" name='username'>{data.username} </span>
            <label htmlFor='username' className="desc labeldata">{data.desc}</label></div>
            <div className="namecol"><span className="name datatitle" name='name'>Name: </span>
            <label htmlFor='name' className="breeddata labeldata">{data.name}</label></div>
            <div className="agecol"><span className="age datatitle" name='age'>Age: </span>
            <label htmlFor='age' className="agedata labeldata">{data.age} yrs</label></div>
            <div className="heightcol"><span className="height datatitle" name='height'>Height: </span>
            <label htmlFor='height' className="heightdata labeldata">{data.height} cm</label></div>
            <div className="idcol"><span className="identity datatitle" name='identity'>IdentityMarks: </span>
            <label htmlFor='identity' className="identitydata labeldata">{data.identityMarks}</label></div>
        </div>
    </div>
    </>
  )
}

export default KidPost