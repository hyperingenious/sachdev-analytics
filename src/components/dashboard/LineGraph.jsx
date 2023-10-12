import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { colorArray, filterCombinations } from "../../config/app-data";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCombinationFilter,
  changeDataAsPerTime,
  changeIndividualStarFilter,
} from "../../redux/dashboard/filterLineGraphSlice";
import { Dropdown } from "../Dropdown";
import SegmentedButton from "../SegmentedButton";
import { Box, Card, Text } from "@mantine/core";

function LineGraph() {
  const dispatch = useDispatch();
  const { combinationFilter, dataAsPerTime, individualStarFilter } =
    useSelector((store) => store.lineGraphFilter);

  return (
    <div>
      <LineGraphFilterBar dispatch={dispatch} />
      <ResponsiveContainer height={225} width={'100%'}>
        <AreaChart data={dataAsPerTime} margin={{ left: -19, right: -30 }}>
          <XAxis tick={{ fontSize: 12 }} dataKey={"label"} />
          <YAxis
            tick={{ fontSize: 12 }}
            unit={"%"}
            axisLine={false}
            tickLine={false}
            domain={[0, 100]}
          />

          <CartesianGrid opacity={0.2} vertical={false} />

          <Tooltip content={<CustomTooltip />} />

          {combinationFilter &&
            combinationFilter.map((combi) => (
              <>
                <Area
                  key={combi}
                  name={`${combi} Star`}
                  dataKey={`avg_${combi}`}
                  type={"monotone"}
                  strokeWidth={2}
                  // fill={"none"}
                  fill="url(#color)"
                  stroke={colorArray[combi - 1]}
                  unit={"%"}
                />
              </>
            ))}

          {individualStarFilter && (
            <>
              <defs>
                <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor={colorArray[individualStarFilter]}
                    stopOpacity={0.4}
                  />
                  <stop
                    offset="75%"
                    stopColor={colorArray[individualStarFilter]}
                    stopOpacity={0.05}
                  />
                </linearGradient>
              </defs>
              <Area
                name={`${individualStarFilter} Star`}
                dataKey={`avg_${individualStarFilter}`}
                type={"monotone"}
                strokeWidth={2}
                // fill={"none"}
                fill="url(#color)"
                stroke={colorArray[individualStarFilter]}
                unit={"%"}
              />
            </>
          )}

          {/* <Legend iconType="circle" /> */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function LineGraphFilterBar({ dispatch }) {
  return (
    <div
      style={{
        marginBottom: "var(--mantine-spacing-xs)",
        display: "flex",
        gap: "var(--mantine-spacing-xs)",
      }}
    >
      <Dropdown
        name={"Mix"}
        dropdownOptions={filterCombinations}
        argOptions={filterCombinations}
        onClick={(arg) => dispatch(changeCombinationFilter(arg))}
      />
      <Dropdown
        name={"Star"}
        dropdownOptions={[1, 2, 3, 4, 5]}
        argOptions={[1, 2, 3, 4, 5]}
        onClick={(arg) => dispatch(changeIndividualStarFilter(arg))}
      />
      <SegmentedButton
        onChange={(arg) => dispatch(changeDataAsPerTime(arg))}
        data={[
          { label: "7D", value: "7-day-time" },
          { label: "1M", value: "30-day-time" },
          { label: "All time", value: "all-time" },
        ]}
      />
    </div>
  );
}

function CustomTooltip({ action, payload, label }) {
  console.log(action, payload, label);
  return (
    <Card padding="xs" radius="sm" withBorder>
      <Label label={label} />
      <StarAverage payload={payload} />
    </Card>
  );
}
function Label({ label }) {
  return (
    <Box align="flex-start" justify="flex-start" gap="xs">
      <Text size="sm">% {label}</Text>
    </Box>
  );
}
function StarAverage({ payload }) {
  return (
    <>
      {payload.length ? (
        <Box align="flex-start" justify="flex-start" gap="xs">
          {payload.map((data) => (
            <Text
              key={data.value}
              size="xs"
              style={{ color: "var(--mantine-color-dark-2)" }}
            >
              {data.name}: {data.value}
              {data.unit}
            </Text>
          ))}
        </Box>
      ) : null}
    </>
  );
}
export default LineGraph;
