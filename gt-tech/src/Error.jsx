import React from 'react';
import styled from 'styled-components';
import { Button } from './styles/Button';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .go-back-button {
    background-color: #333236;
    /* Add any other styles you want for the button */
  }
`;

function Error() {
  return (
    <Wrapper>
      <img src="./images/error.png" alt='err-img' />
      <NavLink to="/">
      <Button className="go-back-button">Go Back</Button>
      </NavLink>
      
    </Wrapper>
  );
}

export default Error;

