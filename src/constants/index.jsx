import { HiComputerDesktop } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import {
  executiveDirector,
  executiveDirectorGirl,
  executiveMember,
  executiveMemberGirl,
  generalSec,
} from "../assets";
import { LiaLinkedin } from "react-icons/lia";
import { FaTwitter } from "react-icons/fa";

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
      navName: "Member",
      path: "/membership",
    },
    {
      navName: "Volunteer",
      path: "/volunteer",
    },
    {
      navName: "Sponsor",
      path: "/sponsorship",
    },

    {
      navName: "Contact",
      path: "/contact",
    },
  ],
  PURPOSE: [
    {
      icon: <IoSettingsOutline />,
      title: "MISSION",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut voluptatem totam rem minus, iure iusto quod",
      bgColor: "#FFFF",
      iconBg: "#3f9510",
    },
    {
      icon: <IoSettingsOutline />,
      title: "VISSION",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut voluptatem totam rem minus, iure iusto quod",
      bgColor: "#3f9510",
      iconBg: "#FFFF",
    },
    {
      icon: <IoSettingsOutline />,
      title: "AIM",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut voluptatem totam rem minus, iure iusto quod",
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
      twitter: <FaTwitter />,
    },
    {
      image: <img src={executiveDirectorGirl} alt="ED" />,
      name: "Tawiah Elizabeth",
      position: "Executive Director",
      linkedin: <LiaLinkedin />,
      twitter: <FaTwitter />,
    },
    {
      image: <img src={generalSec} alt="CORRDELIA" />,
      name: "Cordelia  Quarcoo",
      position: "General Secretary",
      linkedin: <LiaLinkedin />,
      twitter: <FaTwitter />,
    },
    {
      image: <img src={executiveMember} alt="Peter" />,
      name: "Peter Obu",
      position: "Executive Member",
      linkedin: <LiaLinkedin />,
      twitter: <FaTwitter />,
      
    },
    {
      image: <img src={executiveMemberGirl} alt="Doris" />,
      name: "Doris Buabeng",
      position: "Executive Member",
      linkedin: <LiaLinkedin />,
      twitter: <FaTwitter />,
    },
  ],
};
export default k;
