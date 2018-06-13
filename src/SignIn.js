import React, { Component } from 'react'

class SignIn extends Component {

    state ={
        email: '',
    }

    handleChange =(ev) => {
        this.setState({email: ev.target.})  //////////////////////////////
    }

    handleSubmit = () => {
        this.props.handleAuth({
            uid: '46648',
            userName: this.state.email,
            email: this.state.email,
        })
    }
    render(){
        return(
            <div className='SignIn'>
                <form>
                    <input 
                    type='email' 
                    name='email' 
                    placeHolder='Email'/
                    value={this.state.email}>
                    <button type='submit'> Sign In</button>
                </form>


        )
    }
}

export default SignIn