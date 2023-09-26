import { useDisclosure } from "@mantine/hooks";
import { AppShell as MantineAppShell, Burger } from "@mantine/core";
import NavbarSimple from "../components/NavbarSimple";
import { Outlet } from "react-router-dom";

export default function AppShell() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineAppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
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
