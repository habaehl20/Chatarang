import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './ MessageForm'

class Chat extends Component {
    constructor(){
        super()

        this.state={
            message: [
            { id:1, username: 'dstrus', body: 'Chating up a storm dude' },
            { id:2, username: 'dpalazzo', body: 'Another made up message'},
            ]
        }
    }



    addMessage = () => {
        const messages = [...this.state.message]
        messages.push({
            id:Date.now(),
            userName: 'Ferris',
            body: 'Pick me, Please!',
        })

        this.setState({messages})
    }

    render() {
        return(
            <div className='Chat'>
               <ChatHeader />
               <MessasgeList message={this.state.message} />
               < MessageForm addMessage={this.addMessage}/>
            </div>
        )
    }
}

export default Chat