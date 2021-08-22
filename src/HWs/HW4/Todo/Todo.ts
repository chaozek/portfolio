import styled from 'styled-components'
export const TodoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem auto;
`

export const TodoBlock = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  width: 80%;
`
export const SingleTodoWrapper = styled.div`
  padding: 0rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  min-height: 4rem;
  flex-wrap: wrap;
`
export const Right = styled.div`
  flex: 20%;
  text-align: center;
`
export const Left = styled.div`
  flex: 80%;

  cursor: pointer;
`
export const Delete = styled.button`
  margin: 0.3rem;
  background: 'red';
  background-color: white;
  color: red;
  border: 1px solid red;
  width: 45px;
  border-radius: 3px;

  :hover {
    border: none;
    background-color: #e60001;
    color: white;
  }
`
export const Edit = styled.button`
  background-color: gray;
  border: none;
  color: white;
  margin: 0.3rem;
  border-radius: 3px;
  width: 45px;

  background-color: white;
  color: gray;
  border: 1px solid gray;
  :hover {
    background-color: gray;
    border: none;
    color: white;
  }
`
export const Input = styled.input`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border: none;
  width: 100%;
  padding: 0.8rem;
`
