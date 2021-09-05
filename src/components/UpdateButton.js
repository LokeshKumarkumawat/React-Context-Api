import React from 'react'
import { CommonContext } from './CommonContext'

export const UpdateButton = () => {
    return (

        <CommonContext.Consumer >

            {
                ({ updateColor }) => (

                    <div>

                        <button onClick={() => updateColor('yellow')}  >UpdateColor</button>
                        <button onClick={() => updateColor('blue')}  >UpdateColor</button>


                    </div>

                )
            }

        </CommonContext.Consumer>
    )
}
