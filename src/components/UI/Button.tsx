const Button = ({ children, className = '' }) => {
  const btnClassName = `${
    className ? className : ''
  } py-[20px] px-[50px] bg-white shadow-normal dark:bg-dark-bg-one dark:text-dark-white dark:shadow-dark-normal`;

  return (
    <button className={btnClassName} type='button'>
      {children}
    </button>
  );
};

export default Button;
