import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news"

const LatestNewsPage= ()=>{

    const news = getLatestNews();
    console.log(news,"nnn")

    return(
        <>
        <h2>
            latest News
        </h2>
        <NewsList news={news}/>
        </>
        
    )

}
export default LatestNewsPage