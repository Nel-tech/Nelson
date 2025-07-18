import React from "react";

export function FramerIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M3 2h18v7H9v6h12v7H3v-7h12V9H3V2Z" />
        </svg>
    );
}
