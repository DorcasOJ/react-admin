import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import "./home.css";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        title="user Analytics"
        data={userData}
        dataKey="Active User"
        grid
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
