import React from 'react';
import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {tomorrow} from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function DetailContent({postData, index}) {
    index = index % 6;
    return (
        <div className={"flex justify-center"}>
            <div className={"w-1/2"}>
                <h1 className={"mb-5 text-[42px] mt-5"}>{postData.title}</h1>
                <div className={"mb-10 font-[20px]"}>{postData.date}</div>

                <section className={"flex flex-col justify-center my-10"}>
                    <div className={"max-w-1/2 aspect-w-16 aspect-h-9"}>
                        <Image
                            src={`/bg-${index}.png`}
                            alt="博客文章图片"
                            layout="fill"
                            objectFit="cover"
                            className={"rounded-lg"}
                        />
                    </div>
                </section>

                <section>
                    <ReactMarkdown
                        components={{
                            h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-4 mt-8" {...props} />,
                            h2: ({node, ...props}) => <h2 className="text-2xl font-bold mb-3 mt-6" {...props} />,
                            h3: ({node, ...props}) => <h3 className="text-xl font-bold mb-2 mt-4" {...props} />,
                            p: ({node, ...props}) => <p className="mb-4" {...props} />,
                            ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4" {...props} />,
                            ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4" {...props} />,
                            li: ({node, ...props}) => <li className="mb-1" {...props} />,
                            blockquote: ({node, ...props}) => <blockquote
                                className="border-l-4 border-gray-500 pl-4 italic my-4" {...props} />,
                            img: ({node, ...props}) => (
                                <div className="my-4">
                                    <img {...props} className="rounded-lg"/>
                                    <p className="text-gray-400 text-sm italic mt-2">{props.alt}</p>
                                </div>
                            ),
                            table: ({node, ...props}) => <table
                                className="table-auto border-collapse border border-gray-500 my-4" {...props} />,
                            th: ({node, ...props}) => <th
                                className="border border-gray-500 px-4 py-2 bg-gray-700" {...props} />,
                            td: ({node, ...props}) => <td className="border border-gray-500 px-4 py-2" {...props} />,
                            code({node, inline, className, children, ...props}) {
                                const match = /language-(\w+)/.exec(className || '')
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        style={tomorrow}
                                        language={match[1]}
                                        PreTag="div"
                                        {...props}
                                    >
                                        {String(children).replace(/\n$/, '')}
                                    </SyntaxHighlighter>
                                ) : (
                                    <code className="bg-gray-800 rounded px-1" {...props}>
                                        {children}
                                    </code>
                                )
                            },
                            input: ({node, ...props}) => {
                                if (props.type === 'checkbox') {
                                    return (
                                        <input
                                            type="checkbox"
                                            checked={props.checked}
                                            readOnly
                                            className="mr-2"
                                        />
                                    )
                                }
                                return <input {...props} />
                            },
                        }}
                    >
                        {postData.content}
                    </ReactMarkdown>
                </section>
            </div>
        </div>
    );
}