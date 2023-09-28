import { Button, Menu, Text, rem, useMantineTheme } from "@mantine/core";
import { IconChevronDown, IconGraph } from "@tabler/icons-react";

export function Dropdown({ name, dropdownOptions, onClick, argOptions }) {
  const theme = useMantineTheme();
  return (
    <Menu
      transitionProps={{ transition: "pop-top-right" }}
      position="top-end"
      width={120}
    >
      <Menu.Target>
        <Button
          variant="default"
          color="rgba(255, 255, 255, 1)"
          // style={{ boxShadow: "var(--mantine-shadow-md)" }}
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
        {dropdownOptions.map((data, index) => (
          <Menu.Item
            onClick={() => onClick(argOptions[index])}
            key={data}
            leftSection={
              <IconGraph
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.gray[5]}
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
