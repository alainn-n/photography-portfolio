import { FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export const navLinks = ["home", "portfolio", "contato"]

export const socialIcons = [
  <BsWhatsapp />,
  <FaInstagram />,
  <FaTiktok />,
  <FaTwitter />
]

export const workNavs = [
  "tudo", "fotografia", "video", "design"
]

export const contacts = [
  {
    id: 1,
    icon: <FaInstagram />,
    infoText: "@alainn_n - Acompanhe meu trabalho"
  },
  {
    id: 2,
    icon: <FiMail />,
    infoText: "contato.alain@gmail.com"
  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    infoText: "+55 41 9 8896-0127"
  }
]
