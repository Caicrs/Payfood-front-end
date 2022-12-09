import { useMediaQuery } from "react-responsive";
import MobileVersion from "./mobileVersion";
import DesktopVersion from "./desktopVersion";

function Dashboard() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
    {isTabletOrMobile ? <MobileVersion/> : <DesktopVersion/>}
    </>
  )
}

export default Dashboard;
