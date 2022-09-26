import React from 'react';
import './Postsection.css';
import { PetData } from '../../Data/PetData';
import { KidData } from '../../Data/KidData';
import { GenData } from '../../Data/GenData';
import PetPost from '../PetPost';
import KidPost from '../KidPost';
import GenPost from '../GenPost';
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
        {GenData.map((genpost, genid)=>{
            return <GenPost key="genPost" gendata={genpost} id={genid}/>
        })}
    </div>
    </>
  )
}

export default Postsection