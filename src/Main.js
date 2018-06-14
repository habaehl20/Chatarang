import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'

import base from './base'

class Main extends Component {
    state = {
        rooms:[
            'general',
            'random',
        ],
        currentRoom: 'general'
    }


    changeRoom = (room) => {
        const currentRoom = room
        base.syncState(`${room}/messages`,{
            context: this,
            state: 'message',
            asArray: true,
        })
        this.setState({currentRoom : room})
    }

    addRoom = (room) => {
        const rooms = [...this.state.rooms]
        rooms.push(room)
        this.setState(rooms)
    }

  render() {
    return (
      <div className="Main" style={styles}>
        <Sidebar 
        user={this.props.user} 
        signOut={this.props.signOut} 
        rooms={this.state.rooms}
        currentRoom={this.state.currentRoom}
        changeRoom={this.changeRoom}
        addRoom={this.addRoom}
        />
        <Chat user={this.props.user} rooms={this.state.currentRoom}/>
        
      </div>
    )
  }
}

const styles = {
  display: 'flex',
  alignItems: 'stretch',
  height: '100vh',
}

export default Main