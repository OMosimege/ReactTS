import React from "react";

interface ChildProps {
    colour: string;
    onClick: () => void;
    children?: React.ReactNode;
}

export const Child = ({ colour, onClick }: ChildProps) => {
    return <div>
        {colour}
        <button onClick={onClick}>Click Me</button>
        </div>
};

export const ChildAsFC: React.FC<ChildProps> = ({ colour, onClick, children }) => {
    return <div>
            {colour}
            {children}
            <button onClick={onClick}>Click Me</button>
        </div>
};