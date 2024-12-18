import Link from "next/link";
interface ButtonProps {
    href: string;
    passHref?: boolean | undefined;
    fullWidth?: boolean | undefined;
    children: React.ReactNode;
}
export default function Button({
    href,
    passHref,
    fullWidth,
    children,
}: ButtonProps) {
    if (fullWidth) {
        return (
            <Link
                href={href}
                passHref={passHref}
                className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700"
            >
                {children}
            </Link>
        );
    } else {
        return (
            <Link
                href={href}
                passHref={passHref}
                className="mb-6 inline-flex h-10 items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
                {children}
            </Link>
        );
    }
}
