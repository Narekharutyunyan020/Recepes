import React, { useState } from "react";
import s from "./CookingTips.module.scss";

const cookingBasics = [
  {
    title: "Classic Pancakes",
    desc: "Fluffy and soft pancakes made from scratch, perfect for a classic breakfast.",
    fullDesc:
      "These pancakes are light and airy, achieved by using a simple batter of self-rising flour, milk, and eggs. The key to their fluffiness is in the technique: a hot, lightly greased skillet, and flipping the pancakes only once bubbles form on the surface. Serve with a drizzle of maple syrup, fresh berries, or a pat of butter for a comforting morning treat.",
    time: "20 minutes",
    img: "/cacke.png",
  },
  {
    title: "Simple Omelette",
    desc: "Quick and easy omelette with eggs, cheese, and your choice of veggies.",
    fullDesc:
      "A classic omelette made by whisking eggs and pouring them into a hot, buttered pan. As the edges set, gently lift them to let the uncooked eggs flow underneath. Add fillings like cheese, sautéed mushrooms, or spinach, then fold the omelette in half. Serve immediately for a warm, satisfying meal.",
    time: "10 minutes",
    img: "/Omlette.png",
  },
  {
    title: "Basic Tomato Pasta",
    desc: "A simple pasta dish with fresh tomato sauce and basil.",
    fullDesc:
      "This dish features al dente pasta tossed in a homemade tomato sauce made from ripe tomatoes, garlic, and fresh basil. The sauce is simmered to develop rich flavors, then combined with the cooked pasta. Garnish with Parmesan cheese and additional basil leaves for a fresh, flavorful meal.",
    time: "25 minutes",
    img: "/pasta.png",
  },
  {
    title: "Grilled Cheese Sandwich",
    desc: "Golden and crispy sandwich with melted cheese inside.",
    fullDesc:
      "A comforting classic made by placing slices of cheese between two pieces of bread, buttering the outside, and grilling until golden brown. The result is a crispy exterior with a gooey, melted cheese center. For added flavor, consider using a mix of cheeses like cheddar and Gruyère.",
    time: "15 minutes",
    img: "/sandwich.png",
  },
  {
    title: "Simple Salad",
    desc: "Fresh greens with tomatoes, cucumbers, and a light vinaigrette.",
    fullDesc:
      "A refreshing salad made with a mix of leafy greens, cherry tomatoes, and sliced cucumbers. Tossed in a light vinaigrette made from olive oil, vinegar, mustard, and seasonings. This dish is versatile and can be customized with additions like nuts, seeds, or cheese.",
    time: "10 minutes",
    img: "/Girl.jpg",
  },
  {
    title: "Boiled Eggs",
    desc: "Perfectly boiled eggs for a quick and healthy snack.",
    fullDesc:
      "Boiling eggs to the perfect doneness involves simmering them gently in water. For soft-boiled eggs, cook for about 4 minutes; for hard-boiled, around 8 minutes. After boiling, cool the eggs under cold running water to stop the cooking process. Peel and enjoy as a snack or add to salads for extra protein.",
    time: "12 minutes",
    img: "/image.png",
  },
];

const CookingTips = () => {
  const [modal, setModal] = useState(false);
  const [selectedTip, setSelectedTip] = useState(null);

  const openModal = (tip) => {
    setSelectedTip(tip);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setSelectedTip(null);
  };

  return (
    <div>
      <div className={`container ${s.tips}`}>
        <div className={`container ${s.top}`}>
          <div>
            <h2>Our Essential Cooking Tips</h2>
          </div>
          <div>
            <p>
              Welcome to Cooks Delight's treasure trove of cooking wisdom!
              Whether you're a seasoned chef or just starting your culinary
              journey, our cooking tips are designed to elevate your skills,
              enhance your kitchen experience, and bring joy to your cooking
              adventures.
            </p>
          </div>
        </div>

        <div className={`container ${s.center}`}>
          {[1, 2, 3].map((_, idx) => (
            <div className={s.icon} key={idx}>
              <img src={`/mek.png`} alt="" />
              <h3>Quality Tools</h3>
              <p>
                Invest in high-quality knives, cutting boards, and cookware.
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={`container ${s.bottom}`}>
        <h1>Mastering the Basics</h1>
        <ul>
          {cookingBasics.map((item, index) => (
            <li key={index} onClick={() => openModal(item)}>
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

      {modal && selectedTip && (
        <div className={s.modal} onClick={closeModal}>
          <div className={s.modal_back} />
          <div className={s.modal_info} onClick={(e) => e.stopPropagation()}>
            <button className={s.closeBtn} onClick={closeModal}>
              ×
            </button>
            <h2>{selectedTip.title}</h2>
            <div>
              <img width={100} src={selectedTip.img} alt="" />
              <p>{selectedTip.fullDesc}</p>
            </div>
            <span>{selectedTip.time}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookingTips;
