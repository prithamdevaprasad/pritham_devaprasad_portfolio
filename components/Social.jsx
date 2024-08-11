import Link from "next/link";

import { FaGithub, FaLinkedinIn ,FaYoutube, FaTwitter,FaInstagram} from "react-icons/fa";


const socials = [
    {icon:<FaGithub/>,path: "https://github.com/prithamdevaprasad"},
    {icon:<FaLinkedinIn/>,path: "https://www.linkedin.com/in/pritham-devaprasad/"},
    {icon:<FaYoutube/>,path: "https://www.youtube.com/@PrithamDevaprasad"},
    {icon:<FaInstagram/>,path: "https://www.instagram.com/prith.dev/"},
]



const Social = ({containerStyles ,iconStyles}) => {
  return ( 
  <div className={containerStyles}>
    {socials.map((item,index)=>{
        return(
        <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
        );
    })}
  </div>
  );
};

export default Social;