import emailjs from "@emailjs/browser";

const sendEmail = async (emailData) => {
  const VITE_EMAILJS_SERVICE_ID = await import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const VITE_EMAILJS_TEMPLATE_ID = await import.meta.env
    .VITE_EMAILJS_TEMPLATE_ID;
  const VITE_EMAILJS_PUBLIC_KEY = await import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  console.log({
    VITE_EMAILJS_SERVICE_ID,
    VITE_EMAILJS_TEMPLATE_ID,
    VITE_EMAILJS_PUBLIC_KEY,
  });
  try {
    const response = await emailjs.send(
      VITE_EMAILJS_SERVICE_ID,
      VITE_EMAILJS_TEMPLATE_ID,
      emailData,
      VITE_EMAILJS_PUBLIC_KEY
    );

    console.log("SUCCESS!", response.status, response.text);
    return {
      success: true,
      message: "Email sent successfully!",
      response,
    };
  } catch (error) {
    console.log("FAILED...", error);
    return {
      success: false,
      message: "Failed to send email",
      error: error.text || error.toString(),
    };
  }
};

export const initEmailJS = () => {
  emailjs.init({
    publicKey: "13hYvJQNeeu5diz_Z",
  });
};

export default sendEmail;
