"use client";
import React from "react";
import GithubIcon from "../../public/images/github-icon.svg";
import LinkedinIcon from "../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import EmailIcon from '@mui/icons-material/Email';

const EmailSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-2 relative items-center"
    >
      {/* Left Column: Text */}
      <div className="z-10">
        <h2 className="text-4xl lg:text-6xl font-bold text-white text-left mb-8 mt-12">
          Let&apos;s Connect
        </h2>
        <p className="text-[#ADB7BE] mb-4 ">
          I&apos;m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, just connect with me!
        </p>
      </div>

      {/* Right Column: Icons */}
      <div className="flex justify-start md:justify-end items-center gap-4">
        <Link href="https://www.github.com/parth-galaaa">
          <Image src={GithubIcon} alt="Github Icon" className="w-10 h-10" />
        </Link>
        <Link href="https://www.linkedin.com/in/gala-parth">
          <Image src={LinkedinIcon} alt="Linkedin Icon" className="w-10 h-10" />
        </Link>
        <Link href="mailto:parth1868134@gmail.com">
          <EmailIcon style={{ color: '#ffffff', width: '40px', height: '40px' }} />
        </Link>
      </div>
    </section>
  );
};

export default EmailSection;
