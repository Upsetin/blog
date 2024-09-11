import Head from 'next/head'
import PostCard from '@/components/PostCard'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {getSortedPostsData} from './utils';

export default function Home({allPostsData}) {
    console.log('allPostsData:', allPostsData);

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <Head>
                <title>我的博客</title>
                <meta name="description" content="我的个人博客"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header/>

            <main className="flex-grow container mx-auto px-4">
                <section className="text-white mb-8">
                    <h2 className="text-3xl font-bold mb-4">关于我</h2>
                    <p>我是一位充满激情的变革型领导者，在数字创新和以人为本的设计领域拥有超过15年的经验。我在战略框架、发现和创新过程、概念开发以及提供一流的数字产品和服务方面有丰富的专业知识。</p>
                    <p>我帮助组织进行人性化领导、变革管理、数字创新，并提供一流的数字产品和服务。我领导团队、塑造产品、完善策略，使事物变得更简单、更智能、更有帮助。</p>
                </section>

                <h2 className="text-3xl font-bold mb-4">最新文章</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allPostsData.map((post, index) => (
                        <PostCard key={post.slug} post={post} index={index}/>
                    ))}
                </div>
            </main>

            <Footer/>
        </div>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    }
}