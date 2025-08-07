import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";

const page = () =>{

    return(
        <>
      <h1>News Page</h1>
    <NewsList news={DUMMY_NEWS}/>
        </>
    )

}
export default page;