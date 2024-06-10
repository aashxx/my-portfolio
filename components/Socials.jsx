import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const socials = [
    {
        icon: <FaGithub />,
        path: "https://github.com/aashxx"
    },
    {
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/in/aashxx/"
    },
    {
        icon: <FaInstagram />,
        path: "https://www.instagram.com/webcohort/"
    },
    {
        icon: <FaTwitter />,
        path: "https://x.com/aashirtweetz"
    },
]

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {
                socials.map((item, index) => (
                    <Link key={index} target='blank' href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                ))
            }
        </div>
    )
}

export default Socials;
