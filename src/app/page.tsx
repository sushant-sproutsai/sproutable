import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-emerald-600">
              Sproutable
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/features"
                className="text-gray-600 hover:text-emerald-700"
              >
                Features
              </Link>
              <Link
                href="/solutions"
                className="text-gray-600 hover:text-emerald-700"
              >
                Solutions
              </Link>
              <Link
                href="/pricing"
                className="text-gray-600 hover:text-emerald-700"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-emerald-700"
              >
                About
              </Link>
            </div>
          </div>
          <Button
            size="lg"
            className="hidden md:inline-flex bg-emerald-600 hover:bg-emerald-700"
          >
            Request Demo
          </Button>
        </nav>
      </header>

      <main>
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="relative">
            <div className="absolute -top-4 left-0">
              <div className="inline-flex items-center rounded-full border bg-emerald-50 px-3 py-1 text-sm">
                <span className="text-emerald-600">New</span>
                <span className="mx-1">•</span>
                <span>Introducing AI-powered behavioral analysis</span>
                <Link
                  href="/announcement"
                  className="ml-2 text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center pt-8">
              <div className="space-y-8">
                <h1 className="text-5xl font-bold tracking-tight lg:text-6xl">
                  Automate your hiring pipeline with AI interviews
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Screen thousands of candidates efficiently with our autonomous
                  interview platform. Save time and find the best talent faster.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="text-lg bg-emerald-600 hover:bg-emerald-700"
                  >
                    Start screening
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  >
                    Watch demo
                  </Button>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-gray-500">
                    Trusted by leading companies worldwide
                  </p>
                  <div className="mt-4 flex gap-8">
                    {/* Company logos would go here */}
                    <div className="h-8 w-24 bg-gray-200 rounded" />
                    <div className="h-8 w-24 bg-gray-200 rounded" />
                    <div className="h-8 w-24 bg-gray-200 rounded" />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-full bg-emerald-600/90 p-8">
                  <Globe className="h-full w-full text-white opacity-20" />
                  <div className="absolute inset-0 bg-[radial-gradient(closest-side,transparent_70%,white_100%)]" />
                </div>
              </div>
            </div>
          </div>

          <section className="py-24">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold">How it works</h2>
              <p className="text-xl text-gray-600">
                Three simple steps to transform your hiring process
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Set up your criteria",
                  description:
                    "Define your requirements and interview questions. Our AI will handle the rest.",
                },
                {
                  title: "Send invitations",
                  description:
                    "Invite candidates to complete the automated interview process at their convenience.",
                },
                {
                  title: "Review results",
                  description:
                    "Get detailed insights and recommendations based on AI analysis of responses.",
                },
              ].map((step, index) => (
                <div key={index} className="space-y-4">
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-xl font-bold text-emerald-600">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-xl font-bold text-emerald-600">
                  Sproutable
                </span>
              </Link>
              <p className="mt-4 text-sm text-gray-600">
                Transforming hiring with AI-powered interviews and behavioral
                analysis.
              </p>
            </div>
            <div className="md:col-span-4">
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/features"
                    className="text-gray-600 hover:text-emerald-700"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions"
                    className="text-gray-600 hover:text-emerald-700"
                  >
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-gray-600 hover:text-emerald-700"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/demo"
                    className="text-gray-600 hover:text-emerald-700"
                  >
                    Request Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:col-span-4">
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-emerald-700"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-600 hover:text-emerald-700"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-600 hover:text-emerald-700"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-emerald-700"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
