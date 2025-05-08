import careerPaths from "../constants/careerPaths";
import CareerPathCard from "../components/careerPath.Card";
function CareerPaths() {
  return (
    <div className="container my-4">
      <h2 className="text-center color-main-yellow">CAREER PATHS</h2>
      <p className="text-center">
        At our organization, we believe in empowering individuals with Down
        syndrome to explore diverse career paths that align with their unique
        skills and interests. The UAE offers a variety of opportunities across
        sectors such as retail, hospitality, and creative arts. With the right
        support and training, individuals can thrive in fulfilling roles that
        not only enhance their personal growth but also contribute positively to
        the community. We are committed to promoting inclusive employment
        practices that celebrate the abilities of every individual, helping them
        achieve their professional goals and lead independent lives.
      </p>

      <div className="row mt-4 ">
        {careerPaths.map((item, key) => {
          return (
            <div className="col-lg-4 col-md-6 cpl-12 p-2">
              <CareerPathCard
                key={`CareerPathCard- ${key}`}
                title={item?.title}
                content={item?.content}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CareerPaths;
