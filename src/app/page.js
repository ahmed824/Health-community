import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import HomePage from "../pages/home/HomePage";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}
