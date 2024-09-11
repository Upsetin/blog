import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full border-white h-[58px] flex items-center justify-center flex-col text-gray-500 mt-12">
            <div className={"border-t-[1px] w-1/5 p-0.5 border-gray-500"}></div>
            <p className={"text-[12px] p-0.5"}>Copyright © 2024 Kuicy. All rights reserved.</p>
        </footer>
    );
}