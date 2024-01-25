import React, { useRef, useState } from "react";
import Magnetic from "../../Pages/Magnetic";
import ActionButton from "../../Pages/ActionButton";
import { motion } from "framer-motion";
import Nav from "../../Pages/Nav";
import emailjs from "@emailjs/browser";
// import "../../css/style.css";
function Contact() {
  const [clientName, setClientName] = useState();
  const [clientEmail, setClientEmail] = useState();
  const [clientService, setClientService] = useState();
  const [clientMessage, setClientMessage] = useState();

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setButtonDisabled(true);

    try {
      const result = await emailjs.sendForm(
        "service_ks2n17a",
        "template_mlh4rgj",
        form.current,
        "-A6xyy6bMU1XNQ4Wm"
      );

      // Handling success
      alert("Email sent successfully. You would be contacted soon.");
      console.info(result.text);
    } catch (error) {
      // Handling error
      alert("An error occurred. Please try again.");
      console.error(error);
    } finally {
      // Resetting form fields after sending the email
      setClientName("");
      setClientEmail("");
      setClientService("");
      setClientMessage("");
      setButtonDisabled(false); // Re-enabling the submit button
    }
  };

  return (
    <div>
      <div className="container">
        <Nav />
        <div classsName="contact-heading">
          <h3>Your vision. My code. Let's build it 💻.</h3>
        </div>

        {/* <div>
          <h4>
            Want to discuss a startup collaboration? I'm most definitely game
            😉.
          </h4>
        </div> */}

        <form ref={form} onSubmit={sendEmail}>
          <motion.label
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4 }}
          >
            What is your Name <span>*</span> <br />
            <input
              required
              type="text"
              name="client_name"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </motion.label>
          <label>
            What is your Email <span>*</span> <br />
            <input
              required
              type="text"
              name="client_email"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
            />
          </label>
          <label>
            What services are you looking to get <span>*</span> <br />
            <input
              required
              type="text"
              name="client_service"
              value={clientService}
              onChange={(e) => setClientService(e.target.value)}
            />
          </label>
          <label>
            What is your message <span>*</span> <br />
            <textarea
              required
              name="client_message"
              value={clientMessage}
              onChange={(e) => setClientMessage(e.target.value)}
            ></textarea>
          </label>
          <div className="contact-button">
            <Magnetic>
              <ActionButton
                type="submit"
                value="Send Message"
                bgcolor="#b8860b"
                color="#000"
                isDisabled={buttonDisabled}
              />
            </Magnetic>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
