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
        {PetData.map((post, id)=>{
            return <PetPost data={post} id={id}/>
        })}
        {KidData.map((post, id)=>{
            return <KidPost data={post} id={id}/>
        })}
    </div>
    </>
  )
}

export default Postsection