import React from 'react'

class Sidebar = (props) => {
    render() {
        return(
            <div className='Sidebar'>
                {props.user.userName}
            </div>
        )

    }
        
}

export default Sidebar