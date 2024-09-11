import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PostCard({post}) {
    const index = post.slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 6;
    return (
        <Link href={`/blog/${post.slug}`}>
            <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                <div className="aspect-w-16 aspect-h-9">
                    <Image
                        src={`/bg-${index}.png`}
                        alt="博客文章图片"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 transition-opacity duration-300 group-hover:bg-opacity-75">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:underline">
                        {post.title}
                    </h3>
                    <div className="flex justify-between text-sm">
                        <span>{post.date}</span>
                        <span>{post.tags.map((tag) => (`#${tag} `))}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};