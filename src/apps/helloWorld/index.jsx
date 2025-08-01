import React, { useState } from 'react';
import { Styled } from './styled';
import { Button } from '@mui/material';

const HelloWorld = () => {
    const [message, setMessage] = useState('');

    const handleClick = () => {
        setMessage('Hello, World!');
    };

    return (
        <Styled.Wrapper>
            <Styled.Text>{message}</Styled.Text>

            <Button variant="contained" onClick={handleClick}>
                Show Hello World
            </Button>
        </Styled.Wrapper>
    );
};

export default HelloWorld;
