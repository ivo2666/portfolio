import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/outline";

interface AlertWrapperProps {
  type: "success" | "error" | "none";
  children: JSX.Element;
}

export interface AlertProps {
  type: AlertWrapperProps["type"];
  message: string;
}

const AlertWrapper: React.FC<AlertWrapperProps> = ({ children, type }) => {
  if (type === "success") {
    return <div className="mt-5 shadow-lg alert alert-success">{children}</div>;
  }
  return <div className="mt-5 shadow-lg alert alert-error">{children}</div>;
};

const Alert: React.FC<AlertProps> = ({ message, type }) => {
  return (
    <AlertWrapper type={type}>
      <div>
        {type === "success" ? (
          <CheckCircleIcon className="w-5" />
        ) : (
          <ExclamationCircleIcon className="w-5" />
        )}
        <span>{message}</span>
      </div>
    </AlertWrapper>
  );
};

export default Alert;
