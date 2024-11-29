import styled from "styled-components";

type Props = {
  image: string;
  name: string;
  isAdmin?: boolean;
};

export const UserIconWithName = (props: Props) => {
  const { image, name, isAdmin } = props;
  return (
    <SContainer>
      <SImg height={160} width={160} alt={name} src={image} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
};

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
