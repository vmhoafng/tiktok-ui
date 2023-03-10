import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";
import { HeaderOnly, DefaultLayout } from "~/components/Layouts";
interface Routes {
  path: string;
  component: () => JSX.Element;
  layout: any;
}
export const publicRoutes: Routes[] = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/following", component: Following, layout: DefaultLayout },
  { path: "/upload", component: Upload, layout: HeaderOnly },
];
export const privateRoutes = [];
