import React from 'react';
import axios from 'axios';
import ClientCard from "../ClientTable/ClientCard/clientCard";

export default class UserList extends React.Component {
    state = {
        data: []
    };

    componentDidMount(id) {
        axios.get('http://localhost:9998/rest/client/' + id)
            .then(data => this.setState(data));
    };

    render() {
        return <div>
            {this.state.data.map(user => <ClientCard user={user}/>)}
        </div>;
    }
};

