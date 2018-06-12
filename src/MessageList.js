import React from 'react'

const MessageList = () => {


    const messages = [
        { id:1, username: 'dstrus', body: 'Chating up a storm dude' }
        { id:2, username: 'dpalazzo', body: 'Another made up message'},
    ]

    return(
        <div className='MessageList'>
            { message.map(message => 
                <div key={message.id}>
                     {message.username} {message.body}
                </div>)}
        </div>
    )
}

export default MessageList