import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Card component for displaying content in a contained box
 */
export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`rounded-lg border border-black/[.08] dark:border-white/[.08] bg-white dark:bg-[#1a1a1a] p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Card header component
 */
export const CardHeader = ({ children, className = '' }: CardHeaderProps) => {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
};

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Card title component
 */
export const CardTitle = ({ children, className = '' }: CardTitleProps) => {
  return (
    <h3 className={`text-xl font-semibold ${className}`}>
      {children}
    </h3>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Card content component
 */
export const CardContent = ({ children, className = '' }: CardContentProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Card footer component
 */
export const CardFooter = ({ children, className = '' }: CardFooterProps) => {
  return (
    <div className={`mt-4 pt-4 border-t border-black/[.08] dark:border-white/[.08] ${className}`}>
      {children}
    </div>
  );
};

export default Object.assign(Card, {
  Header: CardHeader,
  Title: CardTitle,
  Content: CardContent,
  Footer: CardFooter,
});
