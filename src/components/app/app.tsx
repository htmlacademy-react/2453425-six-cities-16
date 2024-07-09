import Main from '../main/main';

function App(props: {offersCount: number}): JSX.Element {
  return <Main offersCount={props.offersCount} />;
}

export default App;
