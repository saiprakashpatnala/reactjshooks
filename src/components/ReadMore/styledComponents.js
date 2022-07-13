// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const Heading = styled.h1`
  color: #1e293b;
  font-size: 30px;
  font-family: 'Roboto';
`
export const Para = styled.p`
  color: #1e293b;
  font-size: 15px;
  font-family: 'Roboto';
`

export const Img = styled.img`
  height: 400px;
  width: 50%;
`

export const Description = styled.p`
  color: #1e293b;
  font-size: 14px;
  font-family: 'Roboto';
  width: 50%;
`

export const Button = styled.button`
  background-color: #1f81ff;
  color: #ffffff;
  font-family: 'Roboto';
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 18px;
  padding-right: 18px;
  border-width: 0px;
  border-radius: 9px;
  margin-top: 40px;
`

export default Container
