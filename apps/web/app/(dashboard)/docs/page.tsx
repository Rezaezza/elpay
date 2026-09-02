"use client";

import {
  BookOpen,
  Code2,
  Wallet,
  Blocks,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

export default function DocsPage() {
  const sections = [
    {
      title: "Getting Started",
      description:
        "Learn how to integrate ElPay into your application and connect your wallet.",
      icon: BookOpen,
    },
    {
      title: "Payment API",
      description:
        "Create payments, manage payment requests, and retrieve transaction status.",
      icon: Wallet,
    },
    {
      title: "Smart Contracts",
      description:
        "Contract addresses, ABIs, events, and on-chain interaction guides.",
      icon: Blocks,
    },
    {
      title: "SDK",
      description:
        "JavaScript and TypeScript SDKs for building with ElPay.",
      icon: Code2,
    },
    {
      title: "Security",
      description:
        "Best practices for wallet integration, signatures, and secure payment flows.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="space-y-10">

      <div>
        <h1 className="text-3xl font-bold">
          Developer Documentation
        </h1>

        <p className="mt-3 max-w-3xl text-slate-400">
          Everything developers need to build with ElPay.
          Learn how to integrate payments, interact with smart contracts,
          and build secure multi-chain payment experiences.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">

        {sections.map((section) => {
          const Icon = section.icon;

          return (
            <div
              key={section.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                <Icon className="h-6 w-6 text-blue-400" />
              </div>

              <h2 className="text-lg font-semibold">
                {section.title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {section.description}
              </p>
            </div>
          );
        })}

      </div>

      <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900 p-8 text-center">

        <h2 className="text-xl font-semibold">
          Documentation is under active development
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-slate-400">
          The complete documentation, API reference, SDK examples,
          payment flow guides, and integration tutorials will be
          published before the first public release of ElPay.
        </p>

      </div>

      <div className="flex justify-center border-t border-slate-800 pt-6">

        <a
          href="https://x.com/elpayments"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 transition hover:border-blue-500 hover:bg-slate-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 1227"
            className="h-5 w-5 fill-current"
          >
            <path d="M714.163 519.284L1160.89 0H1055.17L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.728L515.192 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM568.782 688.315L521.36 620.451L144.011 80.48H306.615L611.158 516.222L658.58 584.086L1055.22 1151.59H892.615L568.782 688.341V688.315Z"/>
          </svg>

          <span className="font-medium">
            Follow @elpayments
          </span>

          <ExternalLink className="h-4 w-4" />
        </a>

      </div>

    </div>
  );
}