import FooterWeb from "../footer/FooterWeb"
import NavbarWeb from "../navbar/NavbarWeb"

const Layout = ({children})=>{
    return(
        <>
        <div>
            <NavbarWeb/>
            <FooterWeb/>
        </div>
        <main>{children}</main>
        </>
    )
}
export default Layout;