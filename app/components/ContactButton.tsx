"use client";

import { Mail } from "lucide-react";

export function ContactButton() {
    return (
        <button
            className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700"
            onClick={() =>
                (window.location.href = "mailto:lisamarie@schwingshandl.org")
            }
        >
            <Mail className="mr-2 size-4" /> Contact
        </button>
    );
}
