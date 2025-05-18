import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import sendEmail from "../services/EmailSender";
import Modal from "react-modal";

function Survey() {
  const { code } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState("");

  const [sendingNow, setSendingNow] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  // Get service details from navigation state
  const { serviceDetails } = location.state || {};
  console.log("serviceDetails", serviceDetails);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
    setFeedback("");
  }
  function goToServices() {
    navigate(`/ddsc`);
    setFeedback("");
  }

  // Fallback in case user accesses directly
  if (!serviceDetails) {
    return (
      <div className="container my-5">
        <div className="alert alert-warning">
          No booking details found. Please start from the booking page.
        </div>
        <button
          className="btn btn-primary"
          onClick={() => navigate(`/services/${code}`)}
        >
          Go to Booking Page
        </button>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSendingNow(true);
    setEmailError(null);

    let content = `
      Service : ${serviceDetails?.title || ""}
      Name : ${serviceDetails?.bookingDetails?.name || ""}
      Email : ${serviceDetails?.bookingDetails?.email || ""}
      Mobile : ${serviceDetails?.bookingDetails?.mobile || ""}
      Day : ${serviceDetails?.bookingDetails?.date || ""}
      Time : ${serviceDetails?.bookingDetails?.timeSlots || ""}

      Feedback : ${feedback}
    `;

    const templateParams = {
      email: "info@ddsc.ae",
      content: content,
    };

    try {
      const result = await sendEmail(templateParams);

      if (result.success) {
        openModal();
        setEmailError("");
      } else {
        setEmailError(result.message || "Failed to send feedback confirmation");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setEmailError("Failed to send feedback. Please try again.");
    } finally {
      setSendingNow(false);
    }
  };

  return (
    <div className="container my-5">
      <div className="card">
        <div className="card-header">
          <h2>Service Feedback</h2>
          <p className="mb-0">For: {serviceDetails.title}</p>
        </div>

        <div className="card-body">
          <div className="d-flex flex-column">
            <span>
              <span className="fw-bold">Name : </span>
              {serviceDetails?.bookingDetails?.name}
            </span>
            <span>
              <span className="fw-bold">Email : </span>
              {serviceDetails?.bookingDetails?.email}
            </span>
            <span>
              <span className="fw-bold">Mobile : </span>
              {serviceDetails?.bookingDetails?.mobile}
            </span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <label htmlFor="feedback" className="form-label">
                How was your experience with our service?
              </label>
              <textarea
                id="feedback"
                className="form-control"
                rows="5"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              />
            </div>

            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate(`/services/${code}`)}
              >
                Back to Booking
              </button>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={sendingNow}
              >
                {sendingNow ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      aria-hidden="true"
                    ></span>
                    <span className="ms-2">Submitting...</span>
                  </>
                ) : (
                  "Submit Feedback"
                )}
              </button>
            </div>
          </form>
          <div>
            {emailError && (
              <div class="alert alert-danger mt-3" role="alert">
                <span>{emailError}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
            },
          }}
          contentLabel="Example Modal"
        >
          <h3 className="mb-4">
            The feedback has been submitted successfully!
          </h3>
          <button className="btn" onClick={closeModal}>
            close
          </button>
          <button className="btn btn-success" onClick={goToServices}>
            Go to services
          </button>
        </Modal>
      </div>
    </div>
  );
}

export default Survey;
