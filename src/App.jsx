import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <>
      <main className="main">
        <div className="intro-wrapper">
          <Header />
          <Section type="intro" />
        </div>
        <Section type="feature left" />
        <Section type="feature right" />
        <Section type="visuals" />
        <Section type="testimonials" />
        <Section type="gallery" />
      </main>
      <Footer />
    </>
  );
}

export default App;
