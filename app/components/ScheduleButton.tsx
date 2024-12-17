"use client";

import { Calendar } from "lucide-react";

export function ScheduleButton() {
    return (
        <button
            className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700"
            onClick={() => window.open("https://cal.com/", "_blank")}
        >
            <Calendar className="mr-2 size-4" /> Schedule a Meeting
        </button>
    );
}
