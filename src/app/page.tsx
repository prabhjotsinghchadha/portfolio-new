import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { Download, ExternalLink, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10">
            <section id="hero" className="relative py-8">
                <div className="mx-auto w-full max-w-2xl space-y-8">
                    <div className="gap-6 flex justify-between items-start">
                        <div className="flex-col flex flex-1 space-y-4">
                            <BlurFade delay={BLUR_FADE_DELAY}>
                                <div className="flex items-center gap-2 mb-2">
                                    <Badge variant="outline" className="text-xs font-medium">
                                        <MapPin className="w-3 h-3 mr-1" />
                                        {DATA.location}
                                    </Badge>
                                    <Badge variant="secondary" className="text-xs">
                                        Available for work
                                    </Badge>
                                </div>
                            </BlurFade>
                            <BlurFadeText
                                delay={BLUR_FADE_DELAY * 2}
                                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                                yOffset={8}
                                text={`Hi, I'm `}
                            />
                            <div className="flex items-center gap-2">
                                <BlurFadeText
                                    delay={BLUR_FADE_DELAY * 2.5}
                                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                                    yOffset={8}
                                    text={DATA.name.split(" ")[0]}
                                />
                                <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
                                    <span className="text-3xl sm:text-5xl xl:text-6xl">👋</span>
                                </BlurFade>
                            </div>
                            <BlurFadeText
                                className="max-w-[600px] md:text-xl text-muted-foreground leading-relaxed"
                                delay={BLUR_FADE_DELAY * 3}
                                text={DATA.description}
                            />
                            
                            {/* Social Links */}
                            <BlurFade delay={BLUR_FADE_DELAY * 4}>
                                <div className="flex items-center gap-3 mt-6">
                                    {Object.entries(DATA.contact.social)
                                        .filter(([_, social]) => social.navbar)
                                        .map(([key, social]) => (
                                            <Tooltip key={key}>
                                                <TooltipTrigger asChild>
                                                    <Link
                                                        href={social.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="bg-muted hover:bg-muted/80 transition-all duration-200 p-2.5 rounded-full hover:scale-105"
                                                    >
                                                        <social.icon className="h-4 w-4" />
                                                    </Link>
                                                </TooltipTrigger>
                                                <TooltipContent>{social.name}</TooltipContent>
                                            </Tooltip>
                                        ))}
                                </div>
                            </BlurFade>
                            
                            {/* CTA Buttons */}
                            <BlurFade delay={BLUR_FADE_DELAY * 5}>
                                <div className="flex items-center gap-3 mt-8">
                                    <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                                        <Link href={`mailto:${DATA.contact.email}`}>
                                            <Mail className="w-4 h-4 mr-2" />
                                            Get in Touch
                                        </Link>
                                    </Button>
                                    <Button variant="outline" asChild>
                                        <Link href="#" download>
                                            <Download className="w-4 h-4 mr-2" />
                                            Download CV
                                        </Link>
                                    </Button>
                                </div>
                            </BlurFade>
                        </div>
                        <BlurFade delay={BLUR_FADE_DELAY * 2}>
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-lg"></div>
                                <Avatar className="size-32 border-2 border-muted relative shadow-xl">
                                    <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="object-cover" />
                                    <AvatarFallback className="text-2xl font-bold">{DATA.initials}</AvatarFallback>
                                </Avatar>
                            </div>
                        </BlurFade>
                    </div>
                </div>
            </section>
            <section id="about" className="bg-muted/30 -mx-6 px-6 py-12 rounded-2xl">
                <div className="space-y-6">
                    <BlurFade delay={BLUR_FADE_DELAY * 6}>
                        <div className="text-center space-y-2">
                            <Badge variant="outline" className="mb-4">
                                About Me
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight">My Journey</h2>
                        </div>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 7}>
                        <Markdown className="prose max-w-full text-pretty font-sans text-center text-muted-foreground dark:prose-invert mx-auto">
                            {DATA.summary}
                        </Markdown>
                    </BlurFade>
                </div>
            </section>
            
            {/* Skills Section */}
            <section id="skills">
                <div className="space-y-6">
                    <BlurFade delay={BLUR_FADE_DELAY * 8}>
                        <div className="text-center space-y-2">
                            <Badge variant="outline" className="mb-4">
                                Skills & Expertise
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight">Technical Proficiency</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Technologies and tools I work with to bring ideas to life
                            </p>
                        </div>
                    </BlurFade>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        {/* Frontend Skills */}
                        <BlurFade delay={BLUR_FADE_DELAY * 9}>
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg text-center">Frontend</h3>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {["React.js", "Next.js", "TypeScript", "JavaScript"].map((skill) => (
                                        <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </BlurFade>
                        
                        {/* Backend Skills */}
                        <BlurFade delay={BLUR_FADE_DELAY * 10}>
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg text-center">Backend & Cloud</h3>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {["Node.js", "Firebase", "GCP", "Docker"].map((skill) => (
                                        <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </BlurFade>
                        
                        {/* Tools & Others */}
                        <BlurFade delay={BLUR_FADE_DELAY * 11}>
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg text-center">Tools & Leadership</h3>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {["Strategic Planning", "Mentoring Teams", "Github", "Redux"].map((skill) => (
                                        <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </BlurFade>
                    </div>
                </div>
            </section>
            <section id="work">
                <div className="space-y-8">
                    <BlurFade delay={BLUR_FADE_DELAY * 12}>
                        <div className="text-center space-y-2">
                            <Badge variant="outline" className="mb-4">
                                Career
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                My professional journey and key contributions
                            </p>
                        </div>
                    </BlurFade>
                    
                    <div className="space-y-6">
                        {DATA.work.map((work, id) => (
                            <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 13 + id * 0.05}>
                                <div className="group hover:bg-muted/50 transition-colors duration-200 p-4 rounded-xl -mx-4">
                                    <ResumeCard
                                        key={work.company}
                                        logoUrl={work.logoUrl}
                                        altText={work.company}
                                        title={work.company}
                                        subtitle={work.title}
                                        href={work.href}
                                        badges={work.badges}
                                        period={`${work.start} - ${work.end ?? "Present"}`}
                                        description={work.description}
                                    />
                                </div>
                                {id < DATA.work.length - 1 && (
                                    <Separator className="my-6" />
                                )}
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>
            <section id="education" className="bg-muted/30 -mx-6 px-6 py-12 rounded-2xl">
                <div className="space-y-8">
                    <BlurFade delay={BLUR_FADE_DELAY * 16}>
                        <div className="text-center space-y-2">
                            <Badge variant="outline" className="mb-4">
                                Education
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight">Academic Background</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Foundation of my technical knowledge and expertise
                            </p>
                        </div>
                    </BlurFade>
                    
                    <div className="space-y-6">
                        {DATA.education.map((education, id) => (
                            <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 17 + id * 0.05}>
                                <div className="group hover:bg-background/50 transition-colors duration-200 p-4 rounded-xl -mx-4">
                                    <ResumeCard
                                        key={education.school}
                                        href={education.href}
                                        logoUrl={education.logoUrl}
                                        altText={education.school}
                                        title={education.school}
                                        subtitle={education.degree}
                                        period={`${education.start} - ${education.end}`}
                                    />
                                </div>
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>
            <section id="skills">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 9}>
                        <h2 className="text-xl font-bold">Skills</h2>
                    </BlurFade>
                    <div className="flex flex-wrap gap-1">
                        {DATA.skills.map((skill, id) => (
                            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                                <Badge key={skill}>{skill}</Badge>
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>
            <section id="projects">
                <div className="space-y-8">
                    <BlurFade delay={BLUR_FADE_DELAY * 18}>
                        <div className="text-center space-y-2">
                            <Badge variant="outline" className="mb-4">
                                Projects
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight">Featured Work</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                A showcase of projects that demonstrate my technical expertise and problem-solving abilities
                            </p>
                        </div>
                    </BlurFade>
                    
                    <div className="grid grid-cols-1 gap-6">
                        {DATA.projects.map((project, id) => (
                            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 19 + id * 0.05}>
                                <div className="group hover:bg-muted/50 transition-all duration-200 p-4 rounded-xl -mx-4 hover:shadow-lg">
                                    <ProjectCard
                                        href={project.href}
                                        key={project.title}
                                        title={project.title}
                                        description={project.description}
                                        dates={project.dates}
                                        tags={project.technologies}
                                        image={project.image}
                                        video={project.video}
                                        links={project.links}
                                    />
                                    {project.active && (
                                        <div className="mt-3">
                                            <Badge className="bg-green-600 hover:bg-green-700">
                                                Active Project
                                            </Badge>
                                        </div>
                                    )}
                                </div>
                                {id < DATA.projects.length - 1 && (
                                    <Separator className="my-8" />
                                )}
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>
            <section id="hackathons" className="bg-muted/30 -mx-6 px-6 py-12 rounded-2xl">
                <div className="space-y-8">
                    <BlurFade delay={BLUR_FADE_DELAY * 20}>
                        <div className="text-center space-y-2">
                            <Badge variant="outline" className="mb-4">
                                Hackathons
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight">Building Innovation</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                During my time in university, I attended {DATA.hackathons.length}+ hackathons. 
                                People from around the country would come together and build incredible things in 2-3 days.
                            </p>
                        </div>
                    </BlurFade>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {DATA.hackathons.map((project, id) => (
                            <BlurFade
                                key={project.title + project.dates}
                                delay={BLUR_FADE_DELAY * 21 + id * 0.05}
                            >
                                <div className="group hover:bg-background/50 transition-colors duration-200 p-4 rounded-xl -mx-4">
                                    <HackathonCard
                                        title={project.title}
                                        description={project.description}
                                        location={project.location}
                                        dates={project.dates}
                                        image={project.image}
                                        links={project.links}
                                    />
                                </div>
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>
            <section id="contact">
                <div className="space-y-8 text-center py-12">
                    <BlurFade delay={BLUR_FADE_DELAY * 22}>
                        <div className="space-y-4">
                            <Badge variant="outline" className="mb-4">
                                Contact
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight">
                                Let&apos;s Work Together
                            </h2>
                            <p className="mx-auto max-w-2xl text-muted-foreground">
                                Want to chat? Just shoot me a dm{" "}
                                <Link
                                    href={DATA.contact.social.X.url}
                                    className="text-primary hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    with a direct question on twitter
                                </Link>{" "}
                                and I&apos;ll respond whenever I can. I will ignore all soliciting.
                            </p>
                        </div>
                    </BlurFade>
                    
                    <BlurFade delay={BLUR_FADE_DELAY * 23}>
                        <div className="flex justify-center gap-6 mt-8">
                            {Object.entries(DATA.contact.social)
                                .filter(([_, social]) => social.navbar)
                                .map(([key, social]) => (
                                    <Tooltip key={key}>
                                        <TooltipTrigger asChild>
                                            <Link
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200 p-4 rounded-full hover:scale-105 shadow-lg"
                                            >
                                                <social.icon className="h-6 w-6" />
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent>{social.name}</TooltipContent>
                                    </Tooltip>
                                ))}
                        </div>
                    </BlurFade>
                    
                    <BlurFade delay={BLUR_FADE_DELAY * 24}>
                        <div className="flex justify-center gap-4 mt-8">
                            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                                <Link href={`mailto:${DATA.contact.email}`}>
                                    <Mail className="w-5 h-5 mr-2" />
                                    Send Email
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <Link href={`tel:${DATA.contact.tel}`}>
                                    Call Me
                                </Link>
                            </Button>
                        </div>
                    </BlurFade>
                </div>
            </section>
        </main>
    );
}
