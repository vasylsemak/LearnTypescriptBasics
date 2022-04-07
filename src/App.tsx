import './App.css'

interface AppProps {
  headerText: string;
  extraText?: string;
}

function App({ headerText, extraText='default text' }: AppProps) {
  return (
    <div className='App'>
      <h1>{headerText}</h1>
      {extraText && <p>{extraText}</p>}
    </div>
  );
}

export default App;
