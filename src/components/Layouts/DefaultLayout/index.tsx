import React from "react";
import Header from "~/components/Layouts/components/Header";
import Sidebar from "./Sidebar";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
const cx = classNames.bind(styles);
export default function DefaultLayouts({
  children,
}: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}
