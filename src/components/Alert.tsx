import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/outline";

export interface AlertProps {
  flag: "warning" | "success" | "error" | "none";
  message: string;
}

const variant = {
  success: <CheckCircleIcon className="w-5"/>  ,
  error: <ExclamationCircleIcon className="w-5"/>,
  warning: <ExclamationCircleIcon className="w-5"/>
};

const Alert: React.FC<AlertProps> = ({ flag, message }) => {
  return (
    <div className={`alert alert-${flag} shadow-lg ${flag === "none" ? "hidden": ""}`}>
      <div>
        {variant[flag]}
        <span className="font-bold uppercase">{message}</span>
      </div>
    </div>
  );
};

export default Alert;
