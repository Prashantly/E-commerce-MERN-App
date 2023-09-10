import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  BounceLoader as MyBounceLoader,

  //   RingLoader as MyRingLoader,
  ClipLoader as MyClipLoader,
  ClockLoader as MyClockLoader,
  FadeLoader as MyFadeLoader,
} from "react-spinners";

const override = {
  color: "#1F1F1F",
};

const centerSpinner = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  flexDirection: "column",
};

export const BounceLoader = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    let interval = setInterval(() => {
      setCount((prev) => --prev);
    }, 1000);
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });

    return () => clearInterval(interval);
  }, [count, navigate, location, path]);
  return (
    <>
      <div style={centerSpinner}>
        <h2>Redirecting you in {count} second</h2>
        <MyBounceLoader cssOverride={override} />
      </div>
    </>
  );
};

export const ClipLoader = () => {
  return (
    <>
      <MyClipLoader cssOverride={override} />
    </>
  );
};

export const FadeLoader = () => {
  return (
    <>
      <MyFadeLoader cssOverride={override} />
    </>
  );
};

export const ClockLoader = () => {
  return (
    <>
      <MyClockLoader cssOverride={override} />
    </>
  );
};

// export const CircleLoader = () => {
//   return (
//     <>
//       <MyCircleLoader style={override} />
//     </>
//   );
// };

// export const RingLoader = () => {
//   return (
//     <>
//       <MyRingLoader style={override} />
//     </>
//   );
// };
