import React from "react";

import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Explore dan Bagikan!
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Quote</span>
      </h1>
      <p className="desc text-center">
        Urquotes adalah website open-source untuk saling berbagi quotes!
      </p>

      <Feed />
    </section>
  );
};

export default Home;
