"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface Props {
  data: {
    day: string;
    volume: number;
  }[];
}

export function VolumeChart({
  data,
}: Props) {
  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">

      <div className="mb-6">

        <h2 className="text-xl font-bold">
          Payment Volume Trend
        </h2>

        <p className="text-sm text-muted-foreground">
          Daily payment volume
        </p>

      </div>

      <div className="h-[360px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <AreaChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="volume"
              stroke="#2563eb"
              fill="#3b82f6"
              fillOpacity={0.2}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}