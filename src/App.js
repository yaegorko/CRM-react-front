import React, {Component} from 'react';
import './App.css';
import ClientTable from './ClientTable/clientTable'

class App extends Component {
    render() {
        return (
            <div className="App">
                <ClientTable/>
            </div>
        );
    }
}

export default App;
