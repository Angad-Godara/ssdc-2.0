import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <Spinner>
        <Dot delay="0s" />
        <Dot delay=".1s" />
        <Dot delay=".2s" />
      </Spinner>
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const bounce = keyframes`
  0%, 100% { transform: scale(0); }
  50% { transform: scale(1); }
`;

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
`;

const Dot = styled.div`
  width: 15px;
  height: 15px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: #5F6065;
  animation: ${bounce} 1s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay};
`;

export default LoadingSpinner;