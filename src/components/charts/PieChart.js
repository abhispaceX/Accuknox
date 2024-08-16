import React from 'react';
import { PieChart as RechartsSimplePie, Pie, Cell, ResponsiveContainer } from 'recharts';

function PieChart({ data }) {
  const COLORS = ['#0088FE', '#FFBB28'];

  return (
    <ResponsiveContainer width="100%" height={200}>
      <RechartsSimplePie>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </RechartsSimplePie>
    </ResponsiveContainer>
  );
}

export default PieChart;