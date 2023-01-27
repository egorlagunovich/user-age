import styled from "styled-components";

const UserForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 30px auto;
  padding: 20px 30px;
  background-color: white;
  border-radius: 15px;
  form {
    display: flex;
    flex-direction: column;
  }
  input {
    height: 25px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  label {
    color: black;
    font-size: bold;
  }
  button {
    padding: 10px;
    background-color: #540159;
    color: white;
    border-radius: 5px;
  }
  button:hover {
    background-color: salmon;
  }
  h1 {
    text-align: center;
  }
`;

export default UserForm;
