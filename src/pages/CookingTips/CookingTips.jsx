import React from 'react'
import s from "./CookingTips.module.scss"





const CookingTips = () => {
    return (
        <div>
            <div className={`container ${s.tips}`}>
                <div className={`container ${s.top}`}>
                    <div>
                        <h1>  Our Essential Cooking Tips</h1>
                      
                    </div>
                    <div>
                        <p> Welcome to Cooks Delight's treasure trove of cooking wisdom! Whether you're a seasoned chef or just starting your culinary journey, our cooking tips are designed to elevate your skills, enhance your kitchen experience, and bring joy to your cooking adventures.</p>
                       
                    </div>
                </div>
                <div className={`container ${s.center}`}>
                    <div className='icon1'>
                        <img src="/mek.png" alt="" />
                        <h3>Quality Tools</h3>
                        <p>Invest in high-quality knives, cutting boards, and cookware.</p>
                    </div>
                    <div className='icon2'>
                        <img src="/erku.png" alt="" />
                        <h3>Quality Tools</h3>
                        <p>Invest in high-quality knives, cutting boards, and cookware.</p>
                    </div>
                    <div className='icon3'>
                        <img src="/ereq.png" alt="" />
                        <h3>Quality Tools</h3>
                        <p>Invest in high-quality knives, cutting boards, and cookware.</p>
                    </div>

                </div>
                

            </div>

<div className={`container ${s.bottom}`}>


  <h1>Mastering the Basics</h1>

  <ul>
    <li>
      <img src="/Girl.jpg" alt="Classic Pancakes" />
      <div className="info">
        <h2>Classic Pancakes</h2>
        <p>Fluffy and soft pancakes made from scratch, perfect for a classic breakfast.</p>
        <p className="prep-time">Preparation time: 20 minutes</p>
      </div>
    </li>

    <li>
      <img src="/Girl.jpg" alt="Simple Omelette" />
      <div className="info">
        <h2>Simple Omelette</h2>
        <p>Quick and easy omelette with eggs, cheese, and your choice of veggies.</p>
        <p className="prep-time">Preparation time: 10 minutes</p>
      </div>
    </li>

    <li>
      <img src="/Girl.jpg" alt="Basic Tomato Pasta" />
      <div class="info">
        <h2>Basic Tomato Pasta</h2>
        <p>A simple pasta dish with fresh tomato sauce and basil.</p>
        <p class="prep-time">Preparation time: 25 minutes</p>
      </div>
    </li>

    <li>
      <img src="/Girl.jpg" alt="Grilled Cheese Sandwich" />
      <div class="info">
        <h2>Grilled Cheese Sandwich</h2>
        <p>Golden and crispy sandwich with melted cheese inside.</p>
        <p class="prep-time">Preparation time: 15 minutes</p>
      </div>
    </li>

    <li>
      <img src="/Girl.jpg" alt="Simple Salad" />
      <div class="info">
        <h2>Simple Salad</h2>
        <p>Fresh greens with tomatoes, cucumbers, and a light vinaigrette.</p>
        <p class="prep-time">Preparation time: 10 minutes</p>
      </div>
    </li>

    <li>
      <img src="/Girl.jpg" alt="Boiled Eggs" />
      <div class="info">
        <h2>Boiled Eggs</h2>
        <p>Perfectly boiled eggs for a quick and healthy snack.</p>
        <p class="prep-time">Preparation time: 12 minutes</p>
      </div>
    </li>
  </ul>
     </div>

        </div>
    )
}

export default CookingTips;