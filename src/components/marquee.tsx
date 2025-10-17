import React from "react";

interface MarqueeProps{
    text: string;
    fontClassName: string;
}

const Marquee = ({ text, fontClassName }: MarqueeProps) => {
    return(
        <>
            <div className="overflow-hidden whitespace-nowrap bg-blue-600"
                style={{
                    width: "100%",
                    top: "0",
                }}
            >
                <div className={fontClassName}
                    style={{
                        width: "fit-content",
                        display: "inline-block",
                        paddingLeft: "100%",
                        animation: "marquee 7s linear infinite"
                    }}
                >
                    {text}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee{
                0%{
                    transform: translateX(0%);
                }
                100%{
                    transform: translateX(-100%);
                }
                }`}
            </style>
        </>
    );
};

export default Marquee;