import HeroImage from "../../assets/header-bg.jpg";
import * as S from "./styles.tsx";

interface Wordings {
  title: string;
  description: string;
  button: string;
}

const Wordings: Wordings = {
  title: "QUENTIN LEE",
  description:
    "Diving deeper into the programming world as a Junior Software Developer.",
  button: "Get to know me",
};

export const HomePage: React.FC = () => {
  return (
    <S.Wrapper img={HeroImage}>
      <S.TextWrapper>
        <S.Title>{Wordings.title}</S.Title>
        <S.Description>{Wordings.description}</S.Description>
        <S.StyledLink to="#aboutme">{Wordings.button}</S.StyledLink>
      </S.TextWrapper>
    </S.Wrapper>
  );
};
