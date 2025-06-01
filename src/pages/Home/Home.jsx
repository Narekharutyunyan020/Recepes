import React, { useEffect, useState } from 'react'
import s from "./Home.module.scss"
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
      <div className='container'>
        <div className={s.subscribes}>
          <div className={s.blur}>
            <h2>Join the fun. <br /> Subscribe now!</h2>
            <p>
              Subscribe to our newsletter for a weekly serving of recipes, cooking tips,
              and exclusive insights straight to your inbox.
            </p>

            <div className={s.inputWrapper}>
              <button type="submit">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={s.menu}>
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
              <img src="/breakfast.png" alt="Breakfast" />
              <span>Breakfast</span>
            </div>
            <div className={s.menuEl}>
              <img src="/lunch.png" alt="Lunch" />
              <span>Lunch</span>
            </div>
            <div className={s.menuEl}>
              <img src="/dinner.png" alt="Dinner" />
              <span>Dinner</span>
            </div>
            <div className={s.menuEl}>
              <img src="/dessert.png" alt="Dessert" />
              <span>Dessert</span>
            </div>
            <div className={s.menuEl}>
              <img src="/quice bite.png" alt="Quick Bite" />
              <span>Quick Bite</span>
            </div>
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
      <div className="container">
        <div className={s.grid}>
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

          <div>
            <img
              src="/Recipe%20Card.png"
              alt="Recipe 1"
            />
          </div>

          <div>
            <img
              src="/recipe.grid1.jpg"
              alt="Recipe 3"
            />
          </div>

          <div>
            <img
              src="/recipe.grid.png"
              alt="Recipe 2"
            />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
