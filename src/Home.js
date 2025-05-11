import React from 'react';
import { Image } from 'react-bootstrap';

function Home() {
  return (
    <section
      style={{
        backgroundColor: "#e5e7eb",
        padding: "0", // Remove padding so the image goes full width
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
      className="home-section"
    >
      <Image
        src="./images/veg/home.jpg"
        alt="Delicious food"
        fluid
        style={{ width: '100%', height: '700px' }}
      />
    </section>
  );
}

export default Home;
