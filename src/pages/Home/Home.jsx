import React, { useEffect, useState } from 'react'
import s from "./Home.module.scss"
import { Rating } from 'react-simple-star-rating'
import { getRecipes } from '../../services/recipes'
import RecipesCard from '../../components/RecipeCard/RecipesCard'
import RecipeSlider from '../../components/RecipeSlider/RecipeSlider'

const Home = () => {
  const [recipes, setRecipes] = useState([])
  const [showMore, setShowMore] = useState(false)

  useEffect(() => {
    getRecipes().then(data => setRecipes(data))
  }, [])

  const toggleText = () => {
    setShowMore(prev => !prev)
  }

  return (
    <div>
      <div className={`container ${s.subscribes}`}>
        <h1>Join the fun. <br /> Subscribe now!</h1>
        <p>
          Subscribe to our newsletter for a weekly serving of recipes, cooking tips,
          and exclusive insights straight to your inbox.
        </p>

        <div className={s.inputWrapper}>
          <button type="submit">Subscribe</button>
        </div>
      </div>
    <div className={`container ${s.menu}`}>
       <div className={s.menuRight}>
    <button className={s.exploreBtn}>Explore</button>
    <h2>OUR DIVERSE PALETTE</h2>
    <p>
      If you are a breakfast enthusiast, a connoisseur of savory delights, or on the lookout
      for irresistible desserts, our curated selection has something to satisfy every palate.
    </p>
    <button className={s.seeMoreBtn}>See More</button>
  </div>
  <div className={s.menuLeft}>
    <div className={s.menuEl}>
      <img src="/public/breakfast.png" alt="Breakfast" />
      <span>Breakfast</span>
    </div>
    <div className={s.menuEl}>
      <img src="/public/lunch.png" alt="Lunch" />
      <span>Lunch</span>
    </div>
    <div className={s.menuEl}>
      <img src="/public/dinner.png" alt="Dinner" />
      <span>Dinner</span>
    </div>
    <div className={s.menuEl}>
      <img src="/public/dessert.png" alt="Dessert" />
      <span>Dessert</span>
    </div>
    <div className={s.menuEl}>
      <img src="/public/quice bite.png" alt="Quick Bite" />
      <span>Quick Bite</span>
    </div>
  </div>

 
</div>


      <div className="container">
        <RecipeSlider recipes={recipes.slice(0, 6)} />
      </div>

      <div className={`container ${s.recipes}`}>
        {recipes.slice(6, 12).map(rec => (
          <RecipesCard key={rec.id} recipe={rec} />
        ))}
      </div>

      <div className={`container ${s.excellence}`}>
        <div className={s.grid}>
          <div className={s.grid1}>
            <div className={s.grid1}>
              <h2>OUR CULINARY CHRONICLE</h2>
              <h3>
                Our journey is crafted with dedication, creativity, and an unrelenting commitment to delivering delightful culinary experiences.
                {showMore && (
                  <>
                    {" "}
                    We explore flavors, techniques, and traditions from around the world. Each recipe tells a story, We explore flavors, techniques, and traditions from around the world. Each recipe tells a story, We explore flavors, techniques, and traditions from around the world. Each recipe tells a story, and each dish brings people together.
                  </>
                )}
              </h3>
              <button onClick={toggleText}>
                {showMore ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>

          <div>
            <div>
              <img
                src="/Recipe%20Card.png"
                alt="Recipe 1"
                style={{ width: '100%', maxHeight: "300px", borderRadius: '8px' }}
              />
            </div>
          </div>

          <div>
            <img
              src="/recipe.grid1.jpg"
              alt="Recipe 3"
              style={{
                width: '100%',
                maxHeight: '96.5%',
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
          </div>

          <div>
            <img
              src="/recipe.grid.png"
              alt="Recipe 2"
              style={{ width: '100%', maxHeight: "400px", borderRadius: '8px' }}
            />
          </div>
        </div>
      </div>

      <div className={`container ${s.subscribe}`}>
        <h3>Subscribe</h3>
        <h1>Join the fun. <br /> Subscribe now!</h1>
        <p>
          Subscribe to our newsletter for a weekly serving of recipes, cooking tips,
          and exclusive insights straight to your inbox.
        </p>

        <div className={s.inputWrapper}>
          <input type="email" placeholder="Email Address" />
          <button type="submit">Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Home
