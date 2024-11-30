import styled from "styled-components";
import { DefaultLayout } from "../templates/DefaultLayout";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useRedux";
import { setUserInfo } from "../../store/slices/userSlice";

export const Top = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClickAdmin = () => {
    dispatch(setUserInfo({ isAdmin: true }));
    navigate("/users");
  };
  const onClickGeneral = () => {
    dispatch(setUserInfo({ isAdmin: false }));
    navigate("/users");
  };

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
