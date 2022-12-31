import Header from "./Header";
import Footer from "./Footer";
import Resolution from "./Resolution";
import resolutions from "../resolutions";


export default function App() {

  const resolution = resolutions.map(resolution => ( 
   <Resolution 
      key = {resolution.key} 
      title = {resolution.title} 
      content = {resolution.randomRes} 
   />
  ))

  return (
    <div>
       <Header />
       {resolution}
       <Footer />
    </div>
  );
}


