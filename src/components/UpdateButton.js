import React from 'react'
import { CommonContext } from './CommonContext'

export const UpdateButton = () => {
    return (

        <CommonContext.Consumer >
        
        {
            ({updateColor}) =>(
                <button  onClick={()=>updateColor()}  >UpdateColor</button>
            )
        }

      </CommonContext.Consumer>
    )
}
