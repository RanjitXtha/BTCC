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

const About = () => {
    return (
        <section className="pt-[10rem] mb-[7rem] padding ">
            <div className="grid grid-cols-[1fr_1fr] gap-14">
                <div>
                    <div className="flex mb-6">
                        <span><OrangeLine /></span>
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
                            F modern systems.
                        </p>
                    </div>

                    <div className="flex bg-blue ">
                        <span><OrangeLine /></span>

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
                </div>

                <div className="w-full h-full">
                    <img src="/images/training.jpeg" className="h-full w-full object-cover" alt="Scaffolding" />



                </div>
            </div>

            <div className="my-24 bg-orange text-white py-14  shadow grid grid-cols-1 sm:grid-cols-3 text-center">
                <div>
                    <p className="text-4xl font-bold">15+</p>
                    <p className="mt-2 text-sm">Years of Experience</p>
                </div>
                <div className="border-t sm:border-t-0 sm:border-l sm:border-r border-white">
                    <p className="text-4xl font-bold">100+</p>
                    <p className="mt-2 text-sm">Projects Completed</p>
                </div>
                <div>
                    <p className="text-4xl font-bold">50+</p>
                    <p className="mt-2 text-sm">Working Employees</p>
                </div>
            </div>

            <div className="grid grid-cols-[1fr_1fr] gap-14">
                <div>
                    <div className="h-full w-full">
                        <img src="/images/training.jpeg" className="h-full w-full object-cover" alt="Scaffolding" />
                    </div>

                </div>
                <div>
                    <div className="flex bg-blue ">
                        <span><OrangeLine /></span>

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

                    <ul className=" my-[2rem] space-y-4 text-blue font-semibold">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <img src={feature.icon} alt="feature" className="w-6 h-6 mt-1" />
                                <p>{feature.text}</p>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>

        </section>


    );
};

export default About;
