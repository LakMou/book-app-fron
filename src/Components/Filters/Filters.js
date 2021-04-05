import React from 'react'
import {Input} from 'antd'


const Filters =({styles}) =>{

            return(
                <div style={{...styles , background:'black'}} className='filters-container'>
                    <div className='filters-header'></div>
                    <div className='filters'>
                        <Input style={{height:50 ,marginBottom:35}}
                                placeholder='Search By Title'
                                onChange={()=>{}}/> 
                         <Input style={{height:50 ,marginBottom:35}}
                                placeholder='Search By Author'
                                onChange={()=>{}}/>         
                    </div>
                </div>

            )

}

export default Filters