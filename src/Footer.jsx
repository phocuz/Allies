import twitter from "./assets/twitter.png";
import tiktok from "./assets/tiktok.png";
import instagram from "./assets/instagram.png";
import facebook from "./assets/facebook.png";

function Footer() {
    return (
        <footer className="flex flex-col items-center mx-auto px-4 py-6 bg-customWhite text-customPink">
            <div className="flex flex-col md:flex-row justify-between w-full max-w-6xl gap-6 mb-6">
                <h1 className="text-3xl font-bold">Allies</h1>
                <div className="flex md:flex-row gap-6">
                    <div className="flex gap-4">
                        <a href="#how-it-works" className="hover:underline">
                            How it works
                        </a>
                        <a href="#about" className="hover:underline">
                            About
                        </a>
                        <a href="#contact" className="hover:underline">
                            Contact
                        </a>
                    </div>
                    <div className="flex gap-4">
                        <img src={twitter} alt="Twitter icon" aria-label="Twitter" className="w-[18px] h-[18px]" />
                        <img src={instagram} alt="Instagram icon" aria-label="Instagram" className="w-[18px] h-[18px]" />
                        <img src={facebook} alt="Facebook icon" aria-label="Facebook" className="w-[18px] h-[18px]" />
                        <img src={tiktok} alt="TikTok icon" aria-label="TikTok" className="w-[18px] h-[18px]"/>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between w-full max-w-6xl items-center gap-4 border-t border-customPink pt-4">
                <h1 className="text-sm">&copy; 2024 Allies Inc. All Rights Reserved</h1>
                <div className="flex gap-4 text-sm">
                    <a href="#privacy-policy" className="hover:underline">
                        Privacy Policy
                    </a>
                    <a href="#terms-of-use" className="hover:underline">
                        Terms of Use
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
