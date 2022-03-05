import React from 'react';
import { StyledBadge, BadgeVariantsProps } from './badge.styles';
import { CSS } from '@nextui-org/react';

interface Props {
  className?: string;
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;

type BadgeProps = Props & NativeAttrs & BadgeVariantsProps & { css?: CSS };

const Badge: React.FC<React.PropsWithChildren<BadgeProps>> = ({
  children,
  ...props
}) => {
  return <StyledBadge {...props}>{children}</StyledBadge>;
};

export default Badge;
