import styled from "styled-components";
import { DefaultLayout } from "../templates/DefaultLayout";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useNavigate } from "react-router-dom";

export const Top = () => {
  const navigate = useNavigate();
  const onClickAdmin = () => navigate("/users", { state: { isAdmin: true } });
  const onClickGeneral = () =>
    navigate("/users", { state: { isAdmin: false } });
  return (
    <DefaultLayout>
      <SContainer>
        <h2>TOP Page</h2>
        <SecondaryButton onClick={onClickAdmin}>管理者</SecondaryButton>
        <br />
        <br />
        <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
      </SContainer>
    </DefaultLayout>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
