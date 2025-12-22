import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StuffContent from "../../components/StuffContent";
import { getAllPosts } from "../../lib/blog";

const Stuff = () => {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <div className="flex w-full min-h-screen flex-col pt-32 pb-20 px-8 md:px-20">
        <div className="max-w-[800px] mx-auto w-full">
          <h1 className="font-voyager-thin text-[44px] md:text-[54px] mb-6">stuff</h1>
          <StuffContent posts={posts} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Stuff;
