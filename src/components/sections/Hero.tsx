"use client"
import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"
import { Badge } from "../ui/Badge"
import { SocialIcon } from "../ui/SocialIcon"
import { Button } from "../ui/Button"
import { socials } from "@/data/socials"
import { FloatingCodeSnippet } from "../decorations/FloatingCodeSnippet"
import { BentoCard } from "../ui/BentoCard"
import Image from "next/image"
function TechCategory({ title, skills }: { title: string, skills: string[] }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-text-secondary text-sm font-medium">{title}:</p>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <div key={skill} className="px-3 py-1.5 text-xs border border-border-subtle bg-black/5 dark:bg-white/10 hover:bg-surface-hover hover:border-accent-cyan/50 transition-colors rounded-lg text-text-primary whitespace-nowrap cursor-default">
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}
export function Hero() {
  const { t } = useLanguage()
  const [caraxesState, setCaraxesState] = React.useState<'idle' | 'burning' | 'restore'>('idle')
  React.useEffect(() => {
    const handleCaraxes = (e: any) => {
      setCaraxesState(e.detail.state)
      if (e.detail.state === 'restore') {
        setTimeout(() => setCaraxesState('idle'), 1000)
      }
    }
    window.addEventListener('caraxes-transition', handleCaraxes)
    return () => window.removeEventListener('caraxes-transition', handleCaraxes)
  }, [])
  const isBurning = caraxesState === 'burning'
  const burningClasses = "fire-burn-out"
  const illuminatedClasses = "shadow-[0_0_60px_rgba(255,69,0,0.4)] border-orange-500/50 blur-[1px] brightness-110 saturate-150 transition-all duration-500 ease-in-out"
  return (
    <section id="about" className="relative mx-auto w-full pb-20 pt-32 lg:pt-40">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6 auto-rows-auto">
        <BentoCard className={`col-span-1 md:col-span-4 lg:col-span-3 lg:row-span-2 flex flex-col justify-between space-y-8 relative z-20 transition-opacity duration-500 ease-in-out ${isBurning ? burningClasses : 'opacity-100'}`}>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Badge>{t("Hero.status")}</Badge>
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-text-primary glitch-hover w-fit">
                Lucas Rubira
              </h1>
              <h2 className="text-lg sm:text-xl text-text-secondary leading-relaxed font-medium">
                Desenvolvedor de Software focado em <span className="inline-flex items-center gap-1.5 text-accent-red font-bold">Ruby on Rails</span> e <span className="text-accent-cyan font-bold">React</span>.
              </h2>
              <p className="text-base text-text-secondary leading-relaxed max-w-lg">
                {t("Hero.description")}
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3 w-full">
              <Button asChild variant="primary">
                <a href="#projects">
                  {t("Hero.viewProjects")}
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href={socials.find(s => s.id === 'whatsapp')?.url || '#'}>
                  {t("Hero.contactMe")}
                </a>
              </Button>
              <Button asChild variant="tertiary">
                <a href="#certificates">
                  {t("Hero.certificates")}
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <SocialIcon key={social.id} href={social.url} icon={<social.icon className="h-5 w-5" />} />
              ))}
            </div>
          </div>
        </BentoCard>
        <BentoCard className={`col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 flex flex-col relative z-20 ${isBurning ? illuminatedClasses : 'transition-all duration-500 ease-in-out'}`} noPadding>
          <div className="p-6 pb-2 flex items-baseline gap-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-mono glitch-hover">DAILY</h2>
            <p className="text-xl sm:text-2xl font-bold text-text-secondary">STACK.</p>
          </div>
          <div className="flex-1 overflow-y-auto p-6 pt-4 space-y-6 bg-black/5 dark:bg-white/5 rounded-b-3xl">
            <TechCategory title="Frontend" skills={['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']} />
            <TechCategory title="Backend" skills={['Ruby on Rails', 'Ruby', 'Node.js', 'PostgreSQL', 'Docker']} />
            <TechCategory title="Tools" skills={['Git', 'Vercel', 'Figma']} />
          </div>
        </BentoCard>
        <BentoCard className={`col-span-1 md:col-span-1 lg:col-span-1 relative min-h-[200px] md:min-h-0 group z-20 ${isBurning ? illuminatedClasses : 'transition-all duration-500 ease-in-out'}`} noPadding>
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <Image
              src="/profile.jpg"
              alt="Lucas Rubira"
              fill
              className="object-cover group-hover:scale-105 group-hover:rotate-1 transition-all duration-500 ease-out"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority
            />
          </div>
        </BentoCard>
        <BentoCard className={`col-span-1 md:col-span-1 lg:col-span-1 flex flex-col items-center justify-center bg-surface-hover/30 min-h-[200px] md:min-h-0 relative group overflow-hidden z-20 ${isBurning ? illuminatedClasses : 'transition-all duration-500 ease-in-out'}`} noPadding>
          <div className="absolute inset-0 bg-gradient-to-br from-accent-red/5 to-accent-cyan/5 opacity-50"></div>
          <Image
            src="/dragon.gif"
            width={90}
            height={90}
            alt="Dragon"
            className="opacity-70 group-hover:opacity-100 drop-shadow-[0_0_15px_rgba(255,59,78,0.5)] group-hover:scale-110 transition-all duration-300 z-10"
            unoptimized
          />
          <p className="absolute bottom-4 text-[10px] font-mono text-text-secondary tracking-widest opacity-50 uppercase">Companion</p>
        </BentoCard>
        <div className={`col-span-1 md:col-span-2 lg:col-span-3 min-h-[160px] w-full relative z-20 transition-opacity duration-500 ease-in-out ${isBurning ? burningClasses : 'opacity-100'}`}>
          <FloatingCodeSnippet
            className="w-full h-full"
            delay={0}
            code={
              <>
                <span className="text-code-purple">const</span> status = <span className="text-accent-cyan">useGameState</span>({'{'}<br />
                {'  '}playing: [<span className="text-code-green">'Minecraft'</span>, <span className="text-code-green">'Clash of Clans'</span>],<br />
                {'  '}townHallLevel: <span className="text-code-green">'16'</span>,<br />
                {'  '}dragonsDefeated: <span className="text-code-green">42</span><br />
                {'}'});
              </>
            }
          />
        </div>
        <FloatingCodeSnippet
          className={`col-span-1 md:col-span-2 lg:col-span-3 min-h-[160px] w-full relative z-20 ${isBurning ? illuminatedClasses : 'transition-all duration-500 ease-in-out'}`}
          delay={0.4}
          code={
            <>
              <span className="text-code-purple">def</span> <span className="text-accent-cyan">morning_routine</span><br />
              {'  '}<span className="text-code-purple">while</span> coffee_cup.empty?<br />
              {'    '}refill_coffee<br />
              {'  '}<span className="text-code-purple">end</span><br />
              {'  '}start_coding(<span className="text-code-green">framework: 'Ruby on Rails'</span>)<br />
              <span className="text-code-purple">end</span>
            </>
          }
        />
      </div>
    </section>
  )
}
