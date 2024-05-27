import React from "react";
import SecondsCounter from "./secondscounter.jsx";

const Home = ({ seconds }) => {
    return (
        <div className="text-center mt-5">
            <SecondsCounter seconds={seconds} />
        </div>
    );
};

export default Home;