import styles from "./DashboardGrid.module.css";
import PieGraph from "./PieGraph";
import HorizontalBarGraph from "./HorizontalBarGraph";
import LineGraph from "./LineGraph";
import SquareGraph from "./SquareGraph";

import { Card, Flex, Group, Text } from "@mantine/core";
import { IconStar, IconUserBolt } from "@tabler/icons-react";

function DashboardGrid({ reviewData }) {
  return (
    <div className={styles.container}>
      <Card
        withBorder
        className={`${styles.card} ${styles.gridRowSpan2} ${styles.graphSpaccing}`}
      >
        <PieGraph reviewData={reviewData} />
      </Card>

      <Card
        withBorder
        className={`${styles.card} ${styles.gridRowSpan2} ${styles.graphSpaccing}`}
      >
        <HorizontalBarGraph reviewData={reviewData} />
      </Card>
      <StatsCard
        header={"Total Stars"}
        data={"stardata"}
        desc={"Total number of stars all time"}
      />
      <StatsCard
        header={"Total Visitors"}
        data={"visitorData"}
        desc={"Total visitors, since all time"}
      />
      <Card
        withBorder
        className={`${styles.card} ${styles.gridColumnSpan2} ${styles.gridRowSpan2} ${styles.graphSpaccing}`}
      >
        <LineGraph reviewData={reviewData} />
      </Card>
      <Card withBorder className={`${styles.card} ${styles.gridRowSpan2}`}>
        <SquareGraph reviewData={reviewData} />
      </Card>
    </div>
  );
}

function StatsCard({ header, data, desc }) {
  return (
    <Card withBorder className={`${styles.card} ${styles.statCard}`}>
      <Flex mih={50} justify="flex-start" direction="column" wrap="nowrap">
        <Group justify="space-between">
          <Text size="xs" c="dimmed" fw={900}>
            {header}
          </Text>
          <IconUserBolt size="1rem" stroke={1.5} />
        </Group>

        <Flex direction={"column"} mt={22}>
          <Group align="flex-end" gap="xs">
            <Text fz={"xl"} fw={600}>
              {data}{" "}
            </Text>
            <Text c="teal" fz="sm" fw={500}>
              <IconStar size="1rem" stroke={1.5} />
              <IconStar size="1rem" stroke={1.5} />
              <IconStar size="1rem" stroke={1.5} />
            </Text>
          </Group>{" "}
          <Text fz="xs" c="dimmed" mt={0}>
            {desc}{" "}
          </Text>
        </Flex>
      </Flex>{" "}
    </Card>
  );
}

export default DashboardGrid;
