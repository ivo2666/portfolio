const Spinner: React.FC = () => {
    return (
      <div className="flex items-center justify-center mt-6 space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse bg-accent"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-accent"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-accent"></div>
      </div>
    );
  };
  
  export default Spinner;
  