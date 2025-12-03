import Image from "next/image";
import Link from "next/link";
import LinkedinIcon from "./icons/linkedinIcon";
import FacebookLogo from "./icons/facebookLogo";
import InstagramIcon from "./icons/instagramIcon";

function Footer() {
  return (
    <footer className="relative w-full text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/footerBg.png"
          alt="Footer background"
          fill
          className="object-cover"
        />
      </div>

      <div className="w-9/10 mx-auto pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Image
              src="/logoWithTextWhite.png"
              alt="Aetos Technology"
              width={180}
              height={60}
              className="mb-4"
            />
            <p className="text-sm text-white/90 leading-relaxed max-w-sm">
              Société d&apos;ingénierie qui conçoit et déploie des solutions
              technologiques destinées à améliorer la productivité, la
              rentabilité et la réactivité des entreprises.
            </p>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  B02 Immeube Nessma, AV
                  <br />
                  UMA La Soukra Ariana
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:commercial@aetos.com.tn"
                  className="hover:text-white/80 transition-colors"
                >
                  commercial@aetos.com.tn
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+21670295551"
                  className="hover:text-white/80 transition-colors"
                >
                  +216 70 295 551
                </a>
              </div>
            </div>
          </div>

          {/* Secteurs */}
          <div>
            <h3 className="font-bold text-lg mb-4">Secteurs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/sectors/hospitality"
                  className="hover:text-white/80 transition-colors"
                >
                  Hospitalité
                </Link>
              </li>
              <li>
                <Link
                  href="/sectors/retail"
                  className="hover:text-white/80 transition-colors"
                >
                  Retail
                </Link>
              </li>
              <li>
                <Link
                  href="/sectors/fashion"
                  className="hover:text-white/80 transition-colors"
                >
                  Boutiques de Mode & d&apos;Habillement
                </Link>
              </li>
              <li>
                <Link
                  href="/sectors/production"
                  className="hover:text-white/80 transition-colors"
                >
                  Industrie & Production
                </Link>
              </li>
              <li>
                <Link
                  href="/sectors/audit"
                  className="hover:text-white/80 transition-colors"
                >
                  Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Contactez-nous */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contactez-nous</h3>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <Link
                  href="/client"
                  className="hover:text-white/80 transition-colors"
                >
                  Client
                </Link>
              </li>
              <li>
                <Link
                  href="/partner"
                  className="hover:text-white/80 transition-colors"
                >
                  Partenaire
                </Link>
              </li>
              <li>
                <Link
                  href="/join"
                  className="hover:text-white/80 transition-colors"
                >
                  Nous Rejoindre
                </Link>
              </li>
            </ul>
          </div>
          {/* Social Media Icons */}
          <div className="flex flex-col">
            <div className="flex flex-row gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors"
                aria-label="Facebook"
              >
                <FacebookLogo />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
            <p className="text-xs text-white/80 mt-4">
              Suivez-nous pour rester informé de nos actualités.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-sm text-white/80">
            Copyright Aetos technology 2025
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
