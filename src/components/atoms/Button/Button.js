import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme, color }) => color || theme.primary};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.grey200};
      width: 105px;
      height: 30px;
      font-size: ${({ theme }) => theme.fontSize.xxs};
    `}
`;

export default Button;
