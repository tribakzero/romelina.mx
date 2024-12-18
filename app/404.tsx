import Button from "./components/button";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#E6E6FA] p-4">
            <main className="w-full max-w-md overflow-hidden rounded-lg bg-white p-6 text-center shadow-xl">
                <h1 className="mb-4 text-3xl font-bold text-gray-800">
                    404 - Page Not Found
                </h1>
                <p className="mb-6 text-gray-600">
                    The page you&apos;re looking for doesn&apos;t exist or has
                    been moved.
                </p>
                <Button href="/" passHref>
                    "Go back to homepage"
                </Button>
            </main>
        </div>
    );
}
