export function Button({ label, onPress }) {
    return (
      <button 
        onClick={onPress} 
        type="button" 
        className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 rounded py-2"
      >
        {label}
      </button>
    );
  }
  
  export default Button;
  