
// Own components
import Title from "../Title/Title";
import SearchBar from "../SearchBar/SearchBar";

function Dashboard() {

  return (
    <div className="bg-black">
      <Title />
      <div className="container mx-auto">
        <SearchBar />
      </div>
    </div>
  );
}

export default Dashboard
