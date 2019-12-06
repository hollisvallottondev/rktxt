import React, { Component } from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './apollo';
import Home from './containers/Home';
import NoteModal from './components/NoteModal';
import Portal from './components/Portal'; 

class App extends Component {
  constructor() {
    super();
    this.state = { showModal: true }
  }

  toggleShowModal = () => {
    console.log('Toggle'); 
    this.setState({ ...this.state, showModal: !this.state.showModal });
  }

  render() {
    const { showModal } = this.state;
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header" />
          <Home toggleShowModal={this.toggleShowModal} />
          <Portal>
            {
              showModal && <NoteModal toggleShowModal={this.toggleShowModal} />
            }
          </Portal>
        </div>

      </ ApolloProvider>
    );
  }

}

export default App;
