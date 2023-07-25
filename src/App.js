import "./App.css";
import Nav from "./components/Nav";
import RecommendedAside from "./components/RecommendedAside";
import ResultsData from "./components/ResultsData";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <Nav />
      <SearchBar />

      <main>
        <ResultsData />
        <RecommendedAside />
      </main>
    </div>
  );
}

export default App;
