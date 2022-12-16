import { EmailMessage } from "../containers/ContactContainer"

export const postEmail = async (emailMessage: EmailMessage):Promise<true | unknown> => {
    const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(emailMessage),
      });

      if (response.status > 399) {
        throw new Error("The Message wasn't send");
      } else {
        return true
      }
}