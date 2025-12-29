import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Sat", value: 20 },
  { day: "Sun", value: 32 },
  { day: "Mon", value: 20 },
  { day: "Tue", value: 12 },
  { day: "Wed", value: 20 },
  { day: "Thu", value: 25 },
  { day: "Fri", value: 60 },
  { day: "Sat", value: 48 },
  { day: "Sun", value: 35 },
  { day: "Mon", value: 20 },
  { day: "Tue", value: 25 },
  { day: "Wed", value: 22 },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} barSize={18}>
        <CartesianGrid
          strokeDasharray="4 4"
          vertical={false}
          stroke="#e5e7eb"
        />

        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#616161", fontSize: 13, fontFamily: "var(--rem)" }}
        />

        <YAxis
          tickFormatter={(v) => `${v}%`}
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#616161", fontSize: 12 }}
          domain={[0, 60]}
        />

        <Bar dataKey="value" fill="#D9D9D9" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
