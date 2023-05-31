import SearchBox from './components/search-box/SearchBox'
import CardList from './components/card-list/CardList'

function App() {
  return (
    <div className="text-center bg-gradient-to-r from-indigo-500 min-h-screen">
      <h1 className="pt-16 pb-5">Galeri Kelas</h1>
      <SearchBox />
      <CardList />
    </div >
  );
}

export default App;
