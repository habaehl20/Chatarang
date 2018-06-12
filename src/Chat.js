import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './ MessageForm'

class Chat extends Component {


    render() {
        return(
            <div className='Chat'>
               <ChatHeader />
               <MessasgeList />
               < MessageForm />
            </div>
        )

    }
        
}

export default Chat