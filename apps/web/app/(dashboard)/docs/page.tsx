"use client";

import {
  ArrowRight,
  ShieldCheck,
  Wallet,
   Store,
  Code2,
  CreditCard,
  Sparkles,
  Building2,
  CheckCircle2,
} from "lucide-react";

export default function DocsPage() {
  return (
    <div className="space-y-20">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden rounded-[32px] border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-12">

        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              Developer Documentation
            </span>

            <h1 className="mt-8 text-6xl font-black leading-tight text-white">

              Build Modern

              <br />

              Payment Applications

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">

              ElPay is an open payment infrastructure that enables
              developers and businesses to create payment requests,
              receive digital payments, and integrate secure payment
              workflows into modern applications.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">

                Get Started

                <ArrowRight size={18} />

              </button>

              <button className="rounded-xl border border-slate-700 px-6 py-3 text-slate-300 transition hover:border-blue-500 hover:text-white">

                View API

              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="rounded-3xl border border-slate-700 bg-slate-900/60 p-8 backdrop-blur">

            <h3 className="mb-8 text-xl font-semibold text-white">

              Payment Flow

            </h3>

            <div className="space-y-5">

              {[
                "Merchant creates payment",
                "Payment request generated",
                "Customer opens payment",
                "Wallet confirmation",
                "Blockchain verification",
                "Payment completed",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">

                    {index + 1}

                  </div>

                  <div className="flex-1 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200">

                    {step}

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHAT IS ELPAY ================= */}

      <section>

        <div className="mb-10">

          <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">

            Overview

          </span>

          <h2 className="mt-3 text-4xl font-bold text-white">

            What is ElPay?

          </h2>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <h3 className="text-2xl font-semibold text-white">

              Open Payment Infrastructure

            </h3>

            <p className="mt-6 leading-8 text-slate-400">

              ElPay standardizes blockchain payments by allowing
              applications to generate secure payment requests
              instead of relying on manual transfers.

            </p>

            <p className="mt-6 leading-8 text-slate-400">

              Every payment is transparent, verifiable and
              processed directly on-chain, giving businesses
              complete visibility into every transaction.

            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

            <div className="space-y-6">

              {[
                "Merchant Registration",
                "Payment Request",
                "Customer Payment",
                "Payment Status Tracking",
                "Wallet Integration",
                "Smart Contract Execution",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4"
                >

                  <CheckCircle2 className="h-6 w-6 text-green-400" />

                  <span className="text-slate-300">

                    {item}

                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHY ELPAY ================= */}

      <section>

        <div className="mb-10">

          <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">

            Why ElPay

          </span>

          <h2 className="mt-3 text-4xl font-bold text-white">

            Built for Developers & Businesses

          </h2>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            {
              icon: Wallet,
              title: "Simple Integration",
              desc: "Integrate payment functionality into your application with minimal setup.",
            },
            {
              icon: CreditCard,
              title: "Payment Requests",
              desc: "Generate secure payment requests for customers in seconds.",
            },
            {
              icon: ShieldCheck,
              title: "Secure",
              desc: "Payments are verified and executed through smart contracts.",
            },
            {
              icon: Code2,
              title: "Developer Friendly",
              desc: "Clean SDKs, APIs and documentation for faster development.",
            },
            {
              icon: Building2,
              title: "Merchant Ready",
              desc: "Designed for businesses that need transparent payment workflows.",
            },
            {
              icon: Sparkles,
              title: "Modern UI",
              desc: "Professional user experience built for modern web applications.",
            },
          ].map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-1 hover:border-blue-500"
              >

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/10">

                  <Icon className="h-7 w-7 text-blue-400" />

                </div>

                <h3 className="text-xl font-semibold text-white">

                  {feature.title}

                </h3>

                <p className="mt-4 leading-7 text-slate-400">

                  {feature.desc}

                </p>

              </div>

            );
          })}

        </div>

      </section>

            {/* ================= PAYMENT FLOW ================= */}

      <section>

        <div className="mb-10">

          <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Workflow
          </span>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Payment Lifecycle
          </h2>

          <p className="mt-4 max-w-3xl text-slate-400">
            Every payment follows the same secure and transparent lifecycle,
            from merchant creation to customer approval and final settlement.
          </p>

        </div>

        <div className="overflow-x-auto">

          <div className="flex min-w-[1100px] items-center justify-between gap-5">

            {[
              {
                title: "Merchant",
                desc: "Registers business",
                color: "bg-violet-500",
              },
              {
                title: "Create Payment",
                desc: "Generate request",
                color: "bg-blue-500",
              },
              {
                title: "Share Link",
                desc: "Send payment URL",
                color: "bg-cyan-500",
              },
              {
                title: "Customer",
                desc: "Open payment page",
                color: "bg-emerald-500",
              },
              {
                title: "Wallet",
                desc: "Approve payment",
                color: "bg-orange-500",
              },
              {
                title: "Blockchain",
                desc: "Verify transaction",
                color: "bg-pink-500",
              },
              {
                title: "Completed",
                desc: "Payment received",
                color: "bg-green-500",
              },
            ].map((step, index) => (

              <div
                key={step.title}
                className="flex items-center"
              >

                <div className="w-40 rounded-3xl border border-slate-800 bg-slate-900 p-6 text-center">

                  <div
                    className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full ${step.color} text-lg font-bold text-white`}
                  >
                    {index + 1}
                  </div>

                  <h3 className="font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    {step.desc}
                  </p>

                </div>

                {index !== 6 && (
                  <ArrowRight
                    className="mx-5 text-blue-400"
                    size={28}
                  />
                )}

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= CORE COMPONENTS ================= */}

      <section>

        <div className="mb-10">

          <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Platform
          </span>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Core Components
          </h2>

        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {[
            {
              title: "Merchant Registry",
              desc: "Stores merchant information and verifies merchant accounts.",
              icon: Building2,
            },
            {
              title: "Payment Processor",
              desc: "Creates and manages blockchain payment requests.",
              icon: CreditCard,
            },
            {
              title: "Wallet Integration",
              desc: "Connect customer wallets for secure payments.",
              icon: Wallet,
            },
            {
              title: "Smart Contracts",
              desc: "Transparent and immutable payment execution.",
              icon: ShieldCheck,
            },
            {
              title: "Developer SDK",
              desc: "Build integrations using JavaScript & TypeScript.",
              icon: Code2,
            },
            {
              title: "Open Infrastructure",
              desc: "Composable architecture designed for modern applications.",
              icon: Sparkles,
            },
          ].map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-blue-500"
              >

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/10">

                  <Icon className="h-7 w-7 text-blue-400" />

                </div>

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.desc}
                </p>

              </div>

            );

          })}

        </div>

      </section>

      {/* ================= ARCHITECTURE ================= */}

      <section className="rounded-[32px] border border-slate-800 bg-slate-900 p-10">

        <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Architecture
        </span>

        <h2 className="mt-3 text-4xl font-bold text-white">
          High-Level Architecture
        </h2>

        <p className="mt-4 max-w-3xl text-slate-400">
          ElPay separates user interfaces, wallet interactions, business
          logic, and blockchain execution into modular layers.
        </p>

        <div className="mt-12 flex flex-col items-center gap-6">

          {[
            "Frontend Application",
            "Wallet Connection",
            "ElPay SDK",
            "Payment Processor",
            "Smart Contracts",
            "Blockchain Network",
          ].map((layer, index) => (

            <div
              key={layer}
              className="flex w-full max-w-xl flex-col items-center"
            >

              <div className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-6 py-5 text-center font-semibold text-white">

                {layer}

              </div>

              {index !== 5 && (

                <div className="my-3 h-10 w-[2px] bg-blue-500" />

              )}

            </div>

          ))}

        </div>

      </section>

      {/* WHY ELPAY */}

<section className="grid gap-10 lg:grid-cols-2">

  <div>

    <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
      Why ElPay
    </span>

    <h2 className="mt-6 text-4xl font-bold text-white">
      Modern infrastructure for programmable payments
    </h2>

    <p className="mt-6 leading-8 text-slate-400">
      ElPay enables developers and businesses to create blockchain-native
      payment experiences with simple APIs and smart contracts.
      Instead of managing complex payment logic manually, ElPay provides
      reusable payment requests, merchant management, secure on-chain
      settlement, and transparent transaction tracking.
    </p>

    <div className="mt-10 space-y-6">

      <div className="flex gap-4">

        <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
          <CreditCard className="h-5 w-5 text-blue-400" />
        </div>

        <div>
          <h3 className="font-semibold text-white">
            Payment Requests
          </h3>

          <p className="mt-2 text-slate-400">
            Create reusable payment requests with custom amounts,
            expiration times, descriptions and supported tokens.
          </p>
        </div>

      </div>

      <div className="flex gap-4">

        <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
          <Store className="h-5 w-5 text-violet-400" />
        </div>

        <div>
          <h3 className="font-semibold text-white">
            Merchant Profiles
          </h3>

          <p className="mt-2 text-slate-400">
            Register merchants once and receive blockchain payments
            through a consistent and secure workflow.
          </p>
        </div>

      </div>

      <div className="flex gap-4">

        <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10">
          <Wallet className="h-5 w-5 text-cyan-400" />
        </div>

        <div>
          <h3 className="font-semibold text-white">
            Wallet Friendly
          </h3>

          <p className="mt-2 text-slate-400">
            Compatible with modern EVM wallets and designed for
            seamless user onboarding.
          </p>
        </div>

      </div>

    </div>

  </div>

  <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

    <h3 className="mb-8 text-xl font-semibold text-white">
      Payment Lifecycle
    </h3>

    <div className="space-y-8">

      <div className="flex items-center gap-5">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
          1
        </div>

        <div>

          <h4 className="font-semibold text-white">
            Merchant Creates Payment
          </h4>

          <p className="text-sm text-slate-400">
            Generate a secure payment request.
          </p>

        </div>

      </div>

      <div className="ml-7 h-10 border-l border-dashed border-slate-700" />

      <div className="flex items-center gap-5">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-xl font-bold text-white">
          2
        </div>

        <div>

          <h4 className="font-semibold text-white">
            Customer Opens Link
          </h4>

          <p className="text-sm text-slate-400">
            Review payment details and connect wallet.
          </p>

        </div>

      </div>

      <div className="ml-7 h-10 border-l border-dashed border-slate-700" />

      <div className="flex items-center gap-5">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-xl font-bold text-white">
          3
        </div>

        <div>

          <h4 className="font-semibold text-white">
            Approve Transaction
          </h4>

          <p className="text-sm text-slate-400">
            Payment is confirmed on-chain.
          </p>

        </div>

      </div>

      <div className="ml-7 h-10 border-l border-dashed border-slate-700" />

      <div className="flex items-center gap-5">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-600 text-xl font-bold text-white">
          4
        </div>

        <div>

          <h4 className="font-semibold text-white">
            Merchant Receives Funds
          </h4>

          <p className="text-sm text-slate-400">
            Funds arrive directly in the merchant wallet.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

{/* ====================================================== */}
{/* ARCHITECTURE */}
{/* ====================================================== */}

<section className="space-y-8">

  <div>
    <h2 className="text-4xl font-bold text-white">
      ElPay Architecture
    </h2>

    <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
      ElPay is designed with a modular architecture that separates
      merchants, payment requests, customer payments, and blockchain
      interactions into reusable components. Every payment request is
      generated on-chain, making payment verification transparent,
      secure, and publicly auditable.
    </p>
  </div>

  <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-10">

    <div className="grid gap-10 lg:grid-cols-5">

      <div className="rounded-2xl bg-slate-950 p-6 text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20">
          👨‍💼
        </div>

        <h3 className="mt-5 text-xl font-semibold text-white">
          Merchant
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-400">
          Creates payment requests and manages incoming customer
          transactions.
        </p>

      </div>

      <div className="flex items-center justify-center text-4xl text-blue-500">
        →
      </div>

      <div className="rounded-2xl bg-slate-950 p-6 text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/20">
          💳
        </div>

        <h3 className="mt-5 text-xl font-semibold text-white">
          Payment Request
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-400">
          Generates an immutable on-chain payment request with
          recipient, amount and expiration.
        </p>

      </div>

      <div className="flex items-center justify-center text-4xl text-blue-500">
        →
      </div>

      <div className="rounded-2xl bg-slate-950 p-6 text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
          🌐
        </div>

        <h3 className="mt-5 text-xl font-semibold text-white">
          Blockchain
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-400">
          Payment is verified and permanently recorded on-chain for
          transparency and security.
        </p>

      </div>

    </div>

  </div>

</section>

{/* ====================================================== */}
{/* PAYMENT LIFECYCLE */}
{/* ====================================================== */}

<section className="space-y-8">

  <div>

    <h2 className="text-4xl font-bold text-white">
      Payment Lifecycle
    </h2>

    <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
      Every payment inside ElPay follows the same predictable lifecycle,
      making integrations simple and reliable for both merchants and
      customers.
    </p>

  </div>

  <div className="grid gap-6 lg:grid-cols-5">

    {[
      {
        number: "01",
        title: "Merchant Registration",
        text: "Register your merchant wallet before creating payment requests.",
      },
      {
        number: "02",
        title: "Create Payment",
        text: "Generate a payment request containing amount, recipient and expiration.",
      },
      {
        number: "03",
        title: "Share Payment",
        text: "Share the payment link or QR Code with your customer.",
      },
      {
        number: "04",
        title: "Customer Pays",
        text: "Customer approves the payment using a supported wallet.",
      },
      {
        number: "05",
        title: "Completed",
        text: "Funds arrive directly on-chain and payment status is updated instantly.",
      },
    ].map((step) => (

      <div
        key={step.number}
        className="rounded-3xl border border-slate-800 bg-slate-900 p-7"
      >

        <div className="text-4xl font-bold text-blue-500">
          {step.number}
        </div>

        <h3 className="mt-6 text-xl font-semibold text-white">
          {step.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-400">
          {step.text}
        </p>

      </div>

    ))}

  </div>

</section>

{/* ====================================================== */}
{/* CODE EXAMPLES */}
{/* ====================================================== */}

<section className="space-y-8">

  <div>

    <h2 className="text-4xl font-bold text-white">
      Code Examples
    </h2>

    <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
      Quickly integrate ElPay into your application using the examples
      below. These snippets demonstrate common payment workflows using
      JavaScript, React, Solidity, and REST APIs.
    </p>

  </div>

  <div className="grid gap-8 xl:grid-cols-2">

    {/* JavaScript */}

    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950">

      <div className="border-b border-slate-800 bg-slate-900 px-6 py-4">

        <div className="flex items-center gap-3">

          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />

          <span className="ml-4 text-sm text-slate-400">
            JavaScript
          </span>

        </div>

      </div>

      <pre className="overflow-x-auto p-6 text-sm leading-7 text-slate-300">
{`import { createPayment } from "@elpay/sdk"

await createPayment({
  payer: "0x123...",
  amount: "50",
  token: "USDC",
  description: "Invoice #1001",
  expiresAt: 1738123000
})`}
      </pre>

    </div>

    {/* React */}

    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950">

      <div className="border-b border-slate-800 bg-slate-900 px-6 py-4">

        <div className="flex items-center gap-3">

          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />

          <span className="ml-4 text-sm text-slate-400">
            React
          </span>

        </div>

      </div>

      <pre className="overflow-x-auto p-6 text-sm leading-7 text-slate-300">
{`const { mutateAsync } = useSendPayment()

await mutateAsync({
  payer,
  token,
  amount,
  description,
  expiresAt
})`}
      </pre>

    </div>

    {/* Solidity */}

    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950">

      <div className="border-b border-slate-800 bg-slate-900 px-6 py-4">

        <div className="flex items-center gap-3">

          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />

          <span className="ml-4 text-sm text-slate-400">
            Solidity
          </span>

        </div>

      </div>

      <pre className="overflow-x-auto p-6 text-sm leading-7 text-slate-300">
{`IPaymentProcessor(processor)
  .createPayment(
      payer,
      usdc,
      amount,
      description,
      expiresAt
  );`}
      </pre>

    </div>

    {/* REST */}

    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950">

      <div className="border-b border-slate-800 bg-slate-900 px-6 py-4">

        <div className="flex items-center gap-3">

          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />

          <span className="ml-4 text-sm text-slate-400">
            REST API
          </span>

        </div>

      </div>

      <pre className="overflow-x-auto p-6 text-sm leading-7 text-slate-300">
{`POST /api/payments

{
  "payer":"0x123...",
  "amount":"50",
  "token":"USDC"
}`}
      </pre>

    </div>

  </div>

</section>

    </div>
  );
}