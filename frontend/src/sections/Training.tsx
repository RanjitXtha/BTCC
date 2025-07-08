import Button from "../components/Button"
import OrangeLine from "../components/OrangeLine";

const styles = [
  {
    bgColor: 'bg-orange',
    buttonColor: 'bg-white',
    textColor: 'text-white',
    buttonTextColor: 'text-orange',
  },
  {
    bgColor: 'bg-white',
    buttonColor: 'bg-blue',
    textColor: 'text-blue',
    buttonTextColor: 'text-white',
  },
  {
    bgColor: 'bg-blue',
    buttonColor: 'bg-orange',
    textColor: 'text-white',
    buttonTextColor: 'text-white',
  },
];

const trainings = [
    {
        title:'Cuplok & Scaffolding Training',
        description:'Learn to erect, dismantle, and work safely with Cuplok systems used worldwide.'
    },
    {
        title:'Practical Work at Height Training',
        description:'Hands-on safety training for real-world height work and fall prevention.'
    },
    {
        title:'Alloy Tower Training Program',
        description:'Get hands-on training in the assembly, use, and safety practices.'
    }
]

const Training = () => {
  return (
    <div className="relative grid grid-cols-[1fr_1fr] items-center text-white h-screen max-h-[1080px] overflow-hidden padding pr-0">
        
            <div className="flex">
              <span>
                  <OrangeLine />
              </span>
              
                <div className="flex flex-col gap-10 items-start justify-center">
                    <p className="text-large">Our Professional Training Programs</p>
                    <p>
                        At BTCC International Scaffolding & Safety Training Center Itahari, we offer globally certified training programs designed to prepare individuals for real-world scaffolding and construction safety roles.
                    </p>

                    <Button content={'Explore'} />
                </div>
            </div>
            

            <div className="relative w-full flex gap-8 overflow-scroll scrollbar-hide ">
                {
                    trainings.map((training, index) => {
  const style = styles[index % 3];

  return (
    <div key={index} className={`w-[19rem] shrink-0 h-full ${style.bgColor}`}>
      <div className="w-full h-[12rem] overflow-hidden">
        <img className="translate-y-[-4rem]" src="/images/training1.jpg" alt="training" />
      </div>
      <div className={`flex flex-col items-start gap-4 px-[1.5rem] py-[2rem] ${style.textColor}`}>
        <p className="font-bold">{training.title}</p>
        <p className="text-sm">{training.description}</p>
        <button className={`custom-shadow font-bold px-[2rem] py-[0.5rem] ${style.buttonColor} ${style.buttonTextColor}`}>
          Learn More
        </button>
      </div>
    </div>
  );
})
                        }

                    <button className="absolute w-15 h-15 shadow-black drop-shadow-xl bg-orange z-2 top-1/2   -translate-y-1/2 right-[3rem]">+</button>

            
            </div>
        
         
        <div className='overflow-clip absolute top-0 -z-1 left-0 w-full bg-black h-screen'>
           <img className="absolute bg-image " src="/images/training.jpeg" alt="background-image" />  
        </div>

        
    </div>
  )
}

export default Training