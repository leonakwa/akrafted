"use client";
import {useState} from "react";
import Image from "next/image";

export default function Home() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message}),
    });
  }
  return (
    <main className="min-h-screen bg-black text-white px-6">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-24">

        <Image
          src="/akraftedlogo.png"
          alt="Akrafted Logo"
          width={400}
          height={400}
          className="mb-8"
        />

        <p className="text-gray-400 max-w-2xl text-lg">
          A clarity-first content agency helping brands and digital projects
          communicate with structure, authority, and strategic precision.
        </p>

        <button className="mt-10 bg-gradient-to-r from-orange-600 to-yellow-400 text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
          Work With Us
        </button>

      </section>


      {/* WHAT WE DO */}
      <section className="py-20 text-center border-t border-gray-800">

        <h2 className="text-3xl font-bold mb-6">
          What We Do
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto">
          We transform unclear ideas into structured communication systems.
          From brand storytelling to technical documentation, we craft content
          that strengthens positioning and builds trust.
        </p>

      </section>


      {/* SERVICES */}
      <section className="py-20 border-t border-gray-800">

        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">

          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">
              Brand Messaging
            </h3>
            <p className="text-gray-400">
              Clear positioning, refined tone, and strategic messaging that defines your brand identity.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">
              Web3 & Technical Writing
            </h3>
            <p className="text-gray-400">
              Whitepapers, documentation, and product breakdowns written with clarity and precision.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">
              Growth Content
            </h3>
            <p className="text-gray-400">
              High-impact threads, articles, and campaign content designed to drive engagement and growth.
            </p>
          </div>

        </div>

      </section>


      {/* WHY AKRAFTED */}
      <section className="py-20 border-t border-gray-800 text-center">

        <h2 className="text-3xl font-bold mb-6">
          Why Akrafted
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto">
          We don’t just write content. We build structured communication systems.
          Our approach combines strategic thinking, deep research, and clarity-driven storytelling
          to help brands stand out in competitive digital markets.
        </p>

      </section>


      {/* CTA SECTION */}
      <section className="py-24 border-t border-gray-800 text-center">

        <h2 className="text-3xl font-bold mb-6">
          Ready To Bring Clarity To Your Brand?
        </h2>

        <button className="bg-gradient-to-r from-orange-600 to-yellow-400 text-black px-10 py-4 rounded-xl font-semibold hover:scale-105 transition">
          Let’s Build Together
        </button>

      </section>

      {/*CONTACT SECTON*/}
      <section className="py-20 border-t border-gray-800 text-center">

        <h2 className="text-3x1 font-bold mb-8">
          Contact Us
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-x1 mx-auto space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-gray-800 text-white"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-gray-800 text-white"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-4 rounded-lg bg-gray-800 text-white"
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-orange-600 to-yellow-400 text-black px-8 py-3 rounded-x1 font-semibold hover:scale-105 transiion"
          >
            Send Message
          </button>
        </form>
      </section>

    </main>
  );
}
