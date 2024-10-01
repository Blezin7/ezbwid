import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, fugit? Hic in velit provident voluptatibus 
                eligendi, esse autem nulla sit id iste quis quasi! Error laudantium aliquid ipsa nulla odio.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quo quidem minus ad a illo. Molestias, corporis
                 libero. Voluptates nobis et omnis ea eligendi numquam blanditiis dignissimos, totam quam temporibus!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores rem asperiores quis fuga adipisci eveniet
                 corrupti perspiciatis debitis officia quibusdam, voluptatem placeat, labore repellendus magnam temporibus! Molestiae, esse voluptatibus!
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox