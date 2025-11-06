import React from "react";

const Home = () => {
  return (
    <>
      <nav className="navbar">
        <h1>StrideX</h1>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <section className="hero">
        <h1>Step into Comfort and Style</h1>
        <p>Discover premium footwear crafted for every stride. Shop your perfect pair today!</p>
        <button>Shop Now</button>
      </section>

      <section className="product-grid">
        <div className="product-card">
          <img src="https://via.placeholder.com/250x200" alt="Running Shoes" />
          <h3>Running Shoes</h3>
          <p>Perfect for athletes and runners.</p>
        </div>
        <div className="product-card">
          <img src="https://via.placeholder.com/250x200" alt="Casual Sneakers" />
          <h3>Casual Sneakers</h3>
          <p>Style and comfort for everyday wear.</p>
        </div>
        <div className="product-card">
          <img src="https://via.placeholder.com/250x200" alt="Formal Shoes" />
          <h3>Formal Shoes</h3>
          <p>Elegance for every occasion.</p>
        </div>
      </section>

      <footer>
        <p>© 2025 StrideX | Mangalore | stride@email.com</p>
      </footer>
    </>
  );
};

export default Home;
