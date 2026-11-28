import { ArrowUpRightIcon } from '@phosphor-icons/react/ssr';

import { LINK_HOVER_CLASSES } from '~/lib/style';
import { tw } from '~/lib/utils';

type Props = {
  href: string;
  label: string;
  detail?: string;
};

export default function ExternalLink({ href, label, detail }: Props) {
  return (
    <a
      className={tw(
        'text-pencil flex items-center gap-0.5 rounded-sm text-xs font-semibold',
        detail && 'flex-col items-start gap-0',
        LINK_HOVER_CLASSES
      )}
      href={href}
      target="_blank"
      rel="noopener noreferrer">
      <span className="flex items-center gap-0.5">
        {label}
        <ArrowUpRightIcon weight="bold" className="text-pencil/80 shrink-0" />
      </span>
      {detail && <span className="text-muted text-[10px] leading-tight font-normal">{detail}</span>}
    </a>
  );
}
