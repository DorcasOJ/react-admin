import "./chart.css";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis } from "recharts";
import { Tooltip } from "@mui/material";


const Chart = ({title, data, dataKey, grid}) => {
  return (
    <div className="chart">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="#5550bd" />
                <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                <Tooltip />
                {grid && <CartesianGrid stroke="%e0dfdf" strokeDasharray="5 5" /> }
            </LineChart>
        </ResponsiveContainer>

    </div>
  );
}

export default Chart