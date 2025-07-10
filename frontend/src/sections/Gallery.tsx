import { motion, type Variants } from "framer-motion";

const galleryImages = [
  "/images/whatsapp/img1.jpg",
  "/images/whatsapp/img2.jpg",
  "/images/whatsapp/img3.jpg",
  "/images/whatsapp/img4.jpg",
  "/images/whatsapp/img5.jpg",
  "/images/whatsapp/img9.jpg",
  "/images/whatsapp/img7.jpg",
  "/images/whatsapp/img8.jpg",
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
      <div className="flex items-center mb-6">
        <div className="mr-4 w-10 h-[4px] bg-orange rounded-full"></div>
        <h2 className="text-3xl font-bold text-blue">Gallery</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {galleryImages.map((src, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-xl shadow-md"
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
