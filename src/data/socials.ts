import type { SVGProps } from "react"
import { WhatsappIcon, LinkedinIcon, GmailIcon, CvIcon } from "@/components/icons/Icons"

export type SocialLink = {
  id: 'whatsapp' | 'linkedin' | 'gmail' | 'resume';
  url: string;
  label: string;
  icon: (props: SVGProps<SVGSVGElement>) => React.ReactNode;
};

export const socials: SocialLink[] = [
  {
    id: 'whatsapp',
    url: '#TODO_LINK_WHATSAPP',
    label: 'WhatsApp',
    icon: WhatsappIcon
  },
  {
    id: 'linkedin',
    url: '#TODO_LINK_LINKEDIN',
    label: 'LinkedIn',
    icon: LinkedinIcon
  },
  {
    id: 'gmail',
    url: '#TODO_LINK_GMAIL',
    label: 'Gmail',
    icon: GmailIcon
  },
  {
    id: 'resume',
    url: '#TODO_LINK_RESUME',
    label: 'Resume/CV',
    icon: CvIcon
  }
];
