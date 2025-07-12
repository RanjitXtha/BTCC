import { motion, type Variants } from "framer-motion";
import OrangeLine from "../components/OrangeLine";

const galleryImages = [
  "/images/Home/img1.jpg",
  "/images/Home/img2.jpg",
  "/images/Home/img3.jpg",
  "/images/Home/img4.jpg",
  "/images/Home/img5.jpg",
  "/images/Home/img9.jpg",
  "/images/Home/img7.jpg",
  "/images/Home/img8.jpg",
];

const zoomIn:Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Gallery = () => {
  return (
    <section className="padding padding-y bg-white">
      <div className="flex items-center h-8 mb-6">
        <OrangeLine />
        <h2 className="text-4xl font-bold">Gallery</h2>
      </div>
        <p className="font-semibold mb-10">
          A glimpse into our training environment, hands-on sessions, and real-world scaffolding projects.
        </p>
    

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {galleryImages.map((src, index) => (
          <motion.div
            key={index}
            className="overflow-hidden custom-shadow"
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
          >
            <img
              src={src}
              alt={`gallery-${index + 1}`}
              className="w-full h-[250px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
