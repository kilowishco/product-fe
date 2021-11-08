import { FC } from 'react';
import Link from 'next/link';

import { TextLinkContainer } from './text-link.styled';

type TextLinkProps = {
  link: string;
  color?: string;
};

const TextLink: FC<TextLinkProps> = ({ link, color, children }) => {
  return (
    <TextLinkContainer style={{ '--color-bare': color }}>
      <Link href={link}>
        <a>{children}</a>
      </Link>
    </TextLinkContainer>
  );
};

export default TextLink;
