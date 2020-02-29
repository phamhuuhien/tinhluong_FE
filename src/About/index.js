import React, { Component } from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import axios, { post } from 'axios';

class About extends Component {

    constructor(props) {
        super(props)
        this.state ={
            file: null
        }
    }
    onChange(e) {
        this.setState({file: e.target.files[0]})
    }

    fileUpload(){
        const { file } = this.state
        const url = 'http://localhost:8080/api/books/upload';
        const formData = new FormData();
        formData.append('file', file)
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'content-type': 'multipart/form-data'
            }
        }

        post(url, formData, config).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

        this.setState({file: null})
        this.fileInput.value = "";
    }

    render() {
        return (
            <div>
                <h2>About</h2>
                <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <Input type="file" name="file" id="exampleFile" ref={ref=> this.fileInput = ref} onChange={e => this.onChange(e)}/>
                </FormGroup>
                <Button color="primary" size="sm" onClick={() => this.fileUpload()}>Upload</Button>
            </div>
        );
    }
}

export default About;