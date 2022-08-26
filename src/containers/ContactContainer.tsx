import Heading from "../components/Heading";
import { SECTIONS } from "../data/data";
import { ReactComponent as Illustration } from "../assets/email.svg";
import Input from "../components/Input";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert, { AlertProps } from "../components/Alert";

const serviceID = "service_zpwp74o";
const templateID = "template_6whu90y";
const publicKey = "WozeZgfLm7ES9xPa4";

const ContactConrainer: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");
  const [flag, setFlag] = useState<AlertProps["flag"]>("none");
  const [validationError, setValidationError] = useState(false);

  const handleSubmit = () => {
    if (!name || !message || !email) {
      setValidationError(true);
      return;
    }
    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    };
    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (result) => {
        setFeedback((m) => {
          setFlag("success");
          setTimeout(() => setFlag("none"), 3000);
          setEmail("");
          setMessage("");
          setName("");
          return "Thank you for the message.";
        });
      },
      (error) => {
        setFeedback((m) => {
          setFlag("error");
          setTimeout(() => setFlag("none"), 3000);
          return "Something is wrong! Try one more time.";
        });
      }
    );
  };

  return (
    <div className="mx-3 lg:mx-12">
      <Heading
        heading={SECTIONS[5]}
        id="contact"
        illustration={<Illustration className=" max-h-48 mx-auto" />}
      />
      <div className="relative mt-5 sm:mx-10  wrap bg-base-200 rounded-lg">
        <div className="p-7 ">
          <h3>I'm always open to discussing job offers and partnerships.</h3>
          <Input
            label="Name:"
            value={name}
            setValue={setName}
            required={validationError}
          />
          <Input
            label="Email:"
            value={email}
            setValue={setEmail}
            required={validationError}
          />
          <Input
            label="Message:"
            value={message}
            setValue={setMessage}
            required={validationError}
          />
          <button
            className={`rounded-full btn btn-primary text-primary-content mb-7`}
            onClick={handleSubmit}
          >
            Submit
          </button>
          <Alert message={feedback} flag={flag} />
        </div>
      </div>
    </div>
  );
};

export default ContactConrainer;
