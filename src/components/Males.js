import React from 'react'
import ".././styles/Males.css";

export const Males = ({data}) => {

    {return data.length > 0  ?  
      
      data.map(e => {
        return(
          <div className='meals' key={e.id}>
              <div className='card'>
                  <img src={e.img}/>
                  <div className='info'>
                    <div className='name'>{e.name}</div>
                    <div className='dis'>{e.dis}</div>
                  </div>
              </div>
          </div>
        )
      })
      
      : <div className='card'><h1>No Data Exist</h1></div>}


}
