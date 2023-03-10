import React from "react";
import classNames from "classnames/bind";
import styles from "~/components/Layouts/DefaultLayout/DefaultLayout.module.scss";
const cx = classNames.bind(styles);
export default function Sidebar() {
  return <div className={cx("sidebar")}>Sidebar</div>;
}
