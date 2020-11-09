import './App.css';
import React from 'react'
import AllEmails from './AllEmails'
import EmailFilter from './EmailFilter'

const emailsAPI = 'http://localhost:3001/emails'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emails: [],
      currentEmail: []
    }
  }
  async componentDidMount() {
    await this.getData();
  }

  async getData() {
    const response = await fetch(emailsAPI)
    const json = await response.json()
    this.setState({emails: json})
  }
  

  viewMessage = (e) => {
    let selectedEmail = e.target.value
    if(selectedEmail === 'Display All'){
      this.setState({currentEmail: this.state.emails})
    }
    else{
      let filteredEmail = this.state.emails.filter((email) => email.subject === selectedEmail)
      this.setState({emails: filteredEmail})
    }
  }

  render() {
    return (
      <div>
        <EmailFilter emails={this.state.emails} onSelectMessage={this.viewMessage} />
        <AllEmails emails={this.state.emails} />
      </div>
    )
  }
}

export default App;
