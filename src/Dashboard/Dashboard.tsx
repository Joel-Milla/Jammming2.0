// Own components
import Title from "../Title/Title";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";

function Dashboard() {

  return (
    <div className="bg-black">
      <Title />
      <div className="container mx-auto mt-10">
        <SearchBar />
        <div className="flex flex-row justify-center gap-4 mx-auto mt-10">
          <SearchResults />
          <SearchResults />
        </div>
      </div>
    </div>
  );
}

export default Dashboard
