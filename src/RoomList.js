import React from 'react'

const RoomList = () => {
    return(
        <div>
            <h2>Rooms</h2>
                <ul>
                <li ><a href="#">general</a></li>
                <li><a href="#">random</a></li>
                </ul>
        </div>
    )

    const style = {
        h2: {
            fontSize: '1rem',
        },

        ul: {
            listStyle: 'none',
            marginLeft: 0,
            paddingLeft: 0,
        },
      
        liA: {
            display: 'block',
            color: 'whitesmoke',
            textDecoration: 'none',
          },
      }
}

export default RoomList