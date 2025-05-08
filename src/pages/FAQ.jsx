import faqData from "../constants/faqData";
function FAQ() {
  return (
    <div className="container my-4">
      <h2 className="text-center color-main-yellow">FAQ</h2>
      <div className="row p-3 my-4 bg-light radius-8">
        <div className="p-3 col">
          {faqData.map((item, key) => {
            return (
              <div className="mb-4">
                <h3 className="color-main-blue">{item?.title}</h3>
                <p>{item?.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
