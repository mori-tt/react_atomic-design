import { memo } from "react";
import styled from "styled-components";

type Props = {
  src: string;
  name: string;
  isAdmin: boolean;
};

export const UserIconWithName = memo((props: Props) => {
  const { src, name, isAdmin } = props;

  return (
    <SContainer>
      <SImg height={160} width={160} alt={name} src={src} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
