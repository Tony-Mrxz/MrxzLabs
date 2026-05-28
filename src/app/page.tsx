/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Grainient from "@/components/Grainient";

// Persistent client-side session flag to instantly settle animations on client-side navigations
let globalPreloaderPlayed = false;

export default function Home() {
  const [isOverServices, setIsOverServices] = useState(false);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [preloaderPlayed] = useState(globalPreloaderPlayed);

  useEffect(() => {
    // Mark the preloader as played globally on first mount.
    // Because the global JS context persists during client-side navigations, 
    // returning to the homepage will instantly initialize preloaderPlayed to true,
    // while a hard refresh or direct load will reset the context and replay the animation.
    globalPreloaderPlayed = true;
  }, []);

  const getTimelineState = (i: number) => {
    if (hoveredStep === null) {
      return { isDotActive: false, isLineFilled: false };
    }
    return {
      isDotActive: i <= hoveredStep,
      isLineFilled: i < hoveredStep
    };
  };

  const getProcessItemClass = (i: number) => {
    if (hoveredStep === null) {
      return styles.processItem;
    }
    if (i === hoveredStep) {
      return `${styles.processItem} ${styles.active}`;
    } else if (i < hoveredStep) {
      return `${styles.processItem} ${styles.beforeHovered}`;
    } else {
      return `${styles.processItem} ${styles.dimmed}`;
    }
  };

  const getTransitionDelay = (i: number, isActive: boolean) => {
    if (!isActive) return "0s";
    return `${(i - 1) * 0.12}s`; // Smooth progressive delay calculated for flow-based continuous motion across all 6 steps
  };

  useEffect(() => {
    const handleScroll = () => {
      const servicesEl = document.getElementById("services");
      const workEl = document.getElementById("our-work");
      
      let overServices = false;
      let overWork = false;
      
      if (servicesEl) {
        const rect = servicesEl.getBoundingClientRect();
        if (rect.top <= 32 && rect.bottom >= 32) {
          overServices = true;
        }
      }
      
      if (workEl) {
        const rect = workEl.getBoundingClientRect();
        if (rect.top <= 32 && rect.bottom >= 32) {
          overWork = true;
        }
      }
      
      setIsOverServices(overServices || overWork);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      {/* 1. Grainy Monochrome WebGL Gradient Background */}
      <div className={`${styles.bgContainer} ${preloaderPlayed ? styles.settled : ""}`}>
        <Grainient
          color1="#050505"       /* Deep slate-black base */
          color2="#ffffff"       /* Luminous white - now in the center (uColor2), which mixes on both layers to create multiple swirling highlights! */
          color3="#111113"       /* Dark charcoal/slate */
          timeSpeed={0.28}       /* Snappy, premium fluid motion */
          colorBalance={0.1}     /* Shifts balance slightly for richer darks */
          warpStrength={1.2}     /* Dynamic liquid waves */
          warpFrequency={4.5}    /* Complex ripple patterns */
          warpSpeed={2.2}        /* Organic movement speed */
          warpAmplitude={45.0}   /* Shifting warp amplitude */
          blendAngle={65.0}      /* Beautiful diagonal fluid flows */
          blendSoftness={0.09}   /* Silky transitions */
          rotationAmount={550.0} /* Sweeping random rotational shifts */
          noiseScale={2.2}       /* High complexity organic noise */
          grainAmount={0.09}     /* Exquisite high-end film grain texture */
          grainScale={1.8}       /* Fine-grained details */
          grainAnimated={true}   /* Live vibrating noise */
          contrast={1.65}        /* Deep blacks and striking high-contrast silver highlights */
          gamma={0.95}           /* Slight gamma shift for deeper shadows */
          saturation={0.0}       /* Strictly monochrome (pure grayscale gradients) */
        />
      </div>

      {/* 2. Cinematic Brand Logo (Starts centered, glows, flies to navbar, and merges) */}
      <div className={`${styles.brandLogo} ${preloaderPlayed ? styles.settled : ""} ${isOverServices ? styles.chameleonDark : ""}`}>
        Mrxz Labs
      </div>

      {/* 3. Translucent Header Navbar (Left side vacant for the flying logo) */}
      <header className={styles.navbar}>
        <nav>
          <ul className={`${styles.navLinks} ${preloaderPlayed ? styles.settled : ""}`}>
            <li><a href="#services">Services</a></li>
            <li><a href="#how-we-work">Process</a></li>
            <li><a href="#our-work">Work</a></li>
            <li><a href="#about">About Us</a></li>
            <li>
              <Link href="/contact" className={styles.navCtaBtn}>
                Contact us{" "}
                <span className={styles.btnArrow}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* 4. High-Fidelity Minimalist Hero Section (Reveals exactly when logo settles) */}
      <main className={`${styles.hero} ${preloaderPlayed ? styles.settled : ""}`}>
        <h1 className={styles.heroHeadline}>
          <span className={styles.headlineLine}>
            <span className={styles.italicText}>We</span> handle the <span className={styles.italicText}>build.</span>
          </span>
          <span className={styles.headlineLine}>
            <span className={styles.italicText}>You</span> handle the <span className={styles.italicText}>vision.</span>
          </span>
        </h1>
        <p className={styles.heroSubheadline}>
          Every pixel, every post, every page — handled by people who actually care about your growth.
        </p>
        <div style={{ marginBottom: "3rem" }}>
          <button className={styles.heroCta}>
            Grow With Us
          </button>
        </div>

        {/* 5. Social Proof Client Logo Bar */}
        <div className={styles.trustedBy}>
          <h2 className={styles.trustedTitle}>Trusted by Our Clients</h2>
          <div className={styles.clientGrid}>
            <a
              href="https://www.instagram.com/innerhue.org_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className={styles.clientItem}
            >
              <div className={styles.clientLogoWrapper}>
                <img
                  src="/logos/innerhue.png"
                  alt="InnerHue.org"
                  className={`${styles.clientLogo} ${styles.clientLogoZoomed}`}
                />
              </div>
              <span className={styles.clientTooltip}>InnerHue.org</span>
            </a>

            <a
              href="https://www.instagram.com/vizagmun?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className={styles.clientItem}
            >
              <div className={styles.clientLogoWrapper}>
                <img
                  src="/logos/vmun.jpg"
                  alt="VMUN"
                  className={`${styles.clientLogo} ${styles.clientLogoZoomed}`}
                />
              </div>
              <span className={styles.clientTooltip}>VMUN</span>
            </a>

            <a
              href="https://www.hyperversestudios.in"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.clientItem}
            >
              <div className={styles.clientLogoWrapper}>
                <img
                  src="/logos/hyperverse.jpg"
                  alt="HYPERVERSE STUDIOS"
                  className={styles.clientLogo}
                />
              </div>
              <span className={styles.clientTooltip}>HYPERVERSE STUDIOS</span>
            </a>

            <a
              href="https://www.instagram.com/indian_redcross.society_vskp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className={styles.clientItem}
            >
              <div className={styles.clientLogoWrapper}>
                <img
                  src="/logos/ircs.png"
                  alt="INDIAN RED CROSS SOCIETY"
                  className={styles.clientLogo}
                />
              </div>
              <span className={styles.clientTooltip}>
                INDIAN RED CROSS SOCIETY
              </span>
            </a>

            <a
              href="https://9namaha9.in"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.clientItem}
            >
              <div className={styles.clientLogoWrapper}>
                <img
                  src="/logos/namaha.png"
                  alt="Namaha Academy"
                  className={`${styles.clientLogo} ${styles.clientLogoZoomed}`}
                />
              </div>
              <span className={styles.clientTooltip}>Namaha Academy</span>
            </a>
          </div>
        </div>
      </main>

      {/* 6. Dynamic Premium Services Section */}
      <section className={`${styles.servicesSection} ${preloaderPlayed ? styles.settled : ""}`} id="services">
        <div className={styles.servicesContainer}>
          <div className={styles.servicesHeaderContainer}>
            <h2 className={styles.servicesTitle}>Our Services</h2>
            <div className={styles.servicesTitleLine}></div>
          </div>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <span className={styles.serviceNumber}>01</span>
              <h3 className={styles.serviceName}>Web Development</h3>
              <p className={styles.serviceDesc}>
                High-performance websites and web apps built for speed and seamless UX.
              </p>
            </div>

            <div className={styles.serviceItem}>
              <span className={styles.serviceNumber}>02</span>
              <h3 className={styles.serviceName}>Graphic Design</h3>
              <p className={styles.serviceDesc}>
                Unique visual identities, memorable branding, and premium digital assets.
              </p>
            </div>

            <div className={styles.serviceItem}>
              <span className={styles.serviceNumber}>03</span>
              <h3 className={styles.serviceName}>Social Media Management</h3>
              <p className={styles.serviceDesc}>
                Strategic growth campaigns, organic audience engagement, and narrative curation.
              </p>
            </div>

            <div className={styles.serviceItem}>
              <span className={styles.serviceNumber}>04</span>
              <h3 className={styles.serviceName}>Video Editing</h3>
              <p className={styles.serviceDesc}>
                Cinematic cuts, expert pacing, color grading, and highly engaging motion assets.
              </p>
            </div>

            <div className={styles.serviceItem}>
              <span className={styles.serviceNumber}>05</span>
              <h3 className={styles.serviceName}>Automations</h3>
              <p className={styles.serviceDesc}>
                Intelligent background scripts and workflow syncs that save hours of human labor.
              </p>
            </div>
          </div>
          <div className={styles.servicesEndLine}></div>
        </div>
      </section>

      {/* 7. How We Work Process Section */}
      <section className={styles.processSection} id="how-we-work">
        <div className={styles.processContainer}>
          <div className={styles.processHeaderContainer}>
            <h2 className={styles.processTitle}>How We Work</h2>
            <div className={styles.processTitleLine}></div>
          </div>
          
          <div className={styles.processGrid}>
            {[
              {
                number: "01",
                name: "Brand Discovery",
                desc: "We get to know you, your brand, your purpose, and what you're really trying to build."
              },
              {
                number: "02",
                name: "Research",
                desc: "We study your competitors and inspirations to understand where you stand and where you're headed."
              },
              {
                number: "03",
                name: "Goal Alignment",
                desc: "We define exactly what you need, whether that's a website, designs, social media, or all of it."
              },
              {
                number: "04",
                name: "Strategy Draft",
                desc: "We put together a clean focused plan outlining the direction before a single pixel is touched."
              },
              {
                number: "05",
                name: "Building",
                desc: "We get to work. Design, development, content, everything starts coming together."
              },
              {
                number: "06",
                name: "Feedback & Finalization",
                desc: "We share the final version with you, take your feedback, refine, and deliver."
              }
            ].map((step, index) => {
              const i = index + 1;
              const state = getTimelineState(i);
              return (
                <div 
                  key={step.number}
                  className={getProcessItemClass(i)}
                  onMouseEnter={() => setHoveredStep(i)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div className={styles.timelineContainer}>
                    <div className={styles.timelineLine}></div>
                    <div 
                      className={`${styles.timelineLineFill} ${state.isLineFilled ? styles.filled : ""}`}
                      style={{ transitionDelay: getTransitionDelay(i, state.isLineFilled) }}
                    ></div>
                    <div 
                      className={`${styles.timelineDot} ${state.isDotActive ? styles.active : ""}`}
                      style={{ transitionDelay: getTransitionDelay(i, state.isDotActive) }}
                    ></div>
                  </div>
                  <span className={styles.processNumber}>{step.number}</span>
                  <h3 className={styles.processName}>{step.name}</h3>
                  <p className={step.number === "01" || step.number === "02" || step.number === "03" ? styles.processDesc : styles.processDesc}>
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Our Work Section (Light Alternating Theme) */}
      <section className={styles.workSection} id="our-work">
        <div className={styles.workContainer}>
          <div className={styles.workHeaderContainer}>
            <h2 className={styles.workTitle}>Our Work</h2>
            <div className={styles.workTitleLine}></div>
          </div>
          
          <div className={styles.workGrid}>
            {[
              { id: "hyperverse", name: "HyperVerse Studio", subtitle: "Brand System & Web Engineering", logo: "/logos/hyperverse.jpg" },
              { id: "vmun", name: "VMun", subtitle: "Logo & Brochure", logo: "/logos/vmun.jpg" },
              { id: "redcross", name: "Indian Red Cross Society", subtitle: "Logo, Branding & Social Media", logo: "/logos/ircs.png" },
              { id: "innerhue", name: "Innerhue", subtitle: "Logo Design", logo: "/logos/innerhue.png" }
            ].map((client) => (
              <a 
                key={client.id} 
                href={`/our-work/${client.id}`}
                className={`${styles.workCard} ${client.id === "hyperverse" || client.id === "redcross" ? styles.containedCard : ""}`}
              >
                <div className={styles.workLogoWrapper}>
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className={`${styles.workClientLogo} ${client.id === "hyperverse" || client.id === "redcross" ? styles.containedLogo : ""} ${client.id === "hyperverse" ? styles.hyperverseLogo : ""}`} 
                  />
                </div>
                <div className={styles.workCardMeta}>
                  <h3 className={styles.workCardTitle}>{client.name}</h3>
                  <p className={styles.workCardSubtitle}>{client.subtitle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Premium Minimalist About Us Section */}
      <section className={styles.aboutSection} id="about">
        <div className={styles.aboutContainer}>
          {/* Part 1: Story Block */}
          <div className={styles.aboutHeaderContainer}>
            <h2 className={styles.aboutTitle}>About Us</h2>
            <div className={styles.aboutTitleLine}></div>
            <p className={styles.aboutStory}>
              Mrxz Labs started with one person, a laptop, and a willingness to learn. What began as a solo venture offering affordable services grew into a tight-knit team of builders, designers, and strategists who genuinely care about the work they put out.
            </p>
          </div>
          
          {/* Part 2: Team Grid */}
          <div className={styles.teamGrid}>
            {[
              {
                name: "Lalith Sai",
                title: "Founder",
                desc: "Fullstack developer, graphic designer, and AI specialist."
              },
              {
                name: "Nihar Reddy",
                title: "Co-Founder",
                desc: "Finance and outreach."
              },
              {
                name: "Karthik Gowtham",
                title: "Co-Founder",
                desc: "The perfectionist. Every project goes through him before it ships."
              },
              {
                name: "Vamsi Krishna",
                title: "Administrator",
                desc: "IoT expert and fullstack developer."
              },
              {
                name: "Gowtham Kumar",
                title: "Partner",
                desc: "Business management expert."
              }
            ].map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <span className={styles.memberTitle}>{member.title}</span>
                <p className={styles.memberDesc}>{member.desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.aboutEndLine}></div>
        </div>
      </section>

      {/* 10. Cinematic CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to Grow?</h2>
          <p className={styles.ctaSubtext}>Let&apos;s build something great together.</p>
          <Link href="/contact" className={styles.ctaButton}>Grow With Us</Link>
        </div>
      </section>

      {/* 11. Premium Clean Minimalist Footer */}
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
                <li><Link href="#services">Services</Link></li>
                <li><Link href="#our-work">Our Work</Link></li>
                <li><Link href="#how-we-work">How We Work</Link></li>
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
            <p className={styles.footerCopyright}>© 2026 Mrxz Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
