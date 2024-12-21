// src/components/common/Button.jsx
export const Button = ({ children, variant = 'primary', ...props }) => {
    const variants = {
      primary: 'bg-primary hover:bg-primary-dark text-white',
      secondary: 'bg-secondary hover:bg-secondary-dark text-white',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
    };
  
    return (
      <button
        className={`px-4 py-2 rounded-md transition duration-200 ${variants[variant]}`}
        {...props}
      >
        {children}
      </button>
    );
  };

  export default Button;
  