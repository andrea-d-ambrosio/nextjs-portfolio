import { icons } from "lucide-react";
import Link from "next/link";
import {FaGithub, FaLinkedin, FaSquareXTwitter} from 'react-icons/fa6'


const socials = [
    {icons: <FaGithub />, path: 'https://github.com'},
    {icons: <FaLinkedin />, path: 'https://www.linkedin.com'},
    {icons: <FaSquareXTwitter />, path: 'https://x.com'}
]

const Social = ({containerStyles, iconStyles}) => {
    return  (
        <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                  {item.icons}

                </Link>
            );
        })}
    </div> );
}

export default Social