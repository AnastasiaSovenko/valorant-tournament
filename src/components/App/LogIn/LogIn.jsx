import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './LogIn.css';

const LogSignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateForm = () => {
        return email.length > 0 && password.length > 0;
      }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

     return (
        <div className='login'>
            <Form onSubmit={handleSubmit}>
                <Form.Group size='lg' controlId='email'>
                <Form.Label>
                    Email
                    <br />
                </Form.Label>
                <Form.Control
                    autoFocus
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </Form.Group>
                <Form.Group size='lg' controlId='password'>
                <Form.Label>
                    <br />
                    Password
                </Form.Label>
                <Form.Control
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </Form.Group>
                <Button size='lg' type='submit' disabled={!validateForm()}>
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default LogSignIn;