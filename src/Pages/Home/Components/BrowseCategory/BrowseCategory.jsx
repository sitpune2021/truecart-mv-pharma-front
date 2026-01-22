import "./BrowseCategory.css";
import { assets } from "../../../../assets/assets";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Mom and Baby",
    image: assets.mom_baby,
    bg: "#ffd6e0",
  },
  {
    id: 2,
    name: "Elderly Care",
    image: assets.Elderly_care,
    bg: "#ffe7c7",
  },
  {
    id: 3,
    name: "Self Care",
    image: assets.Self_Care,
    bg: "#e9ffd6",
  },
  {
    id: 4,
    name: "Home Care",
    image: assets.Home_Care,
    bg: "#ffdcdc",
  },
  {
    id: 5,
    name: "Personal Care",
    image: assets.Personalcare,
    bg: "#d6fff0",
  },
  {
    id: 6,
    name: "Pet Supplies",
    image: assets.Pet_Supplies,
    bg: "#dce6ff",
  },
  {
    id: 7,
    name: "Sexual Wellness",
    image: assets.Sexual_Wellness,
    bg: "#ffd6e7",
  },
  {
    id: 8,
    name: "Food & Beverages",
    image: assets.Food,
    bg: "#fff6c7",
  },
];

const BrowseCategory = () => {
  return (
    <section className="browse-section">
      <h2 className="browse-title">Browse by category</h2>

      <div className="browse-row">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/category/${cat.name.toLowerCase().replace(/ & | /g, "-")}`}
            className="browse-link"
          >
            <div className="browse-card">
              <div
                className="browse-img-box"
                style={{ backgroundColor: cat.bg }}
              >
                <img src={cat.image} alt={cat.name} />
              </div>
              <p className="browse-name">{cat.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BrowseCategory;
