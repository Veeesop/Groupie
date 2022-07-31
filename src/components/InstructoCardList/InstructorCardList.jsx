import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InstructorCardItem from "../InstructorCardItem/InstructorCardItem";

function InstructorCardList() {
  const dispatch = useDispatch();
  // Need to bring in instructor from redux store
  const instructor = useSelector((store) => store.instructor);

  // Random instructor list
  const random = instructor.sort(() => Math.random() - 0.5);
  console.log("random", random);

  // useEffect to fetch instructors on page load
  // dispatch 'FETCH_INSTRUCTORS' to trigger saga
  useEffect(() => {
    dispatch({
      type: "FETCH_INSTRUCTORS",
    });
  }, []);

  return (
    <>
      <section className="instructors-container">
        {/* Limit feature instructors to 3 using slice method */}
        {instructor.slice(0, 3).map((item, i) => {
          return <InstructorCardItem key={i} item={item} />;
        })}
      </section>

      <div className="about-section">
        <h4>About Placeholder</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
          ante ut tellus lacinia, vel euismod eros euismod. Proin ut ipsum vitae
          diam convallis convallis id sit amet enim. Morbi nec iaculis enim.
          Nulla tempor vehicula dui, vel gravida tortor ultricies ac. Vestibulum
          rutrum mauris ut magna dictum pellentesque. Vestibulum risus odio,
          dictum et justo vitae, rutrum condimentum arcu. Nullam sed ultrices
          libero. Curabitur tempor tristique ipsum vitae porttitor. Duis sed
          aliquet enim. Nullam et aliquet purus, eu convallis sem. Aliquam
          consectetur tincidunt metus, nec laoreet dui pellentesque ad.
        </p>
      </div>
    </>
  );
}

export default InstructorCardList;
