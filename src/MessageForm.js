import React from 'react'


//continue to make this into a class with the 
class MessageForm extends Component =>{
    state = {
        body: '',
    }

    handleChange = (ev) => {
        ev.preventDefault()
        
    }

    }
    handleSubmit: (ev)
    return(
        <form className='MessageForm'
        onSubmit={props.addMessage}>
            <input type='text' 
            name='body' 
            placeholder='Type a message.....'  
            value={this.state.body}
            onChange={this.handleChange}
            />

            <button type='submit'> Send </button>
        </form>
    )
 
}

export default MessageForm