import React from 'react'
import './BookCard.css'
import {Rate} from 'antd'

const BookCard =({title , author ,image ,rating,voters ,description}) =>{

return(
        <div className='BookCardContainer'>
            <div className='BookImage'><img src={image} width="140" height="220" alt="book-img"/></div>
            <div className='BookContent'>
                <div className="Book-title">{title}</div>
                <div className="Book-author">{`By ${author}`}</div>
                <div className="Rating-container">
                    <div className="Book-rating"><Rate style={{fontSize:12}} disbled value={rating}/></div>
                    <div className="Book-voters">{`${voters} voters`}</div>
                </div>
                <div className="Book-description">{description}</div>

            </div>
        </div>


)



}
export default BookCard