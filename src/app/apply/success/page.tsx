import { DM_Sans } from 'next/font/google';
import Link from 'next/link';

const dmsans = DM_Sans({ subsets: ['latin'], weight: '700' });

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-4 p-8 bg-white rounded-lg shadow-md text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className={`text-2xl font-bold text-gray-900 mb-2 ${dmsans.className}`}>
          Application Submitted!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your application. We&apos;ve received your information and will
          review it shortly.
        </p>
        <Link
          href="/"
          className={`px-6 py-3 bg-[#8B5E3C] text-white font-bold rounded-lg hover:bg-[#6F4A2F] transition ${dmsans.className}`}
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}