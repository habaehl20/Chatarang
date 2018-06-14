import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const RoomList = (props) => {
  return (
    <nav
      className={`RoomList ${css(styles.nav)}`}
    >
      <h2 className={css(styles.h2)}>Rooms</h2>
      <ul className={css(styles.list)}>
          {props.rooms.map( room =>    
        <li className={css(styles.item)}>
          <a href="#" onClick={ () => props.changeRoom(room)} className={css(styles.link)} >{room}</a>
        </li>)}
      </ul>
      <button className={css(styles.button)}>Add Room</button>
    </nav>
  )
}

const styles = StyleSheet.create({
  nav: {
    padding: '0 1rem',
  },

  h2: {
    fontSize: '1rem',
  },

  list: {
    listStyle: 'none',
    marginLeft: 0,
    paddingLeft: 0,
  },

  item: {
    marginBottom: '0.5rem',
  },

  link: {
    display: 'block',
    color: 'whitesmoke',
    textDecoration: 'none',

    '::before': {
      content: '"# "',
    },

    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  },
  button: {
    backgroundColor: 'rgb(26, 143, 227)',
    color: 'white',
    borderRadius: '10px',

    ':hover': {
        backgroundColor: 'rgba(26, 143, 227, 0.4)',
        cursor: 'pointer',
      },
    },
})

export default RoomList