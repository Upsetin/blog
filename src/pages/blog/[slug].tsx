import {useRouter} from 'next/router'
import DetailContent from "@/components/detail";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {getPostData} from '../utils';

export default function CollectionDetail({postData, index}) {
    const router = useRouter()
    const {slug} = router.query

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <Header/>
            <main className="flex-grow">
                <DetailContent postData={postData} index={index}/>
            </main>
            <Footer/>
        </div>
    )
}

export async function getStaticPaths() {
    // 这里需要实现获取所有可能的slug的逻辑
    // 暂时返回空数组，表示所有路径都会在运行时生成
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export async function getStaticProps({params}) {
    try {
        const postData = getPostData(params.slug);
        const index = params.slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 6;
        return {
            props: {
                postData,
                index
            }
        }
    } catch (error) {
        console.error('Error fetching post data:', error);
        return {
            notFound: true
        }
    }
}