import React, { ReactNode } from "react";

type ThemeProps = {
    children: ReactNode;
};

export default function ThemeProvider({ children }: ThemeProps) {
    return (
        <div className="min-h-screen min-w-full bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#f1f5f9] text-gray-900 font-sans flex flex-col">
            <section className="p-10 mx-auto">
                {children}
            </section>
        </div>
    );
}
