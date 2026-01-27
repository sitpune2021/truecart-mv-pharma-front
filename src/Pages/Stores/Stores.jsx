import React from "react";
import "./Stores.css";
import { assets } from "../../assets/assets";

const storeData = [
  {
    id: 1,
    name: "True Cart Pharmacy",
    address: "Tagore Nagar, Vikhroli East, Mumbai, Maharashtra",
    distance: "0.4 km",
    time: "5 min away",
    phone: "+91 98765 43210",
    image: assets.True_cart_store,
    lat: 19.1171,
    lng: 72.8634,
  },
  {
    id: 2,
    name: "True Cart Pharmacy",
    address: "Hiranandani Garden, Powai, Mumbai, Maharashtra",
    distance: "2.8 km",
    time: "9 min away",
    phone: "+91 98765 43210",
    image: assets.True_cart_store,
    lat: 19.1368,
    lng: 72.8267,
  },
  {
    id: 3,
    name: "True Cart Pharmacy",
    address: "LBS Marg, Ghatkopar West, Mumbai, Maharashtra",
    distance: "3.2 km",
    time: "11 min away",
    phone: "+91 98765 43210",
    image: assets.True_cart_store,
    lat: 19.0875,
    lng: 72.9073,
  },
  {
    id: 4,
    name: "True Cart Pharmacy",
    address: "Jangal Mangal Road, Bhandup West, Mumbai, Maharashtra",
    distance: "3.7 km",
    time: "12 min away",
    phone: "+91 98765 43210",
    image: assets.True_cart_store,
    lat: 19.1478,
    lng: 72.9372,
  },
  {
    id: 5,
    name: "True Cart Pharmacy",
    address: "Neptune Mall, Bhandup West, Mumbai, Maharashtra",
    distance: "4.1 km",
    time: "14 min away",
    phone: "+91 98765 43210",
    image: assets.True_cart_store,
    lat: 19.1416,
    lng: 72.9356,
  },
  {
    id: 6,
    name: "True Cart Pharmacy",
    address: "R City Mall, Ghatkopar West, Mumbai, Maharashtra",
    distance: "4.6 km",
    time: "15 min away",
    phone: "+91 98765 43210",
    image: assets.True_cart_store,
    lat: 19.0993,
    lng: 72.9151,
  },
];

const Stores = () => {
  return (
    <div className="store-layout">
      {/* LEFT : STORE LIST */}
      <div className="store-list">
        <h3 className="list-title">Nearby Stores</h3>

        {storeData.map((store) => (
          <div key={store.id} className="store-row">
            <img src={store.image} alt={store.name} />

            <div className="store-info">
              <h4>{store.name}</h4>
              <p>{store.address}</p>
              <span>
                {store.distance} • {store.time}
              </span>
            </div>

            <div className="store-icons">
              <a href={`tel:${store.phone}`}>📞</a>
              <a
                href={`https://www.google.com/maps?q=${store.lat},${store.lng}`}
                target="_blank"
                rel="noreferrer"
              >
                📍
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT : MAP */}
      <div className="store-map">
        {/* Search bar */}
        <div className="map-search">
          <input type="text" placeholder="Search for store" />
        </div>

        {/* Google Map iframe */}
        <iframe
          title="store-map"
          src="https://www.google.com/maps?q=Vikhroli%20Mumbai&output=embed"
          loading="lazy"
        ></iframe>

        {/* Auto Detect */}
        <button className="detect-btn">📍 Auto Detect Location</button>
      </div>
    </div>
  );
};

export default Stores;
