import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
