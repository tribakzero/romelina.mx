import Image from "next/image";
import Link from "next/link";
import { Calendar, Mail, FileText, Youtube, Instagram, Facebook, Music2 } from "lucide-react";
import Button from "./components/button";

export default function Home() {
    const name = "Aurora Sanabria";
    const channel = "Romelina lo Explica Todo";

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#E6E6FA] p-4">
            <main className="w-full max-w-md overflow-hidden rounded-lg bg-white shadow-xl">
                <div className="p-6 text-center">
                    <div className="relative mx-auto mb-4 size-[150px] overflow-hidden rounded-full bg-gray-100">
                        <Image
-                            src="/images/profile.jpg"
                            alt={name}
                            fill
                            sizes="150px"
                            className="object-cover"
                            priority
                        />
                    </div>
                    <h1 className="mb-2 text-2xl font-bold text-gray-800">
                        {name}
                    </h1>
                    <p className="mb-6 text-gray-600">
                        {channel}
                    </p>

                    {/* <div className="space-y-4">
                        <Button href="/experience" fullWidth>
                            <FileText className="mr-2 size-4" />
                            Experience
                        </Button>
                        <Button
                            href="mailto:example@example.org"
                            fullWidth
                        >
                            <Mail className="mr-2 size-4" /> Contact
                        </Button>
                        <Button href="https://cal.com/" fullWidth>
                            <Calendar className="mr-2 size-4" />
                            Schedule a Meeting
                        </Button>
                    </div> */}

                    <div className="mt-6 flex justify-center space-x-4">
                        <Link
                            href="https://www.youtube.com/c/RomelinaLoExplicaTodo/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800"
                        >
                            <Youtube className="size-6" />
                        </Link>
                        <Link
                            href="https://www.tiktok.com/@ro_melancolida/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800"
                        >
                            <Music2 className="size-6" />
                        </Link>
                        <Link
                            href="https://www.instagram.com/ro_melancolida/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800"
                        >
                            <Instagram className="size-6" />
                        </Link>
                        <Link
                            href="https://www.facebook.com/RomelinaLoExplicaTodo/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800"
                        >
                            <Facebook className="size-6" />
                        </Link>
                    </div>
                </div>
            </main>
            <footer className="mt-8 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} {name}. All rights reserved.
            </footer>
        </div>
    );
}
