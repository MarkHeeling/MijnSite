import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col max-w-6xl mx-auto">
        <h1 className="py-10 text-4xl text-center">
          Hallo! <br />
          Welkom op mijn site.
        </h1>
      </div>
      <Footer />
    </>
  );
}
