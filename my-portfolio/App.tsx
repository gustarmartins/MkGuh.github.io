import React from 'react';
import { Skill, Project, NavItem } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { KotlinIcon, AndroidIcon, JetpackComposeIcon, CodeBracketIcon, ChevronDownIcon, GitHubIcon, LinkedInIcon, EmailIcon } from './constants'; // Added missing imports for icons if needed later, though not strictly for current code.

const App: React.FC = () => {
  const myName = "Gustavo Martins";

  const navItems: NavItem[] = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const skillsData: Skill[] = [
    { name: "Kotlin", icon: <KotlinIcon />, level: "Proficient" },
    { name: "Jetpack Compose", icon: <JetpackComposeIcon />, level: "Experienced" },
    { name: "Android SDK", icon: <AndroidIcon />, level: "Proficient" },
    { name: "MVVM Architecture", icon: <CodeBracketIcon />, level: "Experienced" },
    { name: "Coroutines & Flow", icon: <ChevronDownIcon className="transform -rotate-90"/>, level: "Experienced" }, // Reused icon, consider specific ones
    { name: "Dagger Hilt", icon: <CodeBracketIcon />, level: "Familiar" },
    { name: "Retrofit & OkHttp", icon: <CodeBracketIcon />, level: "Experienced" },
    { name: "Room Database", icon: <CodeBracketIcon />, level: "Experienced" },
    { name: "Git & GitHub", icon: <GitHubIcon />, level: "Proficient" }, // Using GitHubIcon
    { name: "Unit & UI Testing", icon: <CodeBracketIcon />, level: "Familiar" },
  ];

  const projectsData: Project[] = [
    {
      id: "project-1",
      title: "Nutrition App - Tabela TACO",
      description: "A meal plan application built entirely with Jetpack Compose, showcasing MVVM architecture, dealing with local DB and Room persistence.",
      technologies: ["Kotlin", "Jetpack Compose", "Room DB", "Coroutines", "MVVM"],
      imageUrl: "https://picsum.photos/seed/composenotes/400/250",
      repoUrl: "https://github.com/",
      liveUrl: undefined, // "https://play.google.com/store/apps/details?id=com.example.composenotes"
    },
  ];

  return (
    <>
      <Navbar navItems={navItems} developerName={developerName.split(' ')[0]} />
      <main>
        <section id="home"> {/* Direct ID for Hero as it's not using SectionWrapper */}
           <Hero 
            name={developerName}
            title="Mid-Level Android Kotlin Developer"
            subtitle="Passionate about crafting beautiful, high-performance Android applications with a focus on clean code and user-centric design. Specializing in Kotlin and Jetpack Compose."
          />
        </section>
        <SkillsSection skills={skillsData} />
        <ProjectsSection projects={projectsData} />
        <ContactSection />
      </main>
      <Footer developerName={developerName} />
    </>
  );
};

export default App;
