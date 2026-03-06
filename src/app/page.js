"use client";
import {useEffect, useState} from "react";

export default function Home() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message}),
    });

    if (res.ok) {
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } 
    setLoading(false);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, [])

    if (loading) {
      return (
        <div className="loader-wrapper">
          <img src="/akraftedlogo.png" className="loader-logo" alt="Akrafted logo"/>
        </div>
      );
    }
  };
  return (
  
     
    <main>

      <header className="header">
        <div className="nav-container">

          <div className="brand">
             <img src="/akraftedlogo.png" alt="Akrafted Logo" className="logo" />

             
             <p className="motto">
               Crafted for Creativity. Built for Impact.
             </p>

          </div>

          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
       
      </header>

      {/* HERO SECTION */}
      <section className="hero">

        <p className="hero-content">
          A clarity-first content agency helping brands and digital projects
          communicate with structure, authority, and strategic precision.
        </p>

        <button className="hero-button"
          onClick={() =>
            document.getElementById("contact-form").scrollIntoView([
            ])
          }>
          Work With Us
        </button>

      </section>


      {/* WHAT WE DO */}
      <section className="wwd">

        <h2 className="wwd-head">
          What We Do
        </h2>

        <p className="wwd-content">
          We transform unclear ideas into structured communication systems.
          From brand storytelling to technical documentation, we craft content
          that strengthens positioning and builds trust.
        </p>

      </section>


      {/* SERVICES */}
      <section className="services">

        <h2 className="services-head">
          Our Services
        </h2>

        <div className="services-content">

          <div>
            <h3 className="bm">
              Brand Messaging
            </h3>
            <p className="bm-content">
              Clear positioning, refined tone, and strategic messaging that defines your brand identity.
            </p>
          </div>

          <div>
            <h3 className="wtw">
              Web3 & Technical Writing
            </h3>
            <p className="wtw-content">
              Whitepapers, documentation, and product breakdowns written with clarity and precision.
            </p>
          </div>

          <div>
            <h3 className="gc">
              Growth Content
            </h3>
            <p className="gc-content">
              High-impact threads, articles, and campaign content designed to drive engagement and growth.
            </p>
          </div>

        </div>

      </section>


      {/* WHY AKRAFTED */}
      <section className="whyak">

        <h2 className="whyak-head">
          Why Akrafted?
        </h2>

        <p className="whyak-content">
          We don’t just write content. We build structured communication systems.
          Our approach combines strategic thinking, deep research, and clarity-driven storytelling
          to help brands stand out in competitive digital markets.
        </p>

      </section>


      {/* CTA SECTION */}
      <section className="cta">

        <h2 className="cta-head">
          Ready To Bring Clarity To Your Brand?
        </h2>

        <button className="cta-button"
          onClick={() =>
            document.getElementById("contact-form").scrollIntoView()
          }>
          Let’s Build Together
        </button>

      </section>

      {/*CONTACT SECTON*/}
      <section className="contact">

        <h2 className="contact-head">
          Contact Us
        </h2>


        {success && (
         <div className="successMessage">
          Message sent successfully!
          </div>
        )}  

        <form
          onSubmit={handleSubmit}
          className="form1"
          id="contact-form"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            className="name"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Your Email"
            value={email}
            className="name"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            placeholder="Your Message"
            value={message}
            rows="5"
            className="name"
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button
            type="submit" disabled={loading}
            
            className="form-button"
          >
            {loading ? "Sending..." : "Send Message"}

          </button>
        </form>
      </section>

    </main>
    
  );
}
