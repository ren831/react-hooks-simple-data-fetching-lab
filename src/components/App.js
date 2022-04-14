import { useEffect, useState } from "react";

function App() {
  const [randomDog, setRandomDog] = useState("");
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((r) => r.json())
      .then((r) => {
        console.log(r);
        setRandomDog(r.message);
      });
  }, []);
  return randomDog ? (
    <img src={randomDog} alt="A Random Dog" />
  ) : (
    <p>Loading...</p>
  );
}

export default App;
