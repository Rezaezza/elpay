"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = [
  "#22c55e",
  "#3b82f6",
  "#facc15",
  "#ef4444",
  "#f97316",
  "#64748b",
];

interface Props {
  data: {
    name: string;
    value: number;
  }[];
}

export function StatusChart({
  data,
}: Props) {
  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">

      <div className="mb-6">

        <h2 className="text-xl font-bold">
          Payment Status Distribution
        </h2>

        <p className="text-sm text-muted-foreground">
          Distribution of payment status
        </p>

      </div>

      <div className="h-[360px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={120}
              innerRadius={65}
              paddingAngle={3}
            >

              {data.map((_, index) => (

                <Cell
                  key={index}
                  fill={
                    COLORS[
                      index % COLORS.length
                    ]
                  }
                />

              ))}

            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}