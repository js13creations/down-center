import ServiceCard from "../components/serviceCard";
import { services } from "../constants/services";

function DDSC() {
  return (
    <div className="container my-4">
        <h2 className="text-center color-main-yellow">SERVICES</h2>
      <div className="row my-4">
        {services.map((item, key) => (
          <div key={`ServiceCardCol-${key}`} className="col-lg-4 col-md-6 cpl-12 p-2">
            <ServiceCard key={`ServiceCard-${key}`} service={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DDSC;
