import React from 'react'
import { CommonContext } from './CommonContext'

export const UpdateButton = () => {
    return (

        <CommonContext.Consumer >
        
        {
            ({color}) =>(
                <button>UpdateColor</button>
            )
        }

      </CommonContext.Consumer>
    )
}
