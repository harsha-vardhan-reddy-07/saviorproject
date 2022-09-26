import React from 'react'
import './Postsection.css'
import { PetData } from '../../Data/PetData'
import { KidData } from '../../Data/KidData'
import PetPost from '../PetPost'
import KidPost from '../KidPost'
const Postsection = () => {
  return (
    <>
    
    
    <div className="Postsection">
        {PetData.map((petpost, petid)=>{
            return <PetPost key="petPost" petdata={petpost} id={petid}/>
        })}
        {KidData.map((kidpost, kidid)=>{
            return <KidPost key="kidPost" kiddata={kidpost} id={kidid}/>
        })}
    </div>
    </>
  )
}

export default Postsection