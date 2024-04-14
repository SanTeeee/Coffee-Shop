import FirstPage from "./firstPageContent";
import SecondPage from "./secondPageContent";
import Header from "./header";
import ThirdPageContents from "./thirdPageContent";
import Testimonial from "./testimonial";
import Blog from "./blog";
import Footer from "./footer";
import hamburger from "..";

function App() {
  return (
    <div>
      <Header></Header>
      <FirstPage></FirstPage>
      <SecondPage></SecondPage>
      <ThirdPageContents></ThirdPageContents>
      <Testimonial></Testimonial>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default App;
