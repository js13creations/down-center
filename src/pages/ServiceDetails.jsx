import { useParams, useNavigate } from "react-router-dom";
import { services } from "../constants/services";
import { useEffect, useState, useRef } from "react";
import sendEmail from "../services/EmailSender";
import Modal from "react-modal";
function ServiceDetails() {
  const { code } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.code === code);
  const modalRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    date: "",
    timeSlots: "",
  });

  const [sendingNow, setSendingNow] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [emailWasSent, setEmailWasSent] = useState(null);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  useEffect(() => {
    const VITE_EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    console.log("VITE_EMAILJS_SERVICE_ID ", VITE_EMAILJS_SERVICE_ID);
    Modal.setAppElement("#root");
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
    resetForm();
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleRadioChange = (e) => {
    const { value } = e.target;
    setForm((prev) => ({
      ...prev,
      timeSlots: value,
    }));
  };

  useEffect(() => {
    console.log("FORM : ", form);
  }, [form]);

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      mobile: "",
      date: "",
      timeSlots: "",
    });
  };

  const handleSubmit = async (e) => {
    // setShowSuccessModal(true);
    e.preventDefault();
    setSendingNow(true);
    setEmailError(null);

    let content = `
      Service : ${service.title}
      Name : ${form?.name}
      Email : ${form?.email}
      Mobile : ${form?.mobile}
      Day : ${form?.date}
      Time : ${form?.timeSlots}
    `;

    const templateParams = {
      email: "jaafar.ali.in@gmail.com",
      content: content,
    };

    try {
      const result = await sendEmail(templateParams);

      if (result.success) {
        openModal();
        setEmailError("");
      } else {
        setEmailError(result.message || "Failed to send booking confirmation");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setEmailError("Failed to send booking. Please try again.");
    } finally {
      setSendingNow(false);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    resetForm();
  };
  const goToSurvey = () => {
    closeModal();
    navigate(`/${code}/survey`, {
      state: {
        serviceDetails: {
          title: service?.title,
          duration: service?.duration,
          price: service?.priceEnglish,
          bookingDetails: form,
        },
      },
    });
  };

  if (!service) {
    return <div className="container my-4">Service not found.</div>;
  }

  const timeOptions = [
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
  ];

  return (
    <div className="container mb-5 mt-2">
      <h2 className="color-main-yellow mb-4">{service.title}</h2>
      <div className="row">
        {/* Left column - service info */}
        <div className="col-md-6">
          <h4>Book This Service</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Mobile</label>
              <input
                type="tel"
                className="form-control"
                name="mobile"
                value={form.mobile}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Choose a Day</label>
              <input
                type="date"
                className="form-control"
                name="date"
                value={form.date}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Select Time</label>
              <div className="d-flex flex-wrap gap-2">
                {timeOptions.map((time, idx) => (
                  <div key={idx} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="timeSlots" // Same name for all radio buttons in the group
                      id={`time-${idx}`}
                      value={time} // Use the actual time option as value
                      checked={form.timeSlots === time} // Compare with current value
                      onChange={handleRadioChange} // Renamed to be more accurate
                      required={idx === 0} // Only need required on one of them
                    />
                    <label className="form-check-label" htmlFor={`time-${idx}`}>
                      {time}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <button
              disabled={sendingNow ? true : false}
              type="submit"
              className="btn btn-primary mt-2"
            >
              {sendingNow ? (
                <>
                  <span class="">Sending Email...</span>
                  <span class="spinner-border text-light" role="status">
                    <span class="visually-hidden"></span>
                  </span>
                </>
              ) : (
                <span>Submit Booking</span>
              )}
            </button>
          </form>
          <div>
            {emailError && (
              <div class="alert alert-danger mt-3" role="alert">
                <span>{emailError}</span>
              </div>
            )}
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <p>
            <strong>Duration:</strong> {service.duration}
          </p>
          <p>
            <strong>Price:</strong> {service.priceEnglish}
          </p>
          <p>
            <strong>Arabic Price:</strong> {service.priceArabic}
          </p>
        </div>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h3 className="mb-4">The request has been submitted successfully!</h3>
          <button className="btn" onClick={closeModal}>
            close
          </button>
          <button className="btn btn-success" onClick={goToSurvey}>
            Go to survey
          </button>
        </Modal>
      </div>
    </div>
  );
}

export default ServiceDetails;
