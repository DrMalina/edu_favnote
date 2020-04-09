import React from 'react';
import styled from 'styled-components';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import ButtonIcon from './ButtonIcon';

export default {
  component: ButtonIcon,
  title: 'ButtonIcon',
  decorators: [(story) => <YellowBackground>{story()}</YellowBackground>],
};

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.primary};
`;

export const Bulb = () => <ButtonIcon icon={bulbIcon} />;
export const Logout = () => <ButtonIcon icon={logoutIcon} />;
export const Pen = () => <ButtonIcon icon={penIcon} />;
export const Plus = () => <ButtonIcon icon={plusIcon} />;
export const Twitter = () => <ButtonIcon icon={twitterIcon} />;
export const Active = () => <ButtonIcon active icon={plusIcon} />;
