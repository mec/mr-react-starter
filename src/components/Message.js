import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 1.9em;
  color: #eee;
`;

const Message = ({ message, handler }) => <Heading onClick={handler}>{message}</Heading>;

export default Message;
