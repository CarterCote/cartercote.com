import React from "react"
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });
import Hero from "../components/Hero"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
        </div>
    )
};
export default Home;