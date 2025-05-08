import Aboutus from "../components/Aboutus";
import CareerPaths from "../components/CareerPaths";
import homeTop from "../assets/images/hometop.jpeg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="w-100 home-header-img">
        <div className="text-light home-header-content ">
          <h1 className="text-center">Down Career</h1>
          <p className="text-center">
            Helping individuals with Down Syndrome shape their future.
          </p>
        </div>
      </div>
      <div className="container ">
        <div className="row p-3 mt-5 bg-light radius-8">
          <div className="p-3 d-flex justify-content-center col-md-5 col-sm-12">
            <img src={homeTop} alt="Home Top Image" className="radius-8 img-fluid max-h-320" />
          </div>
          <div className="p-3 col-md-7 col-sm-12">
            <h1>
              BOOK AN APPOINTMENT WITH THE BEST EMPLOYERS FOR AN INTERVIEW NOW!
            </h1>
            <Link className="p-2 btn bg-main-blue book-an-appointment text-light" to={'/ddsc'} >
              BOOK AN APPOINTMENT
            </Link>
          </div>
        </div>
        <Aboutus />
        <CareerPaths />
      </div>
    </>
  );
}

export default Home;
