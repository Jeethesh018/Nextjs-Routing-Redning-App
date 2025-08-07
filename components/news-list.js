import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";

const NewsList = ({news}) =>{

    return(
        <ul className="news-list">
                {news.map((newitem)=>{
                    return(
        <li key={newitem.id}>
                    <Link href={`/news/${newitem.slug}`}>
                     <img src={`/images/news/${newitem.image}`} alt={newitem.title}/>
                     <span>{newitem.title}</span>
                    </Link>
                </li>
                    )
                    
                })}
             
              </ul>
    )

}
export default NewsList;