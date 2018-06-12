import React from 'react'

class Sidebar = (props) => {
    render() {
        return(
            <div className='Sidebar'>
                <aside className="Sidebar">
      <div className="UserInfo">
        <div
          className="Avatar"
          style="background: url(https://api.adorable.io/avatars/32/davey@getfretless.com)"
        ></div>
        <div className="user">{props.user.userName}</div>
        <a href="#">
          <i className="fas fa-sign-out-alt"></i>
        </a>
      </div>
      <h1>XTBC 18</h1>
      <nav className="RoomList">
        <h2>Rooms</h2>
        <ul>
          <li><a href="#">general</a></li>
          <li><a href="#">random</a></li>
        </ul>
      </nav>
    </aside>
            </div>
        )

    }
//CORRECT THE STYLING FOR THE SIDEBAR
    cosnt styles = {
        sidebar:{
            backgroundColor: "#333344"
            color: rgba(255, 255, 255, 0.8),
        }

        children:{
            padding: '0 1rem',
        }

        h1: {
            color: 'white',
            fontSize: '1.2rem',
            
        }
    }
        
}

export default Sidebar