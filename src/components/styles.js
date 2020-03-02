import styled from 'styled-components'

// Styles
export const Container = styled.div`
  height: 100%;
  margin: 0;
`

export const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 25px;
  border-bottom: 1px solid #e5e5e5;
  transition: background 0.2s ease-in-out;
  cursor: pointer;
  position: relative;
  flex: 1 0 auto;
  border: 1px solid black;
  margin: 10px;
  width: 318px;
  height: auto;
  @media (max-width: 520px) {
    &:hover {
      &:before {
        opacity: 0;
      }
    }
  }
`

export const Button = styled.button`
  font-size: 1em;
  color: #2e6aff;
  background: none;
  border: 1px solid #2e6aff;
  padding: 5px 12px;
  margin: 0 15px;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  font-family: 'Concert One', cursive;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: auto;
  margin: 10px;
  &:hover {
    background: transparent;
    border-color: #000;
    color: #000;
  }
`

export const Name = styled.h2`
  font-family: 'Concert One', cursive;
  font-size: 1.6em;
  margin: 5px 0;
  color: #2e6aff;
  @media (max-width: 520px) {
    font-size: 1.4em;
  }
`

export const Tag = styled.span`
  font-size: 1em;
  color: #666;
`

export const Alert = styled.div`
  background: rgba(255, 4, 4, 0.68);
  color: #fff;
  padding: 15px 25px;
`

export const Loading = styled.div`
  font-size: 1.4em;
  margin: 15px 25px;
`

export const Image = styled.figure`
  margin: 0;
`