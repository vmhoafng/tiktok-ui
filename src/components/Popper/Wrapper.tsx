import React from "react";
import classNames from "classnames/bind";
import styles from "./Popper.module.scss";
const cx = classNames.bind(styles);
export default function Wrapper({ children }: any) {
  return (
    <div className={cx("wrapper")}>
      hello
      {children}
    </div>
  );
}
