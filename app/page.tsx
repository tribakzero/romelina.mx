"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Mail, FileText, Linkedin, Instagram } from "lucide-react";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#E6E6FA] p-4">
            <main className="w-full max-w-md overflow-hidden rounded-lg bg-white shadow-xl">
                <div className="p-6 text-center">
                    <div className="relative mx-auto mb-4 size-[150px] overflow-hidden rounded-full bg-gray-100">
                        <Image
                            src={
                                process.env.NODE_ENV == "development"
                                    ? "/images/lm-profile.jpg"
                                    : "/lm/images/lm-profile.jpg"
                            }
                            alt="Lisa-Marie Schwingshandl"
                            fill
                            sizes="150px"
                            className="object-cover"
                            priority
                        />
                    </div>
                    <h1 className="mb-2 text-2xl font-bold text-gray-800">
                        Lisa-Marie Schwingshandl
                    </h1>
                    <p className="mb-6 text-gray-600">
                        Business Development Partner at the CSM Family Office
                    </p>

                    <div className="space-y-4">
                        <Link
                            href="/experience"
                            className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700"
                        >
                            <FileText className="mr-2 size-4" /> Experience
                        </Link>
                        <Link
                            href="mailto:lisamarie@schwingshandl.org"
                            className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700"
                        >
                            <Mail className="mr-2 size-4" /> Contact
                        </Link>
                        <Link
                            href="https://cal.com/"
                            className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700"
                        >
                            <Calendar className="mr-2 size-4" /> Schedule a
                            Meeting
                        </Link>
                    </div>

                    <div className="mt-6 flex justify-center space-x-4">
                        <a
                            href="https://www.linkedin.com/in/schmolmueller-schwingshandl/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800"
                        >
                            <Linkedin className="size-6" />
                        </a>
                        <a
                            href="https://www.instagram.com/lisamarieschwingshandl/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800"
                        >
                            <Instagram className="size-6" />
                        </a>
                    </div>
                </div>
            </main>
            <footer className="mt-8 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Lisa-Marie Schwingshandl. All
                rights reserved.
            </footer>
        </div>
    );
}
