
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Import your eye image and any other assets
import eyeImage from './student.svg';


// Define keyframe animation for background color change
const animateBackground = keyframes`
  0% {
    background-color: Beige;
  }
  50% {
    background-color: Black;
  }
  100% {
    background-color: Beige;
  }
`;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; 
  background-color: Beige; /* Initial background color */
  animation: ${animateBackground} 5s ease infinite; /* Apply background animation */
  font-family: Arial, sans-serif;
`;

const ContentWrapper = styled.div`
  background-color: #fff;
  padding: 100px;
  border-radius: 100px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
  width: 90%;
`;

const EyeIcon = styled.img`
  width: 600px;
  height: auto;
  margin-bottom: 20px;
`;

const StudentInfo = styled.div`
  margin-bottom: 20px;
`;

const ToggleButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 46px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Container>
      <ContentWrapper>
        <EyeIcon src={eyeImage} alt="Eye icon" />
        <StudentInfo>
          <h1>Name: HariDharshini.S</h1>
          <h4>Registration No: 212221230033</h4>
        </StudentInfo>
        <ToggleButton onClick={toggleVisibility}>
          {isVisible ? 'Hide Details' : 'Show Details'}
        </ToggleButton>
        {isVisible && (
          <React.Fragment>
            <h2>College:SEC</h2>
            <h3>Date of Birth:20.09.2003</h3>
          </React.Fragment>
        )}
      </ContentWrapper>
    </Container>
  );
};

export default App;
