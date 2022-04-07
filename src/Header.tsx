interface AppProps {
  headerText: string;
  extraText?: string;
}

const Header = ({ headerText, extraText='default text'} : AppProps) => (
  <>
    <h1>{headerText}</h1>
    {extraText && <p>{extraText}</p>}
  </>
);

export default Header;