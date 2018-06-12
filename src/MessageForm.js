import React from 'react'

const MessageForm = (props) =>{
    const handleSubmit = (ev)
    return(
        <form className='MessageForm'
        onSubmit={props.addMessage}>
            <input type='text' 
            name='body' 
            placeholder='Type a message.....'  
            />

            <button type='submit'> Send </button>
        </form>
    )
}

export default MessageForm