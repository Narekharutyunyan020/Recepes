import s from "./AboutUs.module.scss"
import RecipeSlider from '../../components/RecipeSlider/RecipeSlider'
import { getRecipeById, getRecipes } from '../../services/recipes'
import { FaFacebookF, FaInstagram, FaYoutube, } from 'react-icons/fa';
import { useEffect, useState } from "react";
const AboutUs = () => {

  const [recipes, setRecipes] = useState([]);
  useEffect(() => {

    getRecipes().then(data => {
      console.log(data)
      setRecipes(data)
    })


  }, [])
  return (
    <div>
      <section className={`container ${s.hero}`}>
        <h2>Welcome to my Culinary Haven!</h2>
        <div className={s.frame}>
          <p>Bonjour and welcome to the heart of my kitchen! I'm Isabella Russo, the culinary enthusiast behind this haven of flavors, Cooks Delight. Join me on a gastronomic journey where each dish carries a story, and every recipe is a crafted symphony of taste.</p>
          <button>explore recipes</button>
        </div>
      </section>
      <section className={`container ${s.about}`} >
        <div className={s.biography}>
          <img src="/about/e637b4d0d93b838c110e630a7879786b359769e0.jpg" alt="" />
          <div className={s.follow}>
            <span>Follow me</span>
            <div className={s.rightSection}>
              <a><FaFacebookF className={s.icon} /></a>
              <a><FaInstagram className={s.icon} /></a>
              <a><FaYoutube className={s.icon} /></a>
            </div>
          </div>
        </div>
        <div className={s.text}>
          <h4>From Italian Roots to Global Palates</h4>
          <p className={s.desc}>Born and raised in the vibrant culinary landscape of Italy, my journey with food began in the heart of my family's kitchen. Surrounded by the aroma of fresh herbs, the sizzle of pans, and the laughter of loved ones, I developed a deep appreciation for the art of cooking. My culinary education took me from the historic streets of Rome to the bustling markets of Florence, where I honed my skills and cultivated a love for the simplicity and authenticity of Italian cuisine.</p>
          <p className={s.desc}>Driven by a relentless curiosity, I embarked on a global culinary exploration, seeking inspiration from the rich tapestry of flavors found in kitchens around the world. From the spicy markets of Marrakech to the sushi stalls of Tokyo, each experience added a unique brushstroke to my culinary canvas.</p>
          <p className={s.desc}>Whether you're a seasoned home cook or just starting your culinary adventure, I'm delighted to have you here. Let's stir, simmer, and savor the beauty of creating something wonderful together.</p>
          <p className={s.desc}>Warmest regards,</p>
          <p className={`${s.desc} ${s.font}`}>Isabella Russo</p>
        </div>
      </section>
      <section className={`container ${s.gallery}`}>
        <img src="/about/8b1ca59f97af81179fc1881240c547762aa785b4.jpg" alt="" />
        <img src="/about/0051dcbad02043563d2c37d8656ad2b79e3c54ce.jpg" alt="" />
        <img src="/about/81d3d5e650af87e273c220b47ebf6c5ba1b27b5a.jpg" alt="" />
        <img src="/about/425d8e385ad3cab322bb29ab2afd37ad7fdc90cb.jpg" alt="" />
        <img src="/about/830f4160c70ce269cc5300c93d42e19efec33c0d.jpg" alt="" />
        <img src="/about/4915830e9d167d09cff288da9de79262f680382b.jpg" alt="" />
        <img src="/about/cea8419e2bb87145272787ba4b5713c250140641.jpg" alt="" />
        <img src="/about/de6fa5de811fba45db71b99bc7c245f8ba7af02c.jpg" alt="" />
      </section>
      <div className="container">
      <RecipeSlider recipes={recipes} />
      </div>
    </div>
  )
}

export default AboutUs
