const Layout = ({archive,latest}) =>{

    return(
        <div>
            <h1>News archive</h1>
            <section id="archiv-filter">
                {archive}
            </section>
             <section id="latest-filter">
                {latest}
            </section>
        </div>
    )

}
export default Layout;