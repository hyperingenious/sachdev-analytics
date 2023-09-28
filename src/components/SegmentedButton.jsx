import { SegmentedControl } from "@mantine/core";

function SegmentedButton({ onChange }) {
  return (
    <SegmentedControl
    size="xs"
      onChange={onChange} // format:  (arg) => dispatch(changeDataAsPerTime(arg))
      data={[
        { label: "7D", value: "7-day-time" },
        { label: "1M", value: "30-day-time" },
        { label: "All time", value: "all-time" },
      ]}
    />
  );
}

export default SegmentedButton;
