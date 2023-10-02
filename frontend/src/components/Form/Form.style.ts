import styled from "@emotion/styled";
import { Colors } from "../../theme/colors";

export const FormControl = styled.input`
  display: block;
  width: 95%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: ${Colors.DarkGrey};
  background-color: ${Colors.White};
  background-clip: padding-box;
  border: 1px solid ${Colors.Grey};
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const FormGroup = styled.form`
  display: grid;
  gap: 13px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 8px;
`;
