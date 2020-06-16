import React from 'react';

export default function FaceRecognition({ imageUrl }) {
    return (
        <div className='center ma'>
            <div>
                <img src={imageUrl} alt="" width='500px' height= 'auto'/>
            </div>
        </div>
    )
}
