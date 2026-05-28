/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./client-page.module.css";

// Centralized high-fidelity client data store with logos
const CLIENTS_DATA: Record<string, {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  longDescription: string;
  logo: string;
  placeholders: { title: string; subtitle: string }[];
}> = {
  hyperverse: {
    id: "hyperverse",
    name: "HyperVerse Studio",
    subtitle: "Brand System & Web Engineering",
    description: "Formulated a kinetic graphic brand system and engineered a high-performance web studio experience.",
    longDescription: "HyperVerse Studio needed a digital presence that matched their futuristic, high-fidelity visual assets. We took their core narrative and transformed it into a fluid, WebGL-powered interactive playground. By engineering custom shaders and a highly optimized React stack, their page loads in under 0.8s while delivering breathtaking cinematic interactions.",
    logo: "/logos/hyperverse.jpg",
    placeholders: [
      { title: "Branding", subtitle: "Formulating a kinetic visual identity, motion rules, and typography grids." },
      { title: "Logo & Banners", subtitle: "Designing custom brand marks, harmonized HSL color palettes, and unified social banner layouts." },
      { title: "Website", subtitle: "Engineering an immersive, high-performance WebGL-powered studio website." }
    ]
  },
  vmun: {
    id: "vmun",
    name: "VMun",
    subtitle: "Logo & Brochure",
    description: "Constructed an immersive conference website and managed complete social media pipeline for registrations.",
    longDescription: "VMun is one of the premier Model United Nations conferences. They challenged Mrxz Labs to completely reinvent their registration workflow and capture the attention of thousands of delegates. We constructed a highly interactive registration dashboard that streamlined booking by 70%, and curated a highly engaging organic social pipeline that boosted signups by 240% month-over-month.",
    logo: "/logos/vmun.jpg",
    placeholders: [
      { title: "Logo", subtitle: "Designing a prestigious official conference mark representing global diplomacy." },
      { title: "Brochure", subtitle: "Curating a structured, print-ready informational guide and delegate handbook." }
    ]
  },
  redcross: {
    id: "redcross",
    name: "Indian Red Cross Society",
    subtitle: "Logo, Branding & Social Media",
    description: "Designed an intuitive regional donation platform and modernized their volunteer registry workflows.",
    longDescription: "The Indian Red Cross Society requires seamless accessibility above all else. We re-engineered their regional donation workflows from the ground up, reducing friction by transforming a complex 5-step form into a single-click interactive card. We also built an intuitive volunteer coordinator dashboard that syncs live regional data in real-time, helping disaster response teams deploy in minutes.",
    logo: "/logos/ircs.png",
    placeholders: [
      { title: "Logo", subtitle: "Pruning the regional emblem with modern grid alignments and vector accuracy." },
      { title: "Branding", subtitle: "Formulating highly accessible styling guidelines and coordinate color frameworks." },
      { title: "Social Media Management", subtitle: "Curating campaign visuals, scheduling volunteer updates, and managing outreach channels." }
    ]
  },
  innerhue: {
    id: "innerhue",
    name: "Innerhue",
    subtitle: "Logo Design",
    description: "Engineered a calming, aesthetic full-stack mental health consultation app and formulated cohesive organic media.",
    longDescription: "Innerhue wanted to build a sanctuary on the web. We designed a deeply calming, aesthetic layout focusing on glassmorphic elements and extremely soft organic color palettes. We built a full-stack booking system for therapy consultations and engineered a complete automated social media content calendar that distributes mindful graphic materials autonomously.",
    logo: "/logos/innerhue.png",
    placeholders: [
      { title: "Logo", subtitle: "Designing a serene, calming, organic brand mark suited for mindful mental health consulting." }
    ]
  }
};

interface ClientPageProps {
  params: {
    client: string;
  };
}

export function generateStaticParams() {
  return [
    { client: "hyperverse" },
    { client: "vmun" },
    { client: "redcross" },
    { client: "innerhue" }
  ];
}

export default function ClientShowcasePage({ params }: ClientPageProps) {
  const clientKey = params.client.toLowerCase();
  const clientData = CLIENTS_DATA[clientKey];

  if (!clientData) {
    notFound();
  }

  // Get the other 3 clients for the bottom navigation
  const otherClients = Object.values(CLIENTS_DATA).filter(
    (c) => c.id !== clientData.id
  );

  return (
    <div className={styles.pageContainer}>
      {/* 1. Translucent Navbar Header */}
      <header className={styles.navbar}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.brandLogo}>
            Mrxz Labs
          </Link>
          <Link href="/#our-work" className={styles.backBtn}>
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

      {/* 2. Client Hero Section (Dark Editorial) */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={`${styles.heroLogoCard} ${clientData.id === "hyperverse" || clientData.id === "redcross" ? styles.containedHeroCard : ""}`}>
            <img 
              src={clientData.logo} 
              alt={clientData.name} 
              className={`${styles.heroClientLogoImg} ${clientData.id === "hyperverse" || clientData.id === "redcross" ? styles.containedLogo : ""} ${clientData.id === "hyperverse" ? styles.hyperverseLogo : ""}`} 
            />
          </div>
          <div className={styles.heroMeta}>
            <span className={styles.heroClientTag}>{clientData.subtitle}</span>
            <h1 className={styles.heroTitle}>{clientData.name}</h1>
            <p className={styles.heroSub}>{clientData.description}</p>
          </div>
        </div>
      </section>

      {/* 3. Project Description Section (Light Alternating Theme) */}
      <section className={styles.descriptionSection}>
        <div className={styles.descriptionContainer}>
          <div className={styles.descColumn}>
            <h2 className={styles.descTitle}>Project Overview</h2>
            <div className={styles.descTitleLine}></div>
            <p className={styles.descText}>{clientData.longDescription}</p>
          </div>
        </div>
      </section>

      {/* 4. Project Deliverables Grid Section (Dark Editorial) */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryContainer}>
          <h2 className={styles.galleryHeading}>Project Deliverables</h2>
          <div className={styles.galleryGrid}>
            {clientData.placeholders.map((item, index) => (
              <div key={index} className={styles.galleryCard}>
                <div className={styles.galleryCardVisual}>
                  <span className={styles.galleryCardNumber}>0{index + 1}</span>
                  <div className={styles.galleryCardShader}></div>
                </div>
                <div className={styles.galleryCardContent}>
                  <h3 className={styles.galleryCardTitle}>{item.title}</h3>
                  <p className={styles.galleryCardText}>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom Navigation Showcase Section (Light Alternating Theme) */}
      <section className={styles.navigationSection}>
        <div className={styles.navigationContainer}>
          <h2 className={styles.navHeading}>Switch Showcase</h2>
          <div className={styles.navGrid}>
            {otherClients.map((other) => (
              <Link
                key={other.id}
                href={`/our-work/${other.id}`}
                className={`${styles.navCard} ${other.id === "hyperverse" || other.id === "redcross" ? styles.containedNavCard : ""}`}
              >
                <div className={styles.navCardLogo}>
                  <img 
                    src={other.logo} 
                    alt={other.name} 
                    className={`${styles.navCardLogoImg} ${other.id === "hyperverse" || other.id === "redcross" ? styles.containedLogo : ""} ${other.id === "hyperverse" ? styles.hyperverseLogo : ""}`} 
                  />
                </div>
                <div className={styles.navCardMeta}>
                  <h3 className={styles.navCardTitle}>{other.name}</h3>
                  <span className={styles.navCardLink}>
                    View Project
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.navCardArrow}
                    >
                      <path
                        d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Premium Clean Minimalist Footer */}
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
