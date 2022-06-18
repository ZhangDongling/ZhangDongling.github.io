import React, {Component} from 'react'

class Form extends Component {
  initialState = {
    name: '',
    role: '',
  }

  state = this.initialState

  handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
        [name]:value,
    })
  }

  submitForm = () => {
    if (this.state.name.length > 0 && this.state.role.length > 0) {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    
  }

  render() {
    const {name, role} = this.state;
    return (
        <form>
            <label htmlFor="name">Name</label>
            <input 
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={this.handleChange}
            />
            <label htmlFor="role">Role</label>
            <input 
                type="text"
                name="role"
                id="role"
                value={role}
                onChange={this.handleChange}
            />
            <input 
                type="button"
                value="Submit"
                onClick={this.submitForm}
            />
        </form>
    );
  }
}

export default Form;