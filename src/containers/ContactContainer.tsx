import Heading from "../components/Heading";
import { SECTIONS } from "../data/data";
import { ReactComponent as Illustration } from "../assets/email.svg";
import Input from "../components/Input";
import { useState } from "react";
import Alert from "../components/Alert";
import { postEmail } from "../service";
import Spinner from "../components/spinner";

export interface EmailMessage {
  name: string;
  email: string;
  message: string;
}

const REQUIRED_FIELDS_MESSAGE = "All fields is required!"
const SUCCESS_MESSAGE ="Thank you for the message."
const ERROR_MESSAGE ="Something is wrong! Try one more time."

const ContactConrainer: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isFetching, setIsFetching] = useState(false)

  const handleSubmit = () => {
    if (!name || !message || !email) {
      setFeedback(REQUIRED_FIELDS_MESSAGE);
      return;
    }
    setIsFetching(true)
    postEmail({ name, email, message }).then(
      () => {
        setEmail("");
        setMessage("");
        setName("");
        setFeedback(SUCCESS_MESSAGE);
        setTimeout(() => setFeedback("") , 4000)
      }
    )
    .catch(() => {
      setFeedback(ERROR_MESSAGE);
      
    })
    .finally(() => setIsFetching(false))
  };

  const feedbackEl =
    isFetching ? (
      <Spinner />
    ) : (
      feedback && (
        <Alert
          type={feedback === SUCCESS_MESSAGE ? "success" : "error"}
          message={feedback}
        />
      )
    );

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
            label="Name*:"
            value={name}
            setValue={setName}
            required={feedback === REQUIRED_FIELDS_MESSAGE && !name}
          />
          <Input
            label="Email*:"
            value={email}
            setValue={setEmail}
            required={feedback === REQUIRED_FIELDS_MESSAGE && !email}
          />
          <Input
            label="Message*:"
            value={message}
            setValue={setMessage}
            required={feedback === REQUIRED_FIELDS_MESSAGE && !message}
          />
          <button
            className={`rounded-full btn btn-primary text-primary-content mb-7`}
            onClick={handleSubmit}
          >
            Submit
          </button>
          {feedbackEl}
        </div>
      </div>
    </div>
  );
};

export default ContactConrainer;
