import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram, AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import { ImLocation } from "react-icons/im";

const Footer = () => {
    return ( 
        <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
            <Container>
                <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                    <FooterList>
                        <h3>Shop Categories</h3>
                        <Link href="#">Phones</Link>
                        <Link href="#">Laptops</Link>
                        <Link href="#">Desktops</Link>
                        <Link href="#">Watches</Link>
                        <Link href="#">TVs</Link>
                        <Link href="#">Accesories</Link>
                    </FooterList>
                    <FooterList>
                        <h3>Customer Service</h3>
                        <Link href="#">Contact Us</Link>
                        <Link href="#">Shipping Policity</Link>
                        <Link href="#">Returns & Exchanges</Link>
                        <Link href="#">FAQs</Link>
                    </FooterList>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-base font-bold mb-2">About Us</h3>
                        <p className="mb-2"></p>
                        <p>&copy; {new Date().getFullYear()} Brizuela Sideravicius.</p>
                    </div>
                    <FooterList>
                        <h3>Follow Us</h3>
                        <div className="flex gap-2">
                            <Link 
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <AiFillInstagram size={24}/>
                            </Link>
                            <Link 
                                href="https://wa.me/5491122502345?text=Hola!%20Necesito%20m%C3%A1s%20informaci%C3%B3n%20sobre%20un%20veh%C3%ADculo%20que%20vi%20en%20la%20web."
                                target="_blank"
                                rel="noreferrer"
                            >
                                <AiOutlineWhatsApp size={24}/>
                            </Link>
                            <Link 
                                href="https://maps.app.goo.gl/Ck941TCPFEZTcBaP7"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <ImLocation size={24}/>
                            </Link>
                            <Link 
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <AiFillLinkedin size={24}/>
                            </Link>
                        </div>
                    </FooterList>
                </div>
            </Container>
        </footer>
     );
}
 
export default Footer;