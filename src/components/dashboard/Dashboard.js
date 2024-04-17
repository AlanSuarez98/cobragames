import Nav from "../nav/Nav";
import "./Dashboard.css";
import MainDashboard from "./componentsDashboard/mainDashboard/MainDashboard";
import Footer from "../footer/Footer";

const Dashboard = () => {
  return (
    <div>
      <Nav showTitle={true} />
      <MainDashboard />
      <Footer />
    </div>
  );
};

export default Dashboard;
