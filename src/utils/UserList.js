import React from 'react';
import axios from 'axios';
import Table from '../ClientTable/clientTable';

export default class UserList extends React.Component {
    state = {
        data: []
    };

    componentDidMount() {
        this.userFetch();
    };

    userFetch = () => {
        axios.get('http://localhost:9998/rest/client/pagination/get?page=0')
            .then(data => this.setState(data));
    };

    render() {
        return <div>
            {this.state.data.map(user => <Table user={user}/>)}
        </div>;
    }
}

