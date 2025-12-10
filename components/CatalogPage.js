"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "@/Styles/Products.module.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { items } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLang } from "./LangContext";




export default function CatalogContent() {
  const { t } = useLang();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const categories = [
    "All",
    "Kitchens",
    "Sliding-Wardrobes",
    "Single-Bed",
    "Double-Bed",
    "Dressing-units",
    "Shoe-rack",
    "Working-tables",
    "Accent-chairs",
    "Tall-unit",
    "Study-Unit",
    "Hinged-Wardrobe",
    "Executive-Table",
    "Console",
    "Crockery-unit",
    "Below-stairs",
     "Tv-unit",
    "Doors",
    "Door-panelling",
    "Partitions",
    "Dining",
    "Breakfast-counter",
    "Wash-unit",
    "Mouldings",
    "Center-table",
    "Sofa",
    "Couch",
  ];
  const [category, setCategory] = useState(initialCategory);
  const [filtered, setFiltered] = useState(items);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const swiperRef = useRef(null);
  const [autoStopped, setAutoStopped] = useState(false);
  const grouped = items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  useEffect(() => {
    if (category === "All") {
      setFiltered(items);
    } else {
      setFiltered(items.filter((i) => i.category === category));
    }
  }, [category]);

  const categoryThumbs = categories
    .map((cat) => {
      const catItems = items.filter((i) => i.category === cat);
      return catItems.length > 0 ? catItems[0] : null;
    })
    .filter(Boolean);

const selectedItems = selectedCategory
  ? items.filter((i) => i.category === selectedCategory)
  : [];


  useEffect(() => {
    if (selectedCategory && swiperRef.current && !autoStopped) {
      try {
        swiperRef.current.autoplay?.start();
      } catch (e) { }
    }
  }, [selectedCategory]);

  const stopAutoplay = () => {
    if (!autoStopped && swiperRef.current) {
      swiperRef.current.autoplay?.stop();
      setAutoStopped(true);
    }
  };

  const restartAutoplay = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay?.start();
      setAutoStopped(false);
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
      restartAutoplay();
    }
  };
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
      restartAutoplay();
    }
  };

    const translatedCategory =
    category === "All"
      ? t.catalogHeadingAll
      : t.catalogHeadingCategory?.replace(
          "{category}",
          t[`cat_${category}`] || category
        );

  const translatedSub =
    category === "All"
      ? t.catalogSubAll
      : t.catalogSubCategory?.replace(
          "{category}",
          (t[`cat_${category}`] || category).toLowerCase()
        );

  return (
    <section className={styles.products}>
     <h2>{translatedCategory}</h2>
      <p className={styles.sub}>{translatedSub}</p>

      <div className={styles.filters}>
        {categories.map((c) => (
          <button
            key={c}
            className={`${styles.pill} ${category === c ? styles.active : ""}`}
            onClick={() => setCategory(c)}
          >
            {t[`cat_${c}`] || c}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {categoryThumbs.map((cat) => (
          <div key={cat.category} className={styles.card}>
            <div className={styles.imgBox}>
              <Image
                src={cat.src}
                alt={cat.alt}
                fill
                className={styles.productImage}
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className={styles.overlay}>
                <button
                  className={styles.viewBtn}
                  onClick={() => {
                    setSelectedCategory(cat.category);
                    setAutoStopped(false);
                  }}
                >
                  {t.catalogViewBtn.replace("{category}", cat.category)}
                </button>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3>{cat.category}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedCategory && selectedItems.length > 0 && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setSelectedCategory(null)}
        >
          <div
            className={styles.modalBox}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setSelectedCategory(null)}
            >
              ✕
            </button>

            <div className={styles.modalLeft}>
              <button
                className={`${styles.navBtn} ${styles.prevBtn}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Previous"
              >
                ‹
              </button>

              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={false}

                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className={styles.swiperContainer}
                touchStartPreventDefault={false}
                simulateTouch={true}
              >
                {selectedItems.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div
                      style={{ width: "100%", display: "flex", justifyContent: "center" }}
                    >
                      <TransformWrapper
                        initialScale={1}
                        minScale={1}
                        maxScale={4}
                        wheel={{ step: 0.2 }}
                        panning={{ velocityDisabled: true }}
                        pinch={{ step: 5 }}
                        doubleClick={{ disabled: false }}
                        onZoomStart={stopAutoplay}
                        onPanningStart={stopAutoplay}
                      >
                        <TransformComponent>
                          <Image
                            src={item.src}
                            alt={item.alt}
                            width={800}
                            height={500}
                            className={styles.modalImg}
                            onClick={(e) => {
                              e.stopPropagation();
                              stopAutoplay();
                            }}
                          />
                        </TransformComponent>
                      </TransformWrapper>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                className={`${styles.navBtn} ${styles.nextBtn}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next"
              >
                ›
              </button>
            </div>
            {/* <div className={styles.modalRight}>
              <h3>{selectedItems[0]?.category}</h3>
              <p className={styles.modalDesc}>
                Explore all our {selectedItems[0]?.category.toLowerCase()} designs — each crafted with precision, style, and durability.
              </p>

              <button
                className={styles.catalogBtn}
                onClick={() => {
                  router.push(`/catalog?category=${selectedCategory}`)
                }}
              >
                View All Designs →
              </button>


              <p className={styles.modalCTA}>
                Interested in something similar?{" "}
                <a href="#contact">Let’s discuss your project.</a>
              </p>
            </div> */}
          </div>
        </div>
      )}
    </section>
  );
}

// export default function CatalogPage() {
//   return (
//     <Suspense fallback={<div>Loading catalog...</div>}>
//       <CatalogContent />
//     </Suspense>
//   );
// }