import { Button, Menu, Text, rem, useMantineTheme } from "@mantine/core";
import { IconChevronDown, IconGraph } from "@tabler/icons-react";

export function Dropdown({ name, dropdownOptions, onClick }) {
  const theme = useMantineTheme();
  return (
    <Menu
      transitionProps={{ transition: "pop-top-right" }}
      position="top-end"
      width={220}
      withinPortal
    >
      <Menu.Target>
        <Button
          rightSection={
            <IconChevronDown
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          }
          pr={12}
        >
          <Text>{name}</Text>
        </Button>
      </Menu.Target>
      <Menu.Dropdown
        style={{
          maxHeight: "10rem",
          overflowY: "scroll",
        }}
      >
        {dropdownOptions.map((data) => (
          <Menu.Item
            onClick={() => onClick(data)}
            key={data}
            leftSection={
              <IconGraph
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
                stroke={1.5}
              />
            }
          >
            {data}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
