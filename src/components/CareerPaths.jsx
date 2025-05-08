import SectionTitle from "./SectionTitle";
function CareerPaths() {
  return (
    <div className="row my-5">
      <div className="col-12">
        <SectionTitle
          size="h3"
          title={"CAREER PATHS"}
          classes={"color-main-yellow"}
          goto='/career-paths'
        />
      </div>
      <div className="col-12">
        <ul className="list-group list-group-flush">
          <li class="list-group-item ">Positions in hotels reception</li>
          <li class="list-group-item ">Barista / Waiter</li>
          <li class="list-group-item ">Nursery assistant</li>
          <li class="list-group-item ">Pet sitter</li>
          <li class="list-group-item ">Cashier</li>
          <li class="list-group-item ">Artist</li>
          <li class="list-group-item ">
            Participating in community service / Volunteering
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CareerPaths;
