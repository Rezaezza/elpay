"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
} from "lucide-react";

interface Props {
  value: Date;
  onChange(date: Date): void;
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const week = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export function DateTimePicker({
  value,
  onChange,
}: Props) {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const [currentMonth, setCurrentMonth] = useState(
    new Date(value)
  );

  useEffect(() => {
    function close(e: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    window.addEventListener("mousedown", close);

    return () =>
      window.removeEventListener("mousedown", close);
  }, []);

  const firstDay = useMemo(() => {
    return new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    ).getDay();
  }, [currentMonth]);

  const totalDays = useMemo(() => {
    return new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    ).getDate();
  }, [currentMonth]);

  function selectDay(day: number) {
    const d = new Date(value);

    d.setFullYear(currentMonth.getFullYear());

    d.setMonth(currentMonth.getMonth());

    d.setDate(day);

    onChange(d);
  }

  function changeHour(hour: number) {
    const d = new Date(value);

    d.setHours(hour);

    onChange(d);
  }

  function changeMinute(minute: number) {
    const d = new Date(value);

    d.setMinutes(minute);

    onChange(d);
  }

  return (
    <div
      className="relative"
      ref={ref}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
     className="
flex
h-12
w-full
items-center
justify-between
rounded-xl
border
border-slate-700
bg-slate-900
px-4
text-white
transition
hover:border-blue-500
hover:bg-slate-800
"
      >
        <div className="flex items-center gap-2">
          <CalendarDays
  size={18}
  className="text-slate-400"
/>

          <span>
            {value.toLocaleString()}
          </span>
        </div>
      </button>

      {open && (
        <div
      className="
absolute
z-50
mt-3
w-[360px]
rounded-2xl
border
border-slate-700
bg-slate-900
p-5
shadow-2xl
text-white
"
        >
          <div className="mb-4 flex items-center justify-between">

            <button
              onClick={() =>
                setCurrentMonth(
                  new Date(
                    currentMonth.getFullYear(),
                    currentMonth.getMonth() - 1,
                    1
                  )
                )
              }
            >
              <ChevronLeft />
            </button>

            <h3 className="font-semibold">
              {months[currentMonth.getMonth()]}{" "}
              {currentMonth.getFullYear()}
            </h3>

            <button
              onClick={() =>
                setCurrentMonth(
                  new Date(
                    currentMonth.getFullYear(),
                    currentMonth.getMonth() + 1,
                    1
                  )
                )
              }
            >
              <ChevronRight />
            </button>
          </div>

          <div className="mb-2 grid grid-cols-7 text-center text-xs text-slate-400">
            {week.map((w) => (
              <div key={w}>{w}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstDay }).map(
              (_, i) => (
                <div key={i} />
              )
            )}

            {Array.from({
              length: totalDays,
            }).map((_, i) => {
              const day = i + 1;

              const active =
                value.getDate() === day &&
                value.getMonth() ===
                  currentMonth.getMonth() &&
                value.getFullYear() ===
                  currentMonth.getFullYear();

              return (
                <button
                  key={day}
                  type="button"
                  onClick={() =>
                    selectDay(day)
                  }
          className={`
flex
h-10
items-center
justify-center
rounded-lg
text-sm
transition
${
active
? "bg-blue-600 text-white"
: "text-slate-300 hover:bg-slate-800"
}
`}
                >
                  {day}
                </button>
              );
            })}
          </div>

          <div className="mt-6 border-t border-slate-700 pt-4">

            <div className="mb-3 flex items-center gap-2">
              <Clock3
  size={16}
  className="text-slate-400"
/>
              <span className="font-medium">
                Time
              </span>
            </div>

            <div className="flex gap-3">

              <select
                value={value.getHours()}
                onChange={(e) =>
                  changeHour(Number(e.target.value))
                }
                className="
h-10
rounded-lg
border
border-slate-700
bg-slate-950
px-3
text-white
outline-none
"
              >
                {Array.from({
                  length: 24,
                }).map((_, i) => (
                  <option
                    key={i}
                    value={i}
                  >
                    {String(i).padStart(2, "0")}
                  </option>
                ))}
              </select>

              <select
                value={value.getMinutes()}
                onChange={(e) =>
                  changeMinute(
                    Number(e.target.value)
                  )
                }
                className="
h-10
rounded-lg
border
border-slate-700
bg-slate-950
px-3
text-white
outline-none
"
              >
                {Array.from({
                  length: 60,
                }).map((_, i) => (
                  <option
                    key={i}
                    value={i}
                  >
                    {String(i).padStart(2, "0")}
                  </option>
                ))}
              </select>

            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
className="
mt-5
w-full
rounded-xl
bg-blue-600
py-2.5
font-semibold
text-white
transition
hover:bg-blue-700
"
            >
              Apply
            </button>

          </div>
        </div>
      )}
    </div>
  );
}