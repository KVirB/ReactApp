import React, {Component} from 'react';
import { connect } from 'react-redux';
import { add_user } from '../../redux/Actions/index';
class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            id: 2,
            firstname: '',
            lastname: '',
            email: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        this.props.handleSubmit(this.state);
        const { firstname, lastname, email } = this.state;
        event.preventDefault();
        this.props.add_user(firstname, lastname, email);
    }
    onClickUp = () => {
        this.setState((prevState) => {
            return {
                id: prevState.id + 1,
            }
        })
    };

    render() {
        const { firstname, lastname, email } = this.state; 

        return (
            
            <form onSubmit={this.onFormSubmit}>
                
                <div class="block"><label for="firstname">FirstName</label>
                <input
                    type="text" 
                    name="firstname" 
                    id="firstname"
                    value={firstname} 
                    onChange={this.handleChange} />
                </div>

                <div class="block"><label for="lastname">LastName</label>
                <input 
                    type="text" 
                    name="lastname" 
                    id="lastname"
                    value={lastname} 
                    onChange={this.handleChange} />
                </div>

                

                <div class="block">
                <label for="email">Email</label>
                <input 
                    type="text" 
                    name="email" 
                    id="email"
                    value={email} 
                    onChange={this.handleChange} />
                </div >
                
                <div class="block1">
                <button type="submit">
                    Add User
                </button>
                </div>
                
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add_user: (firstname, lastname, email) => dispatch(add_user(firstname, lastname, email))
    }
}
export default connect(null, mapDispatchToProps)(Form);