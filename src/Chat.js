import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './ MessageForm'

class Chat extends Component {
    constructor(){
        super()

        this.state={
            { id:1, username: 'dstrus', body: 'Chating up a storm dude' }
            { id:2, username: 'dpalazzo', body: 'Another made up message'},
        }
    }

    render() {
        return(
            <div className='Chat'>
               <ChatHeader />
               <MessasgeList  />
               < MessageForm />
            </div>
        )

    }
        
}

export default Chat