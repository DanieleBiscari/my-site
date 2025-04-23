import AboutChiSono from "../components/AboutChiSono";
import AboutPassioni from "../components/AboutPassioni";
import AboutObiettivi from "../components/AboutObiettivi";
import AboutFooter from "../components/AboutFooter";

const About = () => {
  return (
    <main className="flex justify-center items-center relative">
      {/* Overlay per contrasto */}
      <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm z-0" />
      <div className="bg-slate-50 backdrop-blur-md bg-opacity-50 w-[80%] p-10 flex justify-center flex-col gap-28 my-10 rounded-[3rem]">
        <AboutChiSono></AboutChiSono>
        <AboutPassioni></AboutPassioni>
        <AboutObiettivi></AboutObiettivi>
        <AboutFooter></AboutFooter>
      </div>
    </main>
  );
};

export default About;
