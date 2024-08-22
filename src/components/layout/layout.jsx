import { Footer } from "../footer/footer";
import { Header } from "../header/header";

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};