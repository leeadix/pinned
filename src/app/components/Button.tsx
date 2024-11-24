const Button = (props: any) => {
    return (
      // className="px-12 py-2 bg-blue-700 h-10 mt-8 px-6 rounded font-inter font-bold text-white text-center "
      <button className="px-2 py-2 h-10 rounded font-bold text-center "
        type={props.type || 'button'}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  };
  
  export default Button;