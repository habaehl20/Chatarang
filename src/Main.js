import React, { Component } from 'react'

import './App'
import Main from './Main'
import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component {
    render() {
        return(
            <div className='App' style={styles}>
                <Sidebar />  
                <Chat />           

            </div>
        )

    }
        
const styles = {
display: 'flex',
alignItems: 'stretch',
height: '100vh',
}

}

export default Main