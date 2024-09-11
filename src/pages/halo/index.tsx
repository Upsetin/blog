import Head from 'next/head'
import Layout from '@/components/Header'
import PostCard from '@/components/PostCard'

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>My Blog</title>
                <meta name="description" content="My personal blog"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <section className="text-white">
                    <h2>About me</h2>
                    <p>I am a passionate and transformational leader with over 15 years of experience in digital
                        innovation and human-centred design. I have extensive expertise in strategic frameworks,
                        discovery and innovation processes, concept development, and delivering best-in-class digital
                        products and services.</p>
                    <p>I help organisations with human leadership, change management, digital innovation and delivering
                        best-in-class digital products and services. I lead teams, shape products, refine strategies and
                        make things simpler, smarter and more helpful.</p>
                </section>

                <section className="latest">
                    <h2>Latest</h2>
                    <div className="posts">
                        {[1, 2, 3].map((_, index) => (
                            <PostCard key={index}/>
                        ))}
                    </div>
                </section>
            </main>
        </Layout>
    )
}