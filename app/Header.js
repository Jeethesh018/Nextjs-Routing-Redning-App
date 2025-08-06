import Link from "next/link";

const Header = () =>{

    return(
        <>
        <Link href={"/"}>Home</Link>
        <Link href={"/news"}>News</Link>
        </>
    )

}
export default Header;