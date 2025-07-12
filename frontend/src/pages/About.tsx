import { motion, type Variants } from "framer-motion";
import OrangeLine from "../components/OrangeLine";

const features = [
  {
    icon: "/images/about-page/helmet.png",
    text: "Safety-first Approach",
  },
  {
    icon: "/images/about-page/Time.png",
    text: "Timely Project Delivery & Compliance",
  },
  {
    icon: "/images/about-page/certified.png",
    text: "UK Certified Training (Highfield International)",
  },
  {
    icon: "/images/about-page/manpower.png",
    text: "Skilled Manpower for Local & Global Projects",
  },
  {
    icon: "/images/about-page/scafold.png",
    text: "Scaffold Design, Installation & Supervision",
  },
];

const fadeInUp:Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInLeft:Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInRight:Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section className="pt-[10rem] mb-[7rem] padding">
      <div className="grid lg:grid-cols-[1fr_1fr] gap-[5vw]">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col justify-between"
        >
          <div className="flex mb-6">
            <span>
              <OrangeLine />
            </span>
            <h2 className="text-4xl font-bold">ABOUT US</h2>
          </div>

          <div className="my-[3rem]">
            <p className="mb-6">
              BTCC International Scaffolding Services Pvt. Ltd. was founded with the
              vision to provide safe, certified, and professional scaffolding services
              for both local and international construction projects.
            </p>
            <p>
              Headquartered in Itahari, Nepal, we deliver complete scaffolding
              solutions, backed by international training, skilled manpower, and
              modern systems.
            </p>
          </div>

          <div className="flex bg-blue">
            <span>
              <OrangeLine />
            </span>

            <div className="flex items-center text-white w-full p-6">
              <p className="font-bold text-nowrap text-lg mr-8">OUR VISION</p>
              <p>
                To be trusted provider of scaffolding services and certified training,
                recognized for safety, skill, and global workforce readiness. We aim to set
                industry standards through quality, innovation, and international
                collaboration.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full h-full"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/images/training.jpeg"
            className="h-full min-h-auto 2xl:min-h-[35rem] w-full object-cover"
            alt="Scaffolding"
          />
        </motion.div>
      </div>

      <motion.div
        className="my-24 bg-orange text-white py-14 shadow grid grid-cols-1 gap-y-6 sm:grid-cols-3 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div>
          <p className="text-4xl font-bold">15+</p>
          <p className="mt-2 text-sm">Years of Experience</p>
        </div>
        <div className="sm:border-l sm:border-r border-white">
          <p className="text-4xl font-bold">100+</p>
          <p className="mt-2 text-sm">Projects Completed</p>
        </div>
        <div>
          <p className="text-4xl font-bold">50+</p>
          <p className="mt-2 text-sm">Working Employees</p>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-[1fr_1fr] gap-[5vw]">
        <motion.div
          className="h-full w-full"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/images/training.jpeg"
            className="h-full min-h-auto 2xl:min-h-[35rem] w-full object-cover"
            alt="Scaffolding"
          />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex bg-blue">
            <span>
              <OrangeLine />
            </span>

            <div className="flex items-center text-white w-full p-6">
              <p className="font-bold text-nowrap text-lg mr-8">OUR VISION</p>
              <p>
                To be trusted provider of scaffolding services and certified training,
                recognized for safety, skill, and global workforce readiness. We aim to set
                industry standards through quality, innovation, and international
                collaboration.
              </p>
            </div>
          </div>

          <ul className="my-[2rem] space-y-6 text-blue font-semibold">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-4">
                <img
                  src={feature.icon}
                  alt="feature"
                  className={`w-6 ${index === 0?'h-4':'h-6'}  mt-1`}
                />
                <p>{feature.text}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
