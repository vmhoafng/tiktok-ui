import React from "react";
import Header from "~/components/Layouts/components/Header";

export default function DefaultLayouts({
  children,
}: React.PropsWithChildren<{}>): JSX.Element | any {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
