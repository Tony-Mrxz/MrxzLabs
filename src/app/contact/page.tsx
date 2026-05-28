"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./contact.module.css";
import Grainient from "@/components/Grainient";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Web Development");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
    
    // Construct beautifully formatted message for WhatsApp
    const text = `Hello Mrxz Labs!\n\nI would like to discuss a project.\n\n*Name:* ${fullName}\n*Email:* ${email}\n*Service Needed:* ${service}\n\n*Message:*\n${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/917989585690?text=${encodedText}`;
    
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.pageContainer}>
      {/* Dynamic Swirling WebGL Monochrome Gradient Background */}
      <div className={styles.bgContainer}>
        <Grainient
          color1="#050505"       /* Deep slate-black base */
          color2="#ffffff"       /* Luminous white */
          color3="#111113"       /* Dark charcoal/slate */
          timeSpeed={0.28}       /* Snappy premium motion */
          colorBalance={0.1}
          warpStrength={1.2}
          warpFrequency={4.5}
          warpSpeed={2.2}
          warpAmplitude={45.0}
          blendAngle={65.0}
          blendSoftness={0.09}
          rotationAmount={550.0}
          noiseScale={2.2}
          grainAmount={0.09}
          grainScale={1.8}
          grainAnimated={true}
          contrast={1.65}
          gamma={0.95}
          saturation={0.0}
        />
      </div>

      {/* 1. Translucent Navbar Header */}
      <header className={styles.navbar}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.brandLogo}>
            Mrxz Labs
          </Link>
          <Link href="/" className={styles.backBtn}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.backArrow}
            >
              <path
                d="M8.75 11.375L4.375 7L8.75 2.625"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Portfolio
          </Link>
        </div>
      </header>

      {/* 2. Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <div className={styles.headerBlock}>
            <h1 className={styles.title}>Let&apos;s Talk</h1>
            <div className={styles.titleLine}></div>
            <p className={styles.subtext}>Tell us about your project and we&apos;ll get back to you.</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Full Name */}
            <div className={styles.inputGroup}>
              <label htmlFor="fullName" className={styles.label}>Full Name</label>
              <input
                type="text"
                id="fullName"
                required
                placeholder="karthik"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={styles.input}
              />
            </div>

            {/* Email */}
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input
                type="email"
                id="email"
                required
                placeholder="karthik@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
            </div>

            {/* Service Dropdown */}
            <div className={styles.inputGroup}>
              <label htmlFor="service" className={styles.label}>Service Needed</label>
              <div className={styles.selectWrapper}>
                <select
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className={styles.select}
                >
                  <option value="Web Development">Web Development</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Social Media Management">Social Media Management</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Automations">Automations</option>
                </select>
              </div>
            </div>

            {/* Message Textarea */}
            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}>Your Message</label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Tell us about your vision, goals, and timeline..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={styles.textarea}
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className={styles.submitBtn}>
              Send via WhatsApp
            </button>
          </form>

          {/* Divider */}
          <div className={styles.formDivider}>
            <span className={styles.dividerText}>or</span>
          </div>

          {/* Quick Chat Button */}
          <a
            href="https://wa.me/917989585690"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.chatBtn}
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* 3. Premium Clean Minimalist Footer */}
      <footer className={styles.footer}>
        {/* Giant Watermark Text behind content */}
        <div className={styles.footerWatermark}>MRXZ</div>
        <div className={styles.footerContainer}>
          <div className={styles.footerGrid}>
            {/* Left Column: Brand & Tagline */}
            <div className={styles.footerCol}>
              <h3 className={styles.footerBrand}>Mrxz Labs</h3>
              <p className={styles.footerTagline}>Every pixel, every post, every page.</p>
            </div>
            
            {/* Middle Column: Quick Links */}
            <div className={styles.footerCol}>
              <h4 className={styles.footerColTitle}>Quick Links</h4>
              <ul className={styles.footerLinks}>
                <li><Link href="/#services">Services</Link></li>
                <li><Link href="/#our-work">Our Work</Link></li>
                <li><Link href="/#how-we-work">How We Work</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            
            {/* Right Column: Contact Details */}
            <div className={styles.footerCol}>
              <h4 className={styles.footerColTitle}>Get in Touch</h4>
              <p className={styles.footerContact}>
                Email: <a href="mailto:cybmrxz@gmail.com" className={styles.footerEmailLink}>cybmrxz@gmail.com</a>
              </p>
            </div>
          </div>
          
          {/* Divider */}
          <div className={styles.footerDivider}></div>
          
          {/* Bottom Bar */}
          <div className={styles.footerBottom}>
            <p className={styles.footerCopyright}>© {new Date().getFullYear()} Mrxz Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
