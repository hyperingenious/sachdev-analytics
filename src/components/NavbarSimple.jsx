import { useState } from "react";
import {
  IconSwitchHorizontal,
  IconLogout,
  IconDashboard,
  IconTextCaption,
} from "@tabler/icons-react";
import classes from "./NavbarSimple.module.css";
import { Link } from "react-router-dom";

const data = [
  { link: "/dashboard", label: "Dashboard", icon: IconDashboard },
  { link: "/reviews", label: "Reviews", icon: IconTextCaption },
];

export default function NavbarSimple() {
  const [active, setActive] = useState("Billing");

  const links = data.map((item) => (
    <Link
      to={item.link}
      className={classes.link}
      data-active={item.label === active || undefined}
      key={item.link}
      onClick={() => setActive(item.label)}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>{links}</div>

      <div className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}
