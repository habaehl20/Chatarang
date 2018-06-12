import React from 'react'
import Message from 'message'

const MessageList = () => {

    const messages = [
        { id:1, username: 'dstrus', body: 'Chating up a storm dude' }
        { id:2, username: 'dpalazzo', body: 'Another made up message'},
    ]

    return(
        <div className='MessageList'>
            { message.map(msg => <message <Message key={mesg.id} message={msg} />)
                
        </div>
    )
}

export default MessageList