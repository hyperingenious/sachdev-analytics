import { useDisclosure } from "@mantine/hooks";
import { AppShell as MantineAppShell, Burger } from "@mantine/core";
import NavbarSimple from "../components/NavbarSimple";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ActionToggle from "../components/ActionToggle";

export default function AppShell() {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate();

  useEffect(
    function () {
      navigate("/dashboard");
    },
    [navigate]
  );

  return (
    <MantineAppShell
      header={{ height: 40 }}
      navbar={{ width: 230, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="lg"
    >
      <MantineAppShell.Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 10px",
        }}
      >
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <h6>Sachdev Brothers</h6>
        <ActionToggle />
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
