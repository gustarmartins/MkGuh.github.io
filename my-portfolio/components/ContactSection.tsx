
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EmailIcon, LinkedInIcon, GitHubIcon } from '../constants';

interface ContactLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  ariaLabel: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({ href, icon, text, ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
  >
    <span className="text-sky-500 group-hover:text-sky-600 transition-colors duration-300 text-2xl">
      {icon}
    </span>
    <span className="text-slate-700 group-hover:text-sky-600 font-medium transition-colors duration-300">{text}</span>
  </a>
);


const ContactSection: React.FC = () => {
  const email = "gustavo.martins18@fatec.sp.gov.br"; 
  const linkedInUser = "gustarmartins";
  const githubUser = "gustarmartins";

  return (
    <SectionWrapper id="contact" title="Get In Touch" className="bg-slate-100">
      <p className="text-center text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
        I'm open to discussing new projects, creative ideas, or opportunities.
        Feel free to reach out!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <ContactLink 
          href={`mailto:${email}`}
          icon={<EmailIcon className="w-8 h-8" />}
          text="Email Me"
          ariaLabel="Send an email"
        />
        <ContactLink
          href={`https://linkedin.com/in/${linkedInUser}`}
          icon={<LinkedInIcon className="w-8 h-8" />}
          text="LinkedIn"
          ariaLabel="View LinkedIn profile"
        />
        <ContactLink
          href={`https://github.com/${githubUser}`}
          icon={<GitHubIcon className="w-8 h-8" />}
          text="GitHub"
          ariaLabel="View GitHub profile"
        />
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
