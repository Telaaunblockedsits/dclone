const NormalButton: React.FunctionComponent<any> = (props) => {
  return (
    <button
      {...props}
      className="bg-primary heading rounded-md py-1.5 px-4 m-4">
      {props.children}
    </button>
  );
}
 
export default NormalButton;