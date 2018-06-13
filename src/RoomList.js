import React from 'react'

const RoomList = () => {
    return(
        <nav className="RoomList" >

            <h2 style={styles.h2}>Rooms</h2>
                <ul style={styles.ul}>
                <li ><a href="#">general</a></li>
                <li><a href="#">random</a></li>
                </ul>
        </nav>
    )
}
    const styles = {
        h2: {
            fontSize: '1rem',
        },

        ul: {
            listStyle: 'none',
            marginLeft: 0,
            paddingLeft: 0,
      },
    }

export default RoomList