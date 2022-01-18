import React from 'react';
import { Form } from 'react-bootstrap';

class Header extends React.Component{
    render(){
        return(
            <header>
                <h1>Horned Animals Galore</h1>
                <Form>
                    <Form.Group>
                        <Form.Label>Number of Horns</Form.Label>
                        <Form.Select onChange={this.props.handleFormSubmit}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="100">4+</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </header>
        );
    }
}

export default Header;