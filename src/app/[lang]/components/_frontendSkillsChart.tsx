import {
  BarChart,
  Legend,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  Bar,
} from "recharts";
import { techSkills } from "../api/skills";

// #region Chart data
const data = techSkills.frontend.map((skill) => ({
  name: skill.name,
  years: parseFloat(skill.years),
}));

// #endregion
const BarChartExample = ({ isAnimationActive = true }) => (
      <ResponsiveContainer width="90%" height={300}>
  
  <BarChart
    layout="vertical"
    data={data}
  >
    <XAxis type="number" />
    <YAxis dataKey="name" type="category" width={100} />
    <Tooltip />
    <Legend />
    <Bar dataKey="years" fill="#8884d8" isAnimationActive={isAnimationActive} />
  </BarChart>
  </ResponsiveContainer>
);

export default BarChartExample;
