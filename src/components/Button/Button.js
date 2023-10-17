import { BtnLoadMore, BtnBox } from "./Button.styled";
export const ButtonLoading = ({ onClick }) => {
  return (
    <BtnBox>
      <BtnLoadMore type="button" onClick={onClick}>
        Load more...
      </BtnLoadMore>
    </BtnBox>
  );
};
