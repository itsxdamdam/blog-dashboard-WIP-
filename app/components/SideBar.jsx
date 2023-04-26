import Image from "next/image"
import Link from "next/link"
import { AiOutlineEllipsis } from "react-icons/ai";
import Logo from "../icons/mainstack-logo.png"
import Dashboard from "../icons/dashboard.png"
import Edit from "../icons/edit.png"
import Group from "../icons/group.png"
import Hourglass from "../icons/hourglass.png"
import Camera from "../icons/camera.png"
import Delete from  "../icons/delete.png"
import Sub from "../icons/subscriptions.png"
import File from "../icons/file.png"
import Alarm from "../icons/alarm.png"
import Avatar from "../icons/unsplash_user.png"

const SideBar = () => {
  const user = {
    firstName: "Blessing",
    lastName: "Daniels"
  }
  return (
    <aside className="sidebar">
      <div className="logo">
        <Link href="/">
          <Image src={Logo} alt="mainstack-logo" />
        </Link>
      </div>
      <div className="items">
        <div className="item-list">
          <Link href="/">
            <Image src={Dashboard} alt="dashboard" />
            <span className="item-text">Dashboard</span>
          </Link>
          <Link href="/item">
            <Image src={Edit} alt="edit" />
            <span className="item-text">Item 1</span>
          </Link>
          <Link href="/item">
            <Image src={Group} alt="Group" />
            <span className="item-text">Item 2</span>
          </Link>
          <Link href="/item">
            <Image src={Hourglass} alt="Hourglass" />
            <span className="item-text">Item 3</span>
          </Link>
        </div>
        <div className="item-list">
          <div className="other">OTHERS 1</div>
          <Link href="/item">
            <Image src={Camera} alt="Camera" />
            <span className="item-text">Item 4</span>
          </Link>
          <Link href="/item">
            <Image src={Delete} alt="Delete" />
            <span className="item-text">Item 5</span>
          </Link>
        </div>
        <div className="item-list">
          <div className="other">OTHERS 2</div>
          <Link href="/item">
            <Image src={Sub} alt="Sub" />
            <span className="item-text">Item 6</span>
          </Link>
          <Link href="/item">
            <Image src={File} alt="File" />
            <span className="item-text">Item 7</span>
          </Link>
          <Link href="/item">
            <Image src={Alarm} alt="Alarm" />
            <span className="item-text">Item 8</span>
          </Link>
        </div>
      </div>
      <div className="user">
        <Link href="/profile" className="avatar">
          <Image src={Avatar} alt="avatar" />
          <span className="item-text">{`${user.firstName} ${user.lastName}`}</span>
          <AiOutlineEllipsis />
        </Link>
      </div>
    </aside>
  )
}

export default SideBar