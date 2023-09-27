import { useDisclosure } from "@mantine/hooks";
import { AppShell as MantineAppShell, Burger } from "@mantine/core";
import NavbarSimple from "../components/NavbarSimple";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function AppShell() {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate();

useEffect(function(){
  navigate('/dashboard')
},[navigate])

  return (
    <MantineAppShell
      header={{ height: 40 }}
      navbar={{ width: 230, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <MantineAppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Sachdev Brothers</div>
      </MantineAppShell.Header>

      <MantineAppShell.Navbar p="md">
        <NavbarSimple />
      </MantineAppShell.Navbar>

      <MantineAppShell.Main>
        <Outlet />
      </MantineAppShell.Main>
    </MantineAppShell>
  );
}
