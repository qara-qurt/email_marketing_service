import { ReactNode } from "react";

interface IButton {
    children: ReactNode,
    color?: string,
    bg_color?:string,
    onClick?: ()=>void,
}

const Button = ({children,color="#ff5d5d", bg_color="#fff", onClick}:IButton) => {
    return (
        <div style={
            {
                cursor:"pointer",
                color:color,
                fontSize:"14px",
                padding:"8px 14px",
                backgroundColor:bg_color,
                borderRadius: "4px"
            }
        }
        onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Button;
