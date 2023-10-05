import { Dropdown } from "../components/Dropdown";
import SegmentedButton from "../components/SegmentedButton";
import ReviewCard from "../components/reviews/ReviewCard";
import { useDispatch, useSelector } from "react-redux";
import {
  changeReviewDataWithRating,
  changeReviewDataWithTime,
} from "../redux/reviews/filterReviewsSlice";

function Reviews() {
  const { reviewData } = useSelector((state) => state.reviewsFilter);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="topSection"
        style={{
          display: "flex",
          gap: "var(--mantine-spacing-md)",
          
        }}
      >
        <Dropdown
          name={"Rating"}
          argOptions={[1, 2, 3, 4, 5, 15]}
          dropdownOptions={[1, 2, 3, 4, 5, "All stars"]}
          onClick={(arg) => dispatch(changeReviewDataWithRating(arg))}
        />
        <SegmentedButton
          onChange={(arg) => dispatch(changeReviewDataWithTime(arg))}
          data={[
            { label: "7D", value: "7-day-time" },
            { label: "1M", value: "30-day-time" },
            { label: "All time", value: "all-time" },
          ]}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--mantine-spacing-md)",
          marginTop: 'var(--mantine-spacing-md)'
        }}
      >
        {reviewData.map((data) => (
          <ReviewCard data={data} key={data} />
        ))}
      </div>
    </>
  );
}

export default Reviews;
