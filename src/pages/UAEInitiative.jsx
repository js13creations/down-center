import governmentInitiatives from "../constants/governmentInitiative";
import initiativeSide from "../assets/images/initiative-side.jpeg";

function UAEInitiative() {
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4 color-main-yellow">
        The UAE's initiatives for Down Syndrome Awareness
      </h2>
      <p className="text-center">
        The UAE has acomplished inclusive policies and initiatives to support
        the career development of individuals with Down syndrome, ensuring equal
        opportunities in the workforce. Vocational training programs in fields
        like hospitality, technology, and creative arts help develop their
        skills, while workplace accommodations foster integration.
        Public-private partnerships further enhance job prospects by creating
        tailored employment opportunities and raising awareness about the
        capabilities of individuals with Down syndrome. These efforts reflect
        the UAE’s commitment to empowering people of determination and building
        an inclusive society.
      </p>

      <div className="row p-3 mt-5 bg-light radius-8">
        <div className="p-3 col-md-7 col-sm-12 order-md-1 order-sm-2 ">
          {governmentInitiatives.map((item, key) => {
            return (
              <div className="mb-4">
                <h3 className="color-main-blue">{item?.title}</h3>
                <p>{item?.content}</p>
              </div>
            );
          })}
        </div>
        <div className="p-3 col-md-5 col-sm-12 order-md-2 order-sm-1">
          <img
            className="w-100 radius-8"
            alt="initiative image"
            src={initiativeSide}
          />
        </div>
      </div>
    </div>
  );
}

export default UAEInitiative;
