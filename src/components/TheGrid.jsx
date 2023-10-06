import { Box, Card } from "@mantine/core";
import styles from "../assets/styles/TheGrid.module.css";
import PieGraph from "./dashboard/PieGraph";
import HorizontalBarGraph from "./dashboard/HorizontalBarGraph";
import LineGraph from "./dashboard/LineGraph";

function TheGrid() {
  return (
    <div className={styles.container}>
      <Card withBorder  className={`${styles.box} ${styles.gridRowSpan2}`}>
        <PieGraph/>
      </Card>
      <Card withBorder className={`${styles.box} ${styles.gridRowSpan2}`}>
        <HorizontalBarGraph/>
      </Card>
      <Card withBorder className={styles.box}></Card>
      <Card withBorder className={styles.box}></Card>
      <Card withBorder className={`${styles.box} ${styles.gridColumnSpan2} ${styles.gridRowSpan2}`}>
        <LineGraph/>
      </Card>
      <Card withBorder className={`${styles.box} ${styles.gridRowSpan2}`}></Card>
    </div>
  );
}

export default TheGrid;
