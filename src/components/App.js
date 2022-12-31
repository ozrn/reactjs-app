import Header from "./Header";
import Footer from "./Footer";
import Resolution from "./Resolution";

export default function App() {
  return (
    <div>
       <Header />
       <Resolution title = "title of the resolution" content = "content of the resolution" />
       <Footer />
    </div>
  );
}


