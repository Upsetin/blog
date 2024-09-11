import React from 'react';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="w-full border-white border-b-[1px] h-[85px] flex items-center justify-center ">
            <nav className="w-1/3 flex justify-between items-center">
                <Link className="text-[25px] hover:underline" href="/">Home</Link>
                <Link className="text-[25px] hover:underline" href="/blog">Blog</Link>
                <Link className="text-[25px] hover:underline" href="/bookshelf">Bookshelf📚</Link>
            </nav>
        </header>
    );
}