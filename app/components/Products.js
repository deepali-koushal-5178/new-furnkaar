"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../../Styles/Products.module.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Products() {
  const items = [
    {
      id: 1,
      src: "/images/kitchen1.jpg",
      name: "L-Shaped Modular Kitchen",
      category: "Kitchens",
      alt: "L-shaped modular kitchen design",
      price: "₹45,000 onwards",
      desc: "Smart L-shaped modular kitchen with efficient corner storage and matte laminate finish.",
    },
    {
      id: 2,
      src: "/images/kitchen2.jpg",
      name: "Straight Kitchen",
      category: "Kitchens",
      alt: "Straight kitchen design",
      price: "₹42,000 onwards",
      desc: "Compact straight kitchen design ideal for apartments, crafted with HDHMR boards and soft-close drawers.",
    },
    {
      id: 3,
      src: "/images/kitchen3.jpg",
      name: "U-Shaped Kitchen",
      category: "Kitchens",
      alt: "U-shaped modular kitchen",
      price: "₹48,000 onwards",
      desc: "Spacious U-shaped modular kitchen offering maximum countertop area with premium glossy finish.",
    },
    {
      id: 4,
      src: "/images/kitchen4.jpg",
      name: "Island Kitchen",
      category: "Kitchens",
      alt: "Island modular kitchen design",
      price: "₹55,000 onwards",
      desc: "Luxurious island kitchen design featuring a central counter for dining and extra workspace.",
    },
    {
      id: 5,
      src: "/images/wardrobe1.jpg",
      name: "Sliding Wardrobe",
      category: "Wardrobes",
      alt: "Sliding wardrobe design",
      price: "₹32,000 onwards",
      desc: "Modern sliding wardrobe with smooth glide doors and full-length mirrors for a sleek look.",
    },
    {
      id: 6,
      src: "/images/wardrobe2.jpg",
      name: "Hinged Wardrobe",
      category: "Wardrobes",
      alt: "Hinged door wardrobe",
      price: "₹28,000 onwards",
      desc: "Classic hinged wardrobe with sturdy handles and customizable internal storage layout.",
    },
    {
      id: 7,
      src: "/images/wardrobe3.jpg",
      name: "Corner Wardrobe",
      category: "Wardrobes",
      alt: "Corner wardrobe design",
      price: "₹36,000 onwards",
      desc: "Space-saving corner wardrobe built to maximize bedroom storage with elegant wooden texture.",
    },
    {
      id: 8,
      src: "/images/wardrobe4.jpg",
      name: "Walk-in Wardrobe",
      category: "Wardrobes",
      alt: "Walk-in closet design",
      price: "₹60,000 onwards",
      desc: "Premium walk-in wardrobe setup with LED lighting, shelving units, and a luxury dressing section.",
    },

    {
      id: 9,
      src: "/images/tv1.jpg",
      name: "Wall-mounted Unit",
      category: "TV Units",
      alt: "TV wall unit design",
      price: "₹18,000 onwards",
      desc: "Elegant wall-mounted TV unit with hidden wire channels and floating shelves for décor.",
    },
    {
      id: 10,
      src: "/images/tv2.jpg",
      name: "Floating TV Unit",
      category: "TV Units",
      alt: "Floating tv unit design",
      price: "₹20,000 onwards",
      desc: "Minimal floating TV unit crafted with engineered wood and glossy finish panels.",
    },
    {
      id: 11,
      src: "/images/tv3.jpg",
      name: "Panel TV Unit",
      category: "TV Units",
      alt: "TV panel unit",
      price: "₹24,000 onwards",
      desc: "Contemporary TV panel unit with backlit wall design and integrated display shelves.",
    },
    {
      id: 12,
      src: "/images/tv4.jpg",
      name: "Corner TV Unit",
      category: "TV Units",
      alt: "Corner TV unit",
      price: "₹26,000 onwards",
      desc: "Compact corner TV unit perfect for small living spaces, offering modern storage design.",
    },

    {
      id: 13,
      src: "/images/bed1.jpg",
      name: "Storage Bed",
      category: "Beds",
      alt: "Storage bed with drawers",
      price: "₹40,000 onwards",
      desc: "Multi-functional storage bed with hydraulic lift-up compartments and sturdy wooden base.",
    },
    {
      id: 14,
      src: "/images/bed2.jpg",
      name: "Upholstered Bed",
      category: "Beds",
      alt: "Fabric upholstered bed",
      price: "₹38,000 onwards",
      desc: "Soft upholstered bed with premium fabric headboard and durable wooden frame.",
    },
    {
      id: 15,
      src: "/images/bed3.jpg",
      name: "King Size Bed",
      category: "Beds",
      alt: "King size bed design",
      price: "₹48,000 onwards",
      desc: "Elegant king-size bed with engineered wood and spacious storage drawers below.",
    },
    {
      id: 16,
      src: "/images/bed1.jpg",
      name: "Wooden Bed",
      category: "Beds",
      alt: "Solid wooden bed design",
      price: "₹43,000 onwards",
      desc: "Classic solid wood bed featuring natural grain texture and durable build quality.",
    },

    {
      id: 17,
      src: "/images/office1.jpg",
      name: "Executive Desk",
      category: "Office Furniture",
      alt: "Executive office desk",
      price: "₹28,000 onwards",
      desc: "Elegant executive desk with integrated drawers, cable ports, and a sleek finish.",
    },
    {
      id: 18,
      src: "/images/office2.jpg",
      name: "Office Chair",
      category: "Office Furniture",
      alt: "Ergonomic office chair",
      price: "₹8,000 onwards",
      desc: "Comfortable ergonomic office chair with lumbar support and adjustable height feature.",
    },
    {
      id: 19,
      src: "/images/office3.jpg",
      name: "Workstation Table",
      category: "Office Furniture",
      alt: "Office workstation table",
      price: "₹30,000 onwards",
      desc: "Functional workstation table ideal for offices or home setups, featuring cable management slots.",
    },
    {
      id: 20,
      src: "/images/office4.jpg",
      name: "Storage Cabinets",
      category: "Office Furniture",
      alt: "Office storage cabinet",
      price: "₹22,000 onwards",
      desc: "Durable storage cabinets with multiple compartments and smooth-finish doors for modern offices.",
    },
  ];

  const categories = ["All", ...Array.from(new Set(items.map((i) => i.category)))];
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <section className={styles.products}>
      <h2>Our Product Categories</h2>
      <p className={styles.sub}>
        From modular kitchens to wardrobes, beds, TV units, and office furniture — explore our handcrafted range.
      </p>

      <div className={styles.filters}>
        {categories.map((c) => (
          <button
            key={c}
            className={`${styles.pill} ${active === c ? styles.active : ""}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.imgBox}>
              <Image
                src={item.src}
                alt={item.name}
                fill
                className={styles.productImage}
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className={styles.overlay}>
                <span className={styles.price}>{item.price}</span>
                <button className={styles.viewBtn} onClick={() => setSelected(item)}>
                  View Details
                </button>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3>{item.name}</h3>
              <p>{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className={styles.modalBackdrop} onClick={() => setSelected(null)}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setSelected(null)}>✕</button>
            {/* <div className={styles.modalLeft}>
              <Image
                src={selected.src}
                alt={selected.name}
                fill
                className={styles.modalImg}
              />
            </div> */}
            <div className={styles.modalLeft}>
              <TransformWrapper
                initialScale={1}
                minScale={1}
                maxScale={4}
                wheel={{ step: 0.2 }}
              >
                <TransformComponent>
                  {/* <div className={styles.zoomImageBox}> */}
                  <Image
                    src={selected.src}
                    alt={selected.name}
                    width={600}
                    height={400}
                    className={styles.modalImg}
                  />
                  {/* </div> */}
                </TransformComponent>
              </TransformWrapper>
            </div>


            <div className={styles.modalRight}>
              <h3>{selected.name}</h3>
              <p className={styles.modalCat}>{selected.category}</p>
              <p className={styles.modalDesc}>{selected.desc}</p>
              <span className={styles.modalPrice}>{selected.price}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
