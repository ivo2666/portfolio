import Heading from "../components/Heading";
import { SECTIONS } from "../data/data";
import { ReactComponent as Illustration } from "../assets/email.svg";
import Input from "../components/Input";
import { useState } from "react";
import Alert, { AlertProps } from "../components/Alert";
import { postEmail } from "../service";

export interface EmailMessage {
  name: string;
  email: string;
  message: string;
}

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
      setFlag("error");
      setFeedback("All fields is required!");
      return;
    }
    postEmail({ name, email, message }).then(
      () => {
        setFeedback("Thank you for the message.");
        setFlag("success");
        setTimeout(() => setFlag("none"), 3000);
        setEmail("");
        setMessage("");
        setName("");
      }
    )
    .catch(() => {
      setFeedback("Something is wrong! Try one more time.");
      setFlag("error");
      setTimeout(() => setFlag("none"), 3000);
    })
  };

  return (
    <div className="mx-3 lg:mx-12">
      <Heading
        heading={SECTIONS[5]}
        id="contact"
        illustration={<Illustration className="mx-auto max-h-48" />}
      />
      <div className="relative mt-5 rounded-lg sm:mx-10 wrap bg-base-200">
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
