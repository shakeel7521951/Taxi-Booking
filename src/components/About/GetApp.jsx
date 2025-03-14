import bgImage from "../../assets/about/4.jpg";
import google from '../../assets/about/google-play.png';
import app from '../../assets/about/app-store.png';
import iconCar from '../../assets/about/icon-car-4.99f44885.png';

const GetApp = () => {
  return (
    <div className="mt-10 relative">
      {/* Background Image with Overlay */}
      <div className="relative">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#000000ad]"></div>
      </div>

      {/* Yellow Shapes */}
      <div className="w-[100%] h-[100%] z-50 absolute top-0">
        <div
          className="w-[300px] h-[100%] right-0 absolute top-0 bg-[#FFEE02]"
          style={{ clipPath: "polygon(57% 0, 100% 0, 44% 100%, 0% 100%)" }}
        ></div>
        <div
          className="w-[300px] h-[100%] right-52 absolute top-0 bg-[#FFEE02]"
          style={{ clipPath: "polygon(57% 0, 100% 0, 44% 100%, 0% 100%)" }}
        ></div>
        <div>
            <img src={iconCar} className="car-animation absolute right-32 bottom-[-40px] w-[330px]" alt="Icon Car" />
        </div>
        <div className="w-[40%] ms-20 m-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            {" "}
            Get Free Citycar App On{" "}
            <span className="text-[#FFEE02]">Online Store</span>
          </h1>
          <p className="text-sm mt-2 text-white "> Competently re-engineer
            cross-media breed meta-services
          </p>
          <div className="flex mt-4 gap-3">
            <img src={google} className="w-34" alt="Google"/>
            <img src={app} className="w-34" alt="App store"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetApp;
