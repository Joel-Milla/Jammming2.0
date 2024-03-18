// Own components
import Title from "../Title/Title";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import SelectedSongs from "../SelectedSongs/SelectedSongs";

function Dashboard() {

  return (
    <div className="bg-black">
      <Title />
      <div className="container mx-auto mt-10">
        <SearchBar />
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4 mx-auto mt-10">
          <SearchResults />
          <SelectedSongs />
        </div>
      </div>
    </div>
  );
}

export default Dashboard
