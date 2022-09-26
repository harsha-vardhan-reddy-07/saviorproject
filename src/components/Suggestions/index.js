import React from 'react'
import './Suggestions.css'

import { Followers } from '../../Data/FollowersData'
const Suggestions = () => {
  return (
    <div className="FollowersCard">
        <h3>Who is following you</h3>

        {Followers.map((follower)=>{
            return(
                <div className="follower">
                    <div>
                        <img src={follower.img} alt="" className='followerImage' />
                        <div className="name">
                            <span>{follower.name}</span>
                            <span>@{follower.username}</span>
                        </div>
                    </div>
                    <button className='button fc-button'>
                        Follow
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default Suggestions