import "./GlobalStyle.scss";

export default function GlobalStyle({
  children,
}: React.PropsWithChildren<{}>): JSX.Element {
  return <>{children}</>;
}
