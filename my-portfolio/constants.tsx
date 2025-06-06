
import React from 'react';

export const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const XMarkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const KotlinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-6 h-6"} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2H22L12 12L22 22H2L12 12L2 2Z" />
  </svg>
);

export const AndroidIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-6 h-6"} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 10H16V6C16 5.44772 15.5523 5 15 5C14.4477 5 14 5.44772 14 6V10H10V6C10 5.44772 9.55228 5 9 5C8.44772 5 8 5.44772 8 6V10H6.5C5.11929 10 4 11.1193 4 12.5V17.5C4 18.8807 5.11929 20 6.5 20H17.5C18.8807 20 20 18.8807 20 17.5V12.5C20 11.1193 18.8807 10 17.5 10ZM7.5 15C7.22386 15 7 14.7761 7 14.5C7 14.2239 7.22386 14 7.5 14C7.77614 14 8 14.2239 8 14.5C8 14.7761 7.77614 15 7.5 15ZM16.5 15C16.2239 15 16 14.7761 16 14.5C16 14.2239 16.2239 14 16.5 14C16.7761 14 17 14.2239 17 14.5C17 14.7761 16.7761 15 16.5 15Z" />
    <path d="M15 2.5C15 2.22386 14.7761 2 14.5 2C14.2239 2 14 2.22386 14 2.5V3.5L13.7236 3.22361C13.5361 3.03609 13.2798 2.93199 13.016 2.93961C12.7522 2.94723 12.5021 3.06583 12.3236 3.26738L11.6764 4.03262C11.4979 4.23417 11.2478 4.35277 10.984 4.36039C10.7202 4.36801 10.4639 4.26391 10.2764 4.07639L10 3.5V2.5C10 2.22386 9.77614 2 9.5 2C9.22386 2 9 2.22386 9 2.5V3.5L8.72361 3.22361C8.53609 3.03609 8.27979 2.93199 8.01599 2.93961C7.75219 2.94723 7.50212 3.06583 7.32361 3.26738L6.67639 4.03262C6.49788 4.23417 6.24781 4.35277 5.98401 4.36039C5.72021 4.36801 5.46391 4.26391 5.27639 4.07639L5 3.5V2.5C5 2.22386 4.77614 2 4.5 2C4.22386 2 4 2.22386 4 2.5V4.5C4 4.77614 4.22386 5 4.5 5H19.5C19.7761 5 20 4.77614 20 4.5V2.5C20 2.22386 19.7761 2 19.5 2C19.2239 2 19 2.22386 19 2.5V3.5L18.7236 4.07639C18.5361 4.26391 18.2798 4.36801 18.016 4.36039C17.7522 4.35277 17.5021 4.23417 17.3236 4.03262L16.6764 3.26738C16.4979 3.06583 16.2478 2.94723 15.984 2.93961C15.7202 2.93199 15.4639 3.03609 15.2764 3.22361L15 3.5V2.5Z" />
  </svg>
);

export const JetpackComposeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-6 h-6"} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2zm0 4h2v6h-2z"/>
    <path d="M6.79 6.79C6.4 7.18 6.4 7.81 6.79 8.21L8.59 10H7c-.55 0-1 .45-1 1s.45 1 1 1h1.59l-1.79 1.79c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.79-1.79V15c0 .55.45 1 1 1s1-.45 1-1v-1.59l1.79 1.79c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L14.41 12H16c.55 0 1-.45 1-1s-.45-1-1-1h-1.59l1.79-1.79c.39-.39.39-1.02 0-1.41a.9959.9959 0 00-1.41 0L13 8.59V7c0-.55-.45-1-1-1s-1 .45-1 1v1.59L9.21 6.79c-.39-.39-1.03-.39-1.42 0zM12 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
  </svg>
);

export const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-6 h-6"} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-6 h-6"} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-6 h-6"} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
  </svg>
);

export const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-5 h-5"} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
  </svg>
);

export const CodeBracketIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);

export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-5 h-5"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);
