import Image from "next/image";
import Link from "next/link";
import LinkedinIcon from "./icons/linkedinIcon";
import FacebookLogo from "./icons/facebookLogo";
import InstagramIcon from "./icons/instagramIcon";
import { Mail, MapPin, PhoneIcon } from "lucide-react";

interface FooterProps {
  dict: {
    getInTouch: string;
    address: string;
    companyDescription: string;
    sectors: {
      title: string;
      hospitality: string;
      retail: string;
      fashionBoutiques: string;
      industryProduction: string;
      audit: string;
    };
    contact: {
      title: string;
      client: string;
      partner: string;
      joinUs: string;
    };
    social: {
      follow: string;
    };
    copyright: string;
  };
  lang: string;
}

function Footer({ dict, lang }: FooterProps) {
  return (
    <footer className="relative h-auto xl:h-[430px] w-full text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/footerBg.png"
          alt="Footer background"
          fill
          className="object-cover"
        />
      </div>

      <div className="w-9/10 mx-auto pt-24 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-11 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 xl:col-span-3 w-full lg:w-9/10 text-center  md:text-center lg:text-left flex flex-col items-center md:items-center lg:items-start">
            <div className="w-full flex justify-center">
              <Image
                src="/logoWithTextWhite.png"
                alt="Aetos Technology"
                width={150}
                height={80}
                className="mb-4"
              />
            </div>
            <p className="text-[14px] max-w-md text-start font-inter font-light text-white/90 leading-relaxed">
              {dict.companyDescription}
            </p>
          </div>

          {/* Get in Touch */}
          <div className="col-span-1 xl:col-span-2 text-center md:text-center ml-0 xl:-ml-6 lg:text-left flex flex-col items-center md:items-center lg:items-start">
            <div className="space-y-6 items-center lg:items-start flex flex-col justify-center text-[16px] text-white/90 font-inter font-light">
              <div className="flex w-8/10 lg:w-full text-start gap-2 justify-center md:justify-center lg:justify-start">
                <MapPin className="w-5 h-5 mt-1  shrink-0" />
                <span>{dict.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 shrink-0" />
                <a
                  href="mailto:commercial@aetos.com.tn"
                  className="hover:text-white/80 text-start transition-colors"
                >
                  commercial@aetos.com.tn
                </a>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5 shrink-0" />
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
          <div className="col-span-1 xl:col-span-2 text-center md:text-center lg:text-left flex flex-col items-center md:items-center lg:items-start">
            <h3 className="text-[16px] font-medium mb-4 font-poppins">
              {dict.sectors.title}
            </h3>
            <ul className="space-y-3 font-medium text-white/90 font-roboto text-[16px]">
              <li>
                <Link
                  href={`/${lang}/sectors/hospitality`}
                  className="hover:text-white/80 transition-colors"
                >
                  {dict.sectors.hospitality}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/sectors/retail`}
                  className="hover:text-white/80 transition-colors"
                >
                  {dict.sectors.retail}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/sectors/fashion`}
                  className="hover:text-white/80 transition-colors"
                >
                  {dict.sectors.fashionBoutiques}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/sectors/production`}
                  className="hover:text-white/80 transition-colors"
                >
                  {dict.sectors.industryProduction}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/sectors/audit`}
                  className="hover:text-white/80 transition-colors"
                >
                  {dict.sectors.audit}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contactez-nous */}
          <div className="col-span-1 xl:col-span-2 text-center md:text-center lg:text-left flex flex-col items-center md:items-center lg:items-start">
            <h3 className="text-[16px] mb-4 font-medium font-poppins">
              {dict.contact.title}
            </h3>
            <ul className="space-y-3 font-medium text-white/90 font-roboto text-[16px] mb-6">
              <li>
                <Link
                  href={`/${lang}/contact?type=client`}
                  className="hover:text-white/80 transition-colors"
                >
                  {dict.contact.client}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/contact?type=partner`}
                  className="hover:text-white/80 transition-colors"
                >
                  {dict.contact.partner}
                </Link>
              </li>
              {/* <li>
                <Link
                  href={`/${lang}/contact?type=join`}
                  className="hover:text-white/80 transition-colors"
                >
                  {dict.contact.joinUs}
                </Link>
              </li> */}
            </ul>
          </div>
          {/* Social Media Icons */}
          <div className="col-span-1 xl:col-span-2 flex flex-col items-center md:items-center lg:items-start">
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
            <p className="text-[16px] font-light font-inter text-white/80 mt-4">
              {dict.social.follow}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-sm text-white font-inter">{dict.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
