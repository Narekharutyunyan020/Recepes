import React from 'react';
import s from "./CookingTips.module.scss";

const cookingBasics = [
  {
    title: "Classic Pancakes",
    desc: "Fluffy and soft pancakes made from scratch, perfect for a classic breakfast.",
    time: "20 minutes",
    img: "/Girl.jpg",
  },
  {
    title: "Simple Omelette",
    desc: "Quick and easy omelette with eggs, cheese, and your choice of veggies.",
    time: "10 minutes",
    img: "/Girl.jpg",
  },
  {
    title: "Basic Tomato Pasta",
    desc: "A simple pasta dish with fresh tomato sauce and basil.",
    time: "25 minutes",
    img: "/Girl.jpg",
  },
  {
    title: "Grilled Cheese Sandwich",
    desc: "Golden and crispy sandwich with melted cheese inside.",
    time: "15 minutes",
    img: "/Girl.jpg",
  },
  {
    title: "Simple Salad",
    desc: "Fresh greens with tomatoes, cucumbers, and a light vinaigrette.",
    time: "10 minutes",
    img: "/Girl.jpg",
  },
  {
    title: "Boiled Eggs",
    desc: "Perfectly boiled eggs for a quick and healthy snack.",
    time: "12 minutes",
    img: "/Girl.jpg",
  },
];

const CookingTips = () => {
  return (
    <div>
      <div className={`container ${s.tips}`}>
        <div className={`container ${s.top}`}>
          <div>
            <h1>Our Essential Cooking Tips</h1>
          </div>
          <div>
            <p>
              Welcome to Cooks Delight's treasure trove of cooking wisdom! Whether you're a seasoned chef or just starting your culinary journey, our cooking tips are designed to elevate your skills, enhance your kitchen experience, and bring joy to your cooking adventures.
            </p>
          </div>
        </div>

        <div className={`container ${s.center}`}>
          <div className={s.icon}>
            <img src="/mek.png" alt="" />
            <h3>Quality Tools</h3>
            <p>Invest in high-quality knives, cutting boards, and cookware.</p>
          </div>
          <div className={s.icon}>
            <img src="/erku.png" alt="" />
            <h3>Quality Tools</h3>
            <p>Invest in high-quality knives, cutting boards, and cookware.</p>
          </div>
          <div className={s.icon}>
            <img src="/ereq.png" alt="" />
            <h3>Quality Tools</h3>
            <p>Invest in high-quality knives, cutting boards, and cookware.</p>
          </div>
        </div>
      </div>

      <div className={`container ${s.bottom}`}>
        <h1>Mastering the Basics</h1>
        <ul>
          {cookingBasics.map((item, index) => (
            <li key={index}>
              <img src={item.img} alt={item.title} />
              <div className={s.info}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <p className={s["prep-time"]}>Preparation time: {item.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CookingTips;
