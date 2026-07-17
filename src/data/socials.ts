import type { SVGProps } from "react"
import { WhatsappIcon, LinkedinIcon, GmailIcon, CvIcon } from "@/components/icons/Icons"

export type SocialLink = {
  id: 'whatsapp' | 'linkedin' | 'gmail' | 'resume';
  url: string | { en: string; pt: string };
  label: string;
  icon: (props: SVGProps<SVGSVGElement>) => React.ReactNode;
};

export const socials: SocialLink[] = [
  {
    id: 'whatsapp',
    url: 'https://wa.me/351920687993',
    label: 'WhatsApp',
    icon: WhatsappIcon
  },
  {
    id: 'linkedin',
    url: 'https://www.linkedin.com/in/lucas-rubira-43b8a91a4/',
    label: 'LinkedIn',
    icon: LinkedinIcon
  },
  {
    id: 'gmail',
    url: 'mailto:rubira820@gmail.com',
    label: 'Gmail',
    icon: GmailIcon
  },
  {
    id: 'resume',
    url: {
      en: 'https://drive.google.com/file/d/14dpoYu1hNTpR6Oqik1pX44hWJYiMN-GR/view?usp=sharing',
      pt: 'https://drive.google.com/file/d/1IXJheW29FIXO0yXVQHmRZi9zqOwLVKAo/view?usp=sharing'
    },
    label: 'Resume/CV',
    icon: CvIcon
  }
];
