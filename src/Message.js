import React from 'react'

const Message = (props) => {

  return (

    <div className="Message" style={styles.message}>
      {props.message.userName}: {props.message.body}
    </div>
  )
}

const  styles = {
message: {
    display: 'flex',
    marginTop: '1rem',
    padding: '0 1rem',
  },
  
// details: {
//     flex: 1;
//     padding-left: 0.5rem;
//   },
}
export default Message