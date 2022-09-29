import React, { useState } from 'react';
import '../styles/posts.css';
import { AiTwotoneHeart, AiOutlineLink } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { FaGlobeAmericas } from "react-icons/fa";

const GenPost = ({gendata, commentToggle}) => {

    // Add "view more" option to description and identity marks

  let windowWidth = window.innerWidth;//get size of screen

  // length of strin (no.of characters of desc, identity marks)
  var limitdesc = 220;

  if (windowWidth < 500){
    limitdesc = 120;
  }
  else if (windowWidth < 750){
    limitdesc = 170;
  }

  // original length of data
  let descLen = gendata.desc.length;

  // to note whether toggle is opened or not  
  const [isReadMoreShownDesc, setReadMoreShownDesc] = useState(false);

  const toggledesc =(e) =>{
    e.preventDefault();
    setReadMoreShownDesc(prevState => !prevState);
  }


  // Support button (Like)
  let Supportstyle = {};
  if (gendata.supported) {
    Supportstyle={color: 'rgb(18, 180, 249)'};
  }else if (!gendata.supported){
    Supportstyle={color: 'rgb(185, 215, 249)'};
  }

  const Support =(e) => {
    e.preventDefault();

  }

  //link icon
  let descLink = gendata.link;
  let iconStyle = {};
  if(descLink === ''){
    iconStyle = {display: 'none'}
  }
  else{
    iconStyle = {color: '#26b7f5'};
  }





  return (
    <>
        <div className="Post">

<div className="postTop">
  <img src={gendata.userpic} alt="" className="userpic" />
  <h3 className="usernameTop">{gendata.username}</h3>
</div>

<img className='postimg' src={gendata.img} alt="" />


<div className="postReact">
    <div className="supliconcol"><AiTwotoneHeart className='support supportbtn' name='support' onClick={Support} style={Supportstyle}/>
    <label htmlFor="support" className='supportCount'>{gendata.supports}</label></div>
    <BiCommentDetail className='comment reactbtn' onClick={commentToggle}/>
    <FiSend className='share reactbtn' />
    <div className="placeiconcol"><FaGlobeAmericas className='placeicon reactbtn' name='place' />
    <label htmlFor="place" className='place'>{gendata.place}</label></div>
</div>


<div className="detail">
    <div className="desccol datacol"><span className="username" name='username'>{gendata.username} </span>
    <div className='descdataWithBtn'><label htmlFor='username' className="desc labeldata" id='desc'>{isReadMoreShownDesc ? gendata.desc : gendata.desc.substr(0, limitdesc) + "....."}</label>
    <button id='viewMoreDesc' className='viewMore' onClick={toggledesc} >{descLen > limitdesc ? (isReadMoreShownDesc ? "View less" : "View more") : '' }</button></div></div>
    <div className="genpost-linkdiv" ><AiOutlineLink name='linkIcon' style={iconStyle} />
    <label htmlFor='linkIcon'><a href={descLink} target='_blank' rel="noreferrer" className='genPostLink'>{gendata.link}</a></label></div>
    
    
</div>
</div>
    </>
  )
}

export default GenPost