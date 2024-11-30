import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";
import { memo } from "react";

type Props = {
  user: {
    name: string;
    image: string;
    phone: string;
    company: {
      name: string;
    };
    website: string;
  };
};

export const UserCard = memo((props: Props) => {
  console.log("UserCard");
  const { user } = props;
  return (
    <Card>
      <UserIconWithName src={user.image} name={user.name} />
      <SDL>
        <dt>メール</dt>
        <dd>{user.name}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDL>
    </Card>
  );
});

const SDL = styled.dl`
  text-align: left;
  margin-botton: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-botton: 8px;
    overflow-wrap: break-word;
  }
`;
