import styled from "styled-components";
import { HeaderOnly } from "../templates/HeaderOnly";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `morimoli${val}`,
    image:
      "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    email: "12345@examlpe.com",
    phone: "000-0000-****",
    company: {
      name: "morimoli project",
    },
    website: "https://google.com",
  };
});

export const Users = () => {
  return (
    <HeaderOnly>
      <SContainer>
        <h2>USER一覧</h2>
        <SearchInput />
        <SUserArea>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </SUserArea>
      </SContainer>
    </HeaderOnly>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
