import React, { FC, useState } from 'react'

import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import { LanguageArr } from 'src/skills/arr';
import { language } from '../skills/arr';
interface IProps {}

/**
* @author
* @function @Languages
**/

export const Languages:FC<IProps> = (props) => {
  return (
    <div className="language">
      <div className="title">
          Languages
      </div>
        {
            LanguageArr.map((el:language)=>{
               
                    return <div key={el.name} className="language__wraper">
                       <div className="languages__title">
                       {el.name}
                       </div>
                        <CircularProgressbar className="circule" text={`${el.percent}%`}value={el.percent}/>
                    </div>
            })
        }
        
    </div>
   )
 }
