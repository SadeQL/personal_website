import * as S from "./styles.tsx";
import Logo from "../../assets/logo.png";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "#", current: true },
  { name: "Tech Stack", href: "#stack", current: false },
  { name: "Projects", href: "#projects", current: false },
  { name: "About Me", href: "#aboutMe", current: false },
  {
    name: "Resume",
    href: "https://drive.google.com/file/d/1U6mNTAbi4YBHJTawIrGYquwTBIVwiXOM/view?usp=share_link",
    current: false,
  },
];

export const Navbar: React.FC = () => {
  return (
    <>
      <S.NavWrapper>
        <S.ItemWrapper>
          <S.Logo>
            <img src={Logo} />
          </S.Logo>
          {navigation.map((item: NavigationItem) => (
            <S.StyledLink key={item.name} to={item.href}>
              {item.name}
            </S.StyledLink>
          ))}
        </S.ItemWrapper>
      </S.NavWrapper>
    </>
  );
};
