const Button = ({children}:any) => {
    return (
        <div style={
            {
                color:"#ff5d5d",
                fontSize:"14px",
                padding:"8px 14px",
                backgroundColor:"#fff",
                borderRadius: "4px"
            }
        }>
            {children}
        </div>
    );
};

export default Button;
