import styled from 'styled-components';

export const Form = styled.form`
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 5px;
  /* background: blue; */
  /* max-width: 320px; */
  color: #090c9b;
  padding: 15px;
  outline: #9c1010;
`;
export const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 0.85rem 1rem;
  /* margin-top: 2rem; */
  background-color: #0e39fe;
  color: white;
  font-size: 0.75rem;
  text-transform: uppercase;
  width: 20%;

  letter-spacing: 0.15em;
  transition: ease-in 1000ms;
  &:hover {
    outline: 3px solid #090c9b;
  }
`;

export const Input = styled.input`
  padding: 10px 20px;
  border: 4px solid white;
  /* margin: 0 1.5rem; */

  &::placeholder {
    color: #9c1010;
  }
  &:focus {
    color: #0e39fe;

    outline: 0;
    border: 3px solid #0e39fe;
  }
`;
