
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import Pac3200 from "views/pac3200";
import Pac3200_2 from "views/pac3200_2";
import Tools from "views/tools";
import HistoricalData from "views/HistoricalData";
import ProgramInfo from "views/programData";
import Help from "views/Help";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    component: Dashboard,
    layout: "/admin",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: "tim-icons icon-atom",
  //   component: Icons,
  //   layout: "/admin",
  // },
  {
    path: "/Tools",
    name: "tool values",
    component: Tools,
    layout: "/admin",
  },
  {
    path: "/pac3200",
    name: "current program",
    component: Pac3200,
    layout: "/admin",
  },
  {
    path: "/map",
    name: "Drive parameters",
    component: Map,
    layout: "/admin",
  },
  {
    path: "/Pac3200_2",
    name: "pac3200",
    component: Pac3200_2,
    layout: "/admin",
  },
  {
    path: "/programData",
    name: "Program Info",
    component: ProgramInfo,
    layout: "/admin",
  },
  {
    path: "/HistoricalData",
    name: "Historical Data",
    component: HistoricalData,
    layout: "/admin",
  },
  {
    path: "/Help",
    name: "Help",
    component: Help,
    layout: "/admin",
  },
];
export default routes;
