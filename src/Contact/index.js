import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const columns = [{
  dataField: 'id',
  text: 'ID'
}, {
  dataField: 'idUser',
  text: 'Id User'
}, {
    dataField: 'tenNV',
    text: 'User Name'
}, {
  dataField: 'type',
  text: 'Type'
}, {
    dataField: 'sales',
    text: 'Sales'
}];

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state ={
            products: []
        }
    }

    onChange(field, value) {
        this.setState({[field]: value})
    }

    loadData() {
        let thiz = this
        axios.get(`http://localhost:8080/api/quantities/${this.state.email}`)
        .then(function (response) {
            thiz.setState({
                products: response.data
            })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    render() {
        return (
            <div>
            <h2>View data</h2>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" value={this.state.email} onChange={e => this.onChange('email', e.target.value)} />
                </FormGroup>
            </Form>

            <Button color="primary" size="sm" onClick={() => this.loadData()}>View Data</Button>
            <BootstrapTable keyField='id' data={ this.state.products } columns={ columns } />
            </div>
        );
    }
}

export default Contact;