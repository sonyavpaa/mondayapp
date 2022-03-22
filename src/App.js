import "./newContent.css";
import Header from "./header";
import Footer from "./footer";
import Box from "./box";

const arr = [
  {
    name: "Isnt",
    title: "Says",
    languages: [
      { name: "english", id: 1 },
      { name: "swedish", id: 2 },
    ],
  },
  {
    name: "This",
    title: "Your",
    languages: [
      { name: "english", id: 1 },
      { name: "german", id: 2 },
    ],
  },
  {
    name: "Handy",
    title: "Teacher",
    languages: [{ name: "dutch", id: 1 }],
  },
];

function App() {
  return (
    <div className="frame">
      <header>
        <Header />
      </header>
      <main>
        {arr.map((card) => (
          <Box
            name={card.name}
            title={card.title}
            languages={card.languages
              .map((language) => language?.name)
              .join(", ")}
            ç
          />
        ))}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
