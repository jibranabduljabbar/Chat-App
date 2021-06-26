import React from 'react'
import { connect } from 'react-redux'
import { get_users } from '../../store/action/'

class Chat extends React.Component{
    componentDidMount(){
        this.props.get_users()
    }
    render(){
       let user = this.props.current_user

        return(
            <div>
                <h4>Welcome! {user.name}</h4>
                <img src={user.profile} />
                <h6>Email: {user.email}</h6>
                <h4>Chat User: </h4>
                <ul>
                    {this.props.users.map((v, i) => {
                      return v.uid !== user.uid && <li key={i}> <img src={v.profile} width="20" /> {v.name} <button>Chat</button></li>
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
   current_user: state.current_user,
   users: state.users
})

const mapDispatchToProps = (dispatch) => ({
    get_users: () => dispatch(get_users())
})

export default connect(mapStateToProps, mapDispatchToProps) (Chat);