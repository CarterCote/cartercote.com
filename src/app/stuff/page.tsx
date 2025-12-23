import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StuffContent from "../../components/StuffContent";
import StuffHeader from "../../components/StuffHeader";
import VideoBackground from "../../components/sections/VideoBackground";
import { getAllPosts } from "../../lib/blog";

const Stuff = () => {
  const posts = getAllPosts();

  return (
    <>
      <VideoBackground />
      <Navbar />
      <div className="flex w-full min-h-screen flex-col pt-32 pb-20 px-8 md:px-20">
        <div className="max-w-[800px] mx-auto w-full">
          <StuffHeader />
          <StuffContent posts={posts} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Stuff;
