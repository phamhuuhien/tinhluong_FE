import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios, { post } from 'axios';
import { withAlert } from 'react-alert'

class About extends Component {

    constructor(props) {
        super(props)
        this.state ={
            file: null
        }
    }
    onChangeFile(e) {
        this.setState({file: e.target.files[0]})
    }

    onChange(field, value) {
        this.setState({[field]: value})
    }

    fileUpload(){
        const { email, file } = this.state
        const { alert } = this.props
        const url = 'http://localhost:8080/api/quantities/upload';
        const formData = new FormData();
        formData.append('createdBy', email)
        formData.append('file', file)
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'content-type': 'multipart/form-data'
            }
        }

        post(url, formData, config).then(response => {
            console.log(response);
            alert.success("Uploading success!");
            this.setState({file: null, email: ""})
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <h2>Upload data</h2>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" value={this.state.email} onChange={e => this.onChange('email', e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">File</Label>
                        <Input type="file" name="file" id="exampleFile" onChange={e => this.onChangeFile(e)}/>
                    </FormGroup>
                </Form>
                
                <Button color="primary" size="sm" onClick={() => this.fileUpload()}>Upload</Button>
            </div>
        );
    }
}

export default withAlert()(About)