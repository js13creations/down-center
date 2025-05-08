import emailjs from "@emailjs/browser";

const sendEmail = async (emailData) => {
  const serviceId = "service_pitm5l7";
  const templateId = "template_yt8lf5k";
  const publicKey = "MG1IAQ2ty-Zb7CkmA";
  // const publicKey = "MG1IAQ2t";

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      emailData,
      { publicKey }
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
    publicKey: "MG1IAQ2ty-Zb7CkmA",
  });
};

export default sendEmail;