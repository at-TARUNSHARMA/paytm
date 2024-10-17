import { Link } from 'react-router-dom';

export function BottomWarning({ label, buttonText, to }) {
  return (
    <div className="text-xs text-center text-gray-500 py-4">
      {label}
      <Link to={to} className="text-blue-500 underline ml-2">
        {buttonText}
      </Link>
    </div>
  );
}

export default BottomWarning;
