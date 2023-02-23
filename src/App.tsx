import "./App.scss";

import StarRating from "./components/StarRating";
import UserOpinion from "./components/UserOpinion";

const App = () => {
  return (
    <main>
      <div className="rating">
        <div className="text">
          <h2>
            10,000+ of our
            <br />
            users love our
            <br />
            products.
          </h2>
          <p>
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>
        <div className="stars">
          <StarRating text="Rated 5 Stars in Reviews"></StarRating>
          <StarRating text="Rated 5 Stars in Report Guru"></StarRating>
          <StarRating text="Rated 5 Stars in BestTech"></StarRating>
        </div>
      </div>
      <div className="opinions">
        <UserOpinion
          name="Colton Smith"
          opinion="We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"
          imgUrl="./images/image-colton.jpg"
        ></UserOpinion>
        <UserOpinion
          name=" Irene Roberts"
          opinion="Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
          imgUrl="./images/image-irene.jpg"
        ></UserOpinion>
        <UserOpinion
          name="Anne Wallace"
          opinion="Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"
          imgUrl="./images/image-anne.jpg"
        ></UserOpinion>
      </div>
    </main>
  );
};
export default App;
