import INFORMATION from "./INFORMATION";
import { FaBirthdayCake } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";



const INFO_LIST = [
  {icon: <FaBirthdayCake />, text: INFORMATION.birthday},
  {icon: <FaAddressCard />, text: INFORMATION.address},
  {icon: <MdPhoneIphone />, text: INFORMATION.phone},
  {icon: <MdOutlineMailOutline />, text: INFORMATION.email},
  {icon: <FaGithub />, text: INFORMATION.github},
  {icon: <SiVelog />, text: INFORMATION.velog},
];


export default INFO_LIST
