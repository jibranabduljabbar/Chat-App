import React from 'react'
import './style.css'
import { connect } from 'react-redux';
import { facebooklogin } from '../../store/action'

class Home extends React.Component{
    render(){
        console.log("Userss =>>> ", this.props)
        return(
            <div>
<h1>Home</h1>
{/* <button onClick={() => this.props.set_Data(User)}>Set Data</button> */}
<button onClick={() => this.props.facebooklogin(this.props.history)}>Facebook Login</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
   users: state.users
})

const mapDispatchToProps = (dispatch) => ({
    // set_Data: (data) => dispatch(set_data(data)),
    facebooklogin: (history) => dispatch(facebooklogin(history)),
})

export default connect(mapStateToProps, mapDispatchToProps) (Home);