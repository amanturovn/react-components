import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Section from "./components/Section/Section";

function App() {
  let users = [
    {
      name: "Alex",
      lastName: "Miki",
      age: 23,
      id: 1,
    },
    {
      name: "Oleg",
      lastName: "Sasha",
      age: 21,
      id: 2,
    },
    {
      name: "Usen",
      lastName: "Asan",
      age: 35,
      id: 3,
    },
    {
      name: "Kaka",
      lastName: "Dodo",
      age: 25,
      id: 4,
    },
  ];
  // const [user, setUser] = useState(users);

  return (
    <div className="App">
      <Header />
      <Section user={users} />
      <Footer />
    </div>
  );
}

export default App;
