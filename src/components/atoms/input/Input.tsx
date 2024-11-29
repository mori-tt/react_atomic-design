import styled from "styled-components";

export const Input = (props: { placeholder: string }) => {
  const { placeholder = "" } = props;
  return <SInput type="text" placeholder={placeholder} />;
};

const SInput = styled.input`
  padding: 8px 16px;
  border: 1px #ddd solid;
  border-radius: 9999px;
  outline: none;
`;
