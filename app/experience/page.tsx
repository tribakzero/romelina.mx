import { ArrowLeft } from "lucide-react";
import Button from "../components/button";

export default function Experience() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#E6E6FA] p-4">
            <main className="w-full max-w-2xl overflow-hidden rounded-lg bg-white shadow-xl">
                <div className="p-6">
                    <Button href="/">
                        <ArrowLeft className="mr-2 size-4" /> Back to Home{" "}
                    </Button>

                    <h1 className="mb-6 text-3xl font-bold text-gray-800">
                        Experience
                    </h1>

                    <div className="space-y-6">
                        <ExperienceItem
                            title="Full Stack Developer"
                            company="Google"
                            date="November 2024 – Present"
                        />
                        <ExperienceItem
                            title="UI Developer"
                            company="Linkedin"
                            date="December 2022 – November 2024"
                        />
                        <ExperienceItem
                            title="Waiter"
                            company="Applebees"
                            date="January 2020 - December 2022"
                        />
                    </div>

                    <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
                        Education
                    </h2>
                    <div className="space-y-6">
                        <ExperienceItem
                            title="MBA"
                            company="Harvard University"
                            date="August 2024"
                        />
                        <ExperienceItem
                            title="BS, Computer Science"
                            company="The Ohio State University"
                            date="May 2019"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}

function ExperienceItem({
    title,
    company,
    date,
}: {
    title: string;
    company: string;
    date: string;
}) {
    return (
        <div>
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-600">{company}</p>
            <p className="text-sm text-gray-500">{date}</p>
        </div>
    );
}
