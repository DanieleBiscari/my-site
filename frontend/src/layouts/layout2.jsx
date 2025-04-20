import Navbar from "../components/Navbar";

const layout = ({ children, bgImage }) => {
  return (
    <>
        <Navbar />
        <div className={`${bgImage} bg-no-repeat bg-cover relative`}>
          {children}  
        </div>
    </>
  );
};

export default layout;
