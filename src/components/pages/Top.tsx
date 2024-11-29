import styled from "styled-components";
import { DefaultLayout } from "../templates/DefaultLayout";

export const Top = () => {
  return (
    <DefaultLayout>
      <SContainer>
        <h2>TOP</h2>
      </SContainer>
    </DefaultLayout>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
