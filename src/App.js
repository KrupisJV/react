import Counter from "./Counter";

function App() {
  const masivs = [
    "skatitajs",
    "Hellcat",
    "Niggers",
    "bomars",
  ];

  const masivsJSX = masivs.map(entry => {
    return <Counter name={entry} key={entry} />
  })
  return (
    <>
      <h1>Hi mom</h1>
      {masivsJSX}
    </>
  );
}

export default App;
