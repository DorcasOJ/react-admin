import "./featuredInfo.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const FeaturedInfo = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,145</span>
                <span className="featuredMoneyRate">
                    -26.4 <ArrowDownwardIcon className="featuredIcon negative" />
                </span>
            </div>
            <div className="featuredSub">Compared to last month</div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$9,145</span>
                <span className="featuredMoneyRate">
                    -2.4 <ArrowDownwardIcon className="featuredIcon negative" />
                </span>
            </div>
            <div className="featuredSub">Compared to last month</div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$5,145</span>
                <span className="featuredMoneyRate">
                    +8.4 <ArrowUpwardIcon className="featuredIcon" />
                </span>
            </div>
            <div className="featuredSub">Compared to last month</div>
        </div>
    </div>
  )
}

export default FeaturedInfo