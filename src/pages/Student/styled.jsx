import styled from "styled-components";

export const StudentContainer = styled.div`
  margin-top: 20px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5px 0;
  }
  div + div {
    border-top: 1px solid #eee;
  }
  p {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
