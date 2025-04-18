import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import {
  executiveDirector,
  executiveDirectorGirl,
  executiveMember,
  executiveMemberGirl,
  generalSec,
  profilePeter,
} from "../assets";
import { LiaLinkedin } from "react-icons/lia";
import { FaTwitter } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";
import { TwitterIcon } from 'lucide-react';


const k = {
  NAVLINKS: [
    {
      navName: "Home",
      path: "/",
    },
    {
      navName: "About",
      path: "/aboutUs",
    },
    {
      navName: "Events",
      path: "/events",
    },
    {
      navName: "Get Involved",
      path: "/getInvolved",
      // dropdown:[
      //   {
      //     navName:"Member",
      //     path:"/get-involved#membership"
      //   },
      //   {
      //     navName:"Volunteer",
      //     path:"/get-involved#volunteer"
      //   },
      //   {
      //     navName:"Sponsor",
      //     path:"/get-involved#sponsor"
      //   },
      // ],
    },
    // {
    //   navName: "Member",
    //   path: "/membership",
    // },
    // {
    //   navName: "Volunteer",
    //   path: "/volunteer",
    // },
    // {
    //   navName: "Sponsor",
    //   path: "/sponsorship",
    // },

    // {
    //   navName: "Contact",
    //   path: "/contact",
    // },
  ],
  PURPOSE: [
    {
      icon: <FaRocket size={24} color="white" />,
      title: "MISSION",
      description:
        "To provide a safe, supportive space for teenagers—offering mentorship, life skills, education, and emotional well-being—while extending essential services to the underprivileged.",
      bgColor: "#FFFF",
      iconBg: "#3f9510",
    },
    
    {
      icon: <FontAwesomeIcon icon={faEye} size="lg" color="#333" />,
      title: "VISSION",
      description:
        "      To see teenagers grow into responsible adults with integrity, discipline, and purpose, while uplifting the vulnerable through impactful community support.       ",
      bgColor: "#3f9510",
      iconBg: "#FFFF",
    },
    {
      icon: <FontAwesomeIcon icon={faCrosshairs} size="lg" color="white" />,
      title: "AIM",
      description:
        "To empower youth, promote positive choices, and build a network of care through collaboration, education, and community-driven initiatives.",
      bgColor: "#FFFF",
      iconBg: "#3f9510",
    },
    
  ],

  EXECUTIVES: [
    {
      image: <img src={executiveDirector} alt="JA" />,
      name: "Joshua Antwi",
      position: "Executive Director",
      linkedin: <LiaLinkedin />,
      linkedinUrl: "https://linkedin.com/in/username",
      twitter: <TwitterIcon   />,
      twitterUrl: "https://twitter.com/username"
    },
    {
      image: <img src={executiveDirectorGirl} alt="ED" />,
      name: "Tawiah Elizabeth",
      position: "Executive Director",
      linkedin: <LiaLinkedin />,
      linkedinUrl: "https://linkedin.com/in/username",
      twitter: <TwitterIcon />,
      twitterUrl: "https://twitter.com/username"},
    {
      image: <img src={generalSec} alt="CORRDELIA" />,
      name: "Cordelia  Quarcoo",
      position: "General Secretary",
      linkedin: <LiaLinkedin />,
      linkedinUrl: "https://linkedin.com/in/username",
      twitter: <TwitterIcon />,
      twitterUrl: "https://twitter.com/username"
    },
    {
      image: <img src={profilePeter} alt="Peter" />,
      name: "Peter Obu",
      position: "Executive Member",
      linkedin: <LiaLinkedin />,
      linkedinUrl: "https://linkedin.com/in/username",
      twitter: <TwitterIcon />,
      twitterUrl: "https://twitter.com/username"
    },
    {
      image: <img src={executiveMemberGirl} alt="Doris" />,
      name: "Doris Buabeng",
      position: "Executive Member",
      linkedin: <LiaLinkedin />,
      linkedinUrl: "https://linkedin.com/in/username",
      twitter: <TwitterIcon />,
      twitterUrl: "https://twitter.com/username"
    },
  ],
};
export default k;
