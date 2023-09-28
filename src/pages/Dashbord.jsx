import { Grid } from "@mantine/core";
import HorizontalBarGraph from "../components/dashboard/HorizontalBarGraph";
import LineGraph from "../components/dashboard/LineGraph";
import PieGraph from "../components/dashboard/PieGraph";
import StatsGrid from "../components/dashboard/StatsGrid";

function Dashbord() {
  return (
    <div>
      <StatsGrid />
      <Grid grow>
        <Grid.Col span={6}>
          <PieGraph />
        </Grid.Col>
        <Grid.Col span={6}>
          <HorizontalBarGraph />
        </Grid.Col>
      </Grid>
      <LineGraph />
    </div>
  );
}

export default Dashbord;
