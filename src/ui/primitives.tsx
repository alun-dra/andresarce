import type { ReactNode } from 'react'; // 👈 type-only

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

export const Section = ({ id, className = '', children }: SectionProps) => (
  <section id={id} className={`section-default ${className}`}>{children}</section>
);

export const Container = ({ className = '', children }: ContainerProps) => (
  <div className={`container-default ${className}`}>{children}</div>
);
