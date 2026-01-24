import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";


/* ================= SVG ICONS ================= */
const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-10.5z"
      stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M3 3h2l2.5 12h9l2-8H7"
      stroke="currentColor" strokeWidth="1.8" />
    <circle cx="10" cy="20" r="1.5" fill="currentColor" />
    <circle cx="17" cy="20" r="1.5" fill="currentColor" />
  </svg>
);

const OfferIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M20 12l-8 8-8-8 8-8 8 8z"
      stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const ProfileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4"
      stroke="currentColor" strokeWidth="1.8" />
    <path d="M4 21c1.5-4 14.5-4 16 0"
      stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M3 6h18M3 12h18M3 18h18"
      stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M5 4l4 1-2 4c1 2 3 4 5 5l4-2 1 4c-1 2-6 3-10-1S3 6 5 4z"
      stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

/* ================= CATEGORY DATA ================= */
const bottomNavData = [
  {
    title: "Mom & Baby",
    sections: [
      {
        title: "Baby Bath & Hygiene",
        links: [
          { label: "Baby Skin Care", path: "/baby-skin-care" },

          { label: "Baby Hair Care", path: "/baby-hair-care" },
          { label: "Baby Bath", path: "/baby-bath" },
          { label: "Baby Gift Sets", path: "/baby-gift-sets" },
        ],
      },
      {
        title: "Feeding & Nursing",
        links: [
          { label: "Feeding Bottles", path: "/feeding-bottles" },
          { label: "Nursing Tools", path: "/nursing-tools" },
          { label: "Sippers", path: "/sippers" },
        ],
      },

      {
        title: "Diapers & Wipes",
        links: [
          { label: "Baby Diapers", path: "/baby-diapers" },
          { label: "Baby Wipes", path: "/baby-wipes" },
        ],
      },




    ],
  },
  {
    title: "Personal Care",
    sections: [
      {
        title: "Skin Care",
        links: [
          { label: "Face Wash", path: "/face-wash" },
          { label: "Moisturizers", path: "/moisturizers" },
        ],
      },


      {
        title: "Hair Care",
        links: [
          { label: "Shampoo", path: "/shampoo" },
          { label: "Hair Oil", path: "/hair-oil" },
        ],
      },

      {
        title: "Oral Care",
        links: [
          { label: "Toothpaste", path: "/toothpaste" },
          { label: "Mouthwash", path: "/mouthwash" },
        ],
      },



    ],
  },
  {
    title: "Health & Fitness",
    sections: [
      {
        title: "Supplements",
        links: [
          { label: "Vitamins", path: "/vitamins" },
          { label: "Proteins", path: "/proteins" },
        ],
      },

      {
        title: "Sports Nutrition",
        links: [
          { label: "Energy Bars", path: "/energy-bars" },
        ],
      },

    ],
  },



  {
    title: "Elderly Care",
    sections: [
      {
        title: "Mobility Aids",
        links: [
          { label: "Walkers", path: "/walkers" },
          { label: "Wheelchairs", path: "/wheelchairs" },
        ],
      },
      {
        title: "Monitoring Devices",
        links: [
          { label: "BP Monitors", path: "/bp-monitors" },
          { label: "Glucometers", path: "/glucometers" },
        ],
      },
    ],
  },

  {
    title: "Self Care",
    sections: [
      {
        title: "Wellness",
        links: [
          { label: "Stress Relief", path: "/stress-relief" },
          { label: "Aromatherapy", path: "/aromatherapy" },
        ],
      },
      {
        title: "Hygiene",
        links: [
          { label: "Hand Wash", path: "/hand-wash" },
          { label: "Sanitizers", path: "/sanitizers" },
        ],
      },
    ],
  },


  {
    title: "Pet Supplies",
    sections: [
      {
        title: "Pet Food",
        links: [
          { label: "Dog Food", path: "/dog-food" },
          { label: "Cat Food", path: "/cat-food" },
        ],
      },
      {
        title: "Accessories",
        links: [
          { label: "Leashes", path: "/leashes" },
          { label: "Bowls", path: "/bowls" },
        ],
      },
    ],
  },



  {
    title: "Paper & Wipes",
    sections: [
      {
        title: "Paper Products",
        links: [
          { label: "Toilet Paper", path: "/toilet-paper" },
          { label: "Tissues", path: "/tissues" },
        ],
      },
      {
        title: "Wipes",
        links: [
          { label: "Baby Wipes", path: "/baby-wipes" },
          { label: "Wet Wipes", path: "/wet-wipes" },
        ],
      },
    ],
  },

  {
    title: "Sexual Wellness",
    sections: [
      {
        title: "Protection",
        links: [
          { label: "Condoms", path: "/condoms" },
        ],
      },
      {
        title: "Lubricants",
        links: [
          { label: "Water Based", path: "/lubricants-water" },
          { label: "Gel", path: "/lubricants-gel" },
        ],
      },
    ],
  },


  {
    title: "Mobility & Rehab",
    sections: [
      {
        title: "Rehabilitation",
        links: [
          { label: "Exercise Bands", path: "/exercise-bands" },
          { label: "Physio Tools", path: "/physio-tools" },
        ],
      },
    ],
  },



  {
    title: "Food & Beverages",
    sections: [
      {
        title: "Dairy",
        links: [
          { label: "Milk", path: "/milk" },
          { label: "Butter", path: "/butter" },
        ],
      },
      {
        title: "Breakfast",
        links: [
          { label: "Oats", path: "/oats" },
          { label: "Granola", path: "/granola" },
        ],
      },



    ],
  },


  // {
  //   title: "Home Care",
  //   sections: [
  //     {
  //       title: "Cleaning",
  //       links: [
  //         { label: "Floor Cleaner", path: "/floor-cleaner" },
  //         { label: "Dishwash", path: "/dishwash" },
  //       ],
  //     },
  //   ],
  // },

  {
    title: "Ortho Belts & Supports",
    sections: [
      {
        title: "Supports",
        links: [
          { label: "Knee Support", path: "/knee-support" },
          { label: "Back Support", path: "/back-support" },
          { label: "Ankle Support", path: "/ankle-support" },
        ],
      },
    ],
  },

];

/* ================= NAVBAR ================= */
const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);

  const [showLogin, setShowLogin] = useState(false);

  const [loginStep, setLoginStep] = useState("PHONE"); // PHONE | OTP
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState(null);
  const [showMobileProfile, setShowMobileProfile] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showOrderEasy, setShowOrderEasy] = useState(false);

  const [location, setLocation] = useState("Vikhroli, Mumbai");

  // ✅ ADD THIS RIGHT HERE 👇
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    const savedLocation = localStorage.getItem("location");
    if (savedLocation) {
      setLocation(savedLocation);
    }
  }, []);




  return (
    <>
      {/* ================= MOBILE VIEW ================= */}
      <div className="mobile-only">
        {/* TOP BAR */}
        <div className="mobile-top-bar">
          <Link to="/">
            <img src={assets.logo} alt="logo" className="mobile-logo" />
          </Link>

          <div
            className="nav-location"
            onClick={() => setShowLocation(true)}
          >
            {location} ▾
          </div>


          <div className="mobile-icons">
            <PhoneIcon />
            <CartIcon />
          </div>
          {/* SEARCH BAR */}


        </div>

        <div className="mobile-search-bar">
          <input placeholder="Search from our 1,00,000+ products" />
        </div>


        {/* ================= MOBILE QUICK LINKS ================= */}
        <div className="mobile-quick-links">
          <Link to="/medicines" className="quick-link">
            <img src={assets.medicine_icon} alt="All Medicines" />
            <span>All Medicines</span>
          </Link>

          <Link to="/wellness" className="quick-link">
            <img src={assets.wellness_icon} alt="Wellness" />
            <span>Truecart Offerings</span>
          </Link>

          <Link to="/stores" className="quick-link">
            <img src={assets.location_icon} alt="Store Locator" />
            <span>Store Locator</span>
          </Link>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="quick-link"
          >
            <img src={assets.whatsapp_icon} alt="WhatsApp" />
            <span>WhatsApp Connect</span>
          </a>
        </div>



        <div className="mobile-order-easy">
          <button
            className="order-btn"
            onClick={() => setShowOrderEasy(true)}
          >
            Order Easy ⬆
          </button>

        </div>




        {/* BOTTOM NAV */}
        <nav className="mobile-bottom-nav">
          <button className={activeTab === "Home" ? "active" : ""} onClick={() => setActiveTab("Home")}>
            <HomeIcon />
            <span>Home</span>
          </button>

          <button className={activeTab === "Offers" ? "active" : ""} onClick={() => setActiveTab("Offers")}>
            <OfferIcon />
            <span>Offers</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("Profile");
              user ? setShowMobileProfile(true) : setShowLogin(true);
            }}

          >

            <ProfileIcon />
            <span>Profile</span>
          </button>


          <button onClick={() => setShowMenu(true)}>
            <MenuIcon />
            <span>Menu</span>
          </button>
        </nav>

        {/* MENU DRAWER */}
        {showMenu && (
          <div className="mobile-menu-overlay" onClick={() => setShowMenu(false)}>
            <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
              <div className="menu-header">
                <h3>All Categories</h3>
                <button onClick={() => setShowMenu(false)}>✕</button>
              </div>

              {bottomNavData.map((cat) => (
                <details key={cat.title}>
                  <summary>{cat.title}</summary>
                  {cat.sections.map((sec) => (
                    <ul key={sec.title}>
                      {sec.links.map((link) => (
                        <li key={link.path}>
                          <Link to={link.path}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  ))}
                </details>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <header className="navbar-wrapper desktop-only">
        <div className="navbar-top">
          <div className="nav-left">
            <Link to="/">
              <img src={assets.logo} alt="logo" className="nav-logo" />
            </Link>

            <div className="nav-location" onClick={() => setShowLocation(true)}>
              {location} ▾
            </div>
          </div>


          <div className="nav-center">
            <input placeholder="Search from our 1,00,000+ products" />
          </div>

          <div className="nav-right">
            {user ? (
              <div className="nav-profile">
                <div className="nav-profile-trigger">
                  <div className="nav-avatar">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="nav-username">{user.name}</span>
                </div>

                <div className="profile-menu">
                  <div className="profile-header">
                    Hello <strong>{user.name}</strong> !
                  </div>

                  <div className="profile-list">
                    <div className="profile-item">View Profile</div>
                    <div className="profile-item">Buy Again</div>
                    <div className="profile-item">My Orders</div>
                    <div className="profile-item">My Favourites</div>
                    <div className="profile-item">My Prescriptions & Reports</div>
                    <div className="profile-item">My Reminders</div>
                    <div className="profile-item">Saved Addresses</div>
                  </div>

                  <div
                    className="profile-logout"
                    onClick={() => {
                      setUser(null);
                      localStorage.removeItem("user");
                    }}
                  >
                    Logout
                  </div>
                </div>
              </div>
            ) : (
              <span className="nav-item" onClick={() => setShowLogin(true)}>
                Login
              </span>
            )}



            <span className="nav-item">Offers</span>
            <CartIcon />
            <PhoneIcon />
          </div>
        </div>
        <div className="navbar-middle">
          <div className="middle-content">
            <Link to="/medicines" className="middle-item">
              All Medicines
            </Link>

            <Link to="/offerings" className="middle-item">
              Treucart Offerings
            </Link>

            <Link to="/stores" className="middle-item">
              Store Locator
            </Link>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="middle-item"
            >
              WhatsApp Connect
            </a>

            <Link to="/blogs" className="middle-item">
              Blogs
            </Link>

            <button
              className="order-btn"
              onClick={() => setShowOrderEasy(true)}
            >
              Order Easy ⬆
            </button>

          </div>
        </div>


        <div className="navbar-bottom">
          {bottomNavData.map((category) => (
            <div className="bottom-category" key={category.title}>
              <div className="bottom-item">
                {category.title} ▾
              </div>

              <div className="mega-menu">
                <div className="mega-grid">
                  {category.sections.map((section) => (
                    <div className="mega-column" key={section.title}>
                      <div className="mega-section">
                        <h4>{section.title}</h4>
                        <ul>
                          {section.links.map((link) => (
                            <li key={link.path}>
                              <Link to={link.path}>{link.label}</Link>                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </header>
      {/* ================= LOGIN MODAL ================= */}

      {/* ================= LOGIN / OTP MODAL ================= */}
      {showLogin && (
        <div
          className="login-overlay"
          onClick={() => {
            setShowLogin(false);
            setLoginStep("PHONE");
            setMobile("");
            setOtp("");
          }}
        >
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => {
                setShowLogin(false);
                setLoginStep("PHONE");
              }}
            >
              ✕
            </button>

            <h2>
              {loginStep === "PHONE" ? "Login with OTP" : "Enter OTP"}
            </h2>

            {/* PHONE NUMBER STEP */}
            {loginStep === "PHONE" && (
              <>
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  value={mobile}
                  maxLength="10"
                  onChange={(e) => setMobile(e.target.value)}
                />

                <button
                  className="login-btn"
                  disabled={mobile.length !== 10}
                  onClick={() => {
                    // API CALL WILL COME HERE
                    setLoginStep("OTP");
                  }}
                >
                  Send OTP
                </button>
              </>
            )}

            {/* OTP STEP */}
            {loginStep === "OTP" && (
              <>
                <input
                  type="text"
                  placeholder="Enter 6 digit OTP"
                  value={otp}
                  maxLength="6"
                  onChange={(e) => setOtp(e.target.value)}
                />

                <button
                  className="login-btn"
                  disabled={otp.length !== 6}
                  onClick={() => {
                    // Mock user data (API will return this)
                    const loggedInUser = {
                      name: "Sanket",
                      phone: mobile,
                    };

                    setUser(loggedInUser);
                    localStorage.setItem("user", JSON.stringify(loggedInUser));


                    setShowLogin(false);
                    setLoginStep("PHONE");
                    setMobile("");
                    setOtp("");
                  }}

                >
                  Verify OTP
                </button>

                <p className="login-footer">
                  Didn’t receive OTP? <span>Resend</span>
                </p>
              </>
            )}
          </div>
        </div>
      )}





      {/* ================= MOBILE PROFILE SHEET ================= */}
      {showMobileProfile && user && (
        <div
          className="mobile-profile-overlay"
          onClick={() => setShowMobileProfile(false)}
        >
          <div
            className="mobile-profile-sheet"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-profile-header">
              <div className="profile-user">
                <div className="profile-avatar">
                  {user.name.charAt(0).toUpperCase()}
                </div>

                <div className="profile-greeting">
                  Hello <strong>{user.name}</strong>!
                </div>
              </div>

              <button onClick={() => setShowMobileProfile(false)}>✕</button>
            </div>


            <div className="mobile-profile-list">
              <div className="mobile-profile-item">View Profile</div>
              <div className="mobile-profile-item">Buy Again</div>
              <div className="mobile-profile-item">My Orders</div>
              <div className="mobile-profile-item">My Favourites</div>
              <div className="mobile-profile-item">My Prescriptions & Reports</div>
              <div className="mobile-profile-item">My Reminders</div>
              <div className="mobile-profile-item">Saved Addresses</div>
            </div>

            <div
              className="mobile-profile-logout"
              onClick={() => {
                setUser(null);
                localStorage.removeItem("user");
                setShowMobileProfile(false);
              }}
            >
              Logout
            </div>
          </div>
        </div>
      )}




      {/* ================= LOCATION DROPDOWN ================= */}
      {showLocation && (
        <div
          className="location-overlay"
          onClick={() => setShowLocation(false)}
        >
          <div
            className="location-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="location-header">
              Select Delivery Location
              <button onClick={() => setShowLocation(false)}>✕</button>
            </div>

            <input
              className="location-input"
              placeholder="Search by area or pincode"
            />

            <div className="location-list">
              {[
                "Vikhroli, Mumbai",
                "Powai, Mumbai",
                "Andheri East, Mumbai",
                "Thane West",
              ].map((loc) => (
                <div
                  key={loc}
                  className="location-item"
                  onClick={() => {
                    setLocation(loc);
                    localStorage.setItem("location", loc);
                    setShowLocation(false);
                  }}

                >
                  {loc}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}



      {/* ================= ORDER EASY (RESPONSIVE) ================= */}
      {showOrderEasy && (
        window.innerWidth <= 768 ? (
          /* ---------- MOBILE BOTTOM SHEET ---------- */
          <div
            className="order-easy-overlay"
            onClick={() => setShowOrderEasy(false)}
          >
            <div
              className="order-easy-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="order-easy-header">
                Upload Prescription
                <button onClick={() => setShowOrderEasy(false)}>✕</button>
              </div>

              <div className="order-easy-actions">
                <label className="order-easy-btn">
                  📷 Take Photo
                  <input
                    type="file"
                    accept="image/*"
                    capture="environment"
                    hidden
                  />
                </label>

                <label className="order-easy-btn">
                  🖼️ Upload from Gallery
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                  />
                </label>
              </div>
            </div>
          </div>
        ) : (
          /* ---------- DESKTOP CENTER POPUP ---------- */
          <div
            className="order-easy-desktop-overlay"
            onClick={() => setShowOrderEasy(false)}
          >
            <div
              className="order-easy-desktop-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="order-easy-header">
                Upload Prescription
                <button onClick={() => setShowOrderEasy(false)}>✕</button>
              </div>

              <div className="order-easy-actions">
                <label className="order-easy-btn">
                  📷 Take Photo
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                  />
                </label>

                <label className="order-easy-btn">
                  🖼️ Upload from Gallery
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                  />
                </label>
              </div>
            </div>
          </div>
        )
      )}












    </>
  );
};

export default Navbar;
