import { styled } from '@mui/material/styles';

export const Logo = styled((props) => {
  const { ...other } = props;
  return (
    <img alt="logo" src="/static/images/bndbroad/logo.png" width="42" height="42" {...other} />
  );
})``;
