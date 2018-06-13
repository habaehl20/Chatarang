import React from 'react'

const ChatHeader = () => {
  return (
    <div className="ChatHeader" style={styles.chatheader}>
      <div className="roomInfo">
        <h2>#general</h2>
        <p>Announcements and general chat</p>
      </div>
    </div>
  )
}

const styles = {
    chatHeader: {
        backgroundColor: '#f3f3f3',
        borderBottom: '1px solid #ccc',
        height: '3rem',
        padding: '0 1rem',
        display: 'flex',
        alignItems: 'center',
    },
  }


export default ChatHeader