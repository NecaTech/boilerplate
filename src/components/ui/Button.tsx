import React from 'react';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  href?: string;
}

/**
 * Button component that can be used as a button or a link
 * @param variant - 'primary' or 'secondary'
 * @param size - 'sm', 'md', or 'lg'
 * @param children - Button content
 * @param className - Additional CSS classes
 * @param href - If provided, the button will be rendered as an anchor tag
 */
export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  ...props
}: ButtonProps) => {
  // Base classes for all buttons
  const baseClasses = 'rounded-full border border-solid transition-colors flex items-center justify-center font-medium';
  
  // Variant specific classes
  const variantClasses = {
    primary: 'border-transparent bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]',
    secondary: 'border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent',
  };
  
  // Size specific classes
  const sizeClasses = {
    sm: 'text-xs h-8 px-3',
    md: 'text-sm h-10 px-4',
    lg: 'text-base h-12 px-5',
  };
  
  // Combine all classes
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  // Render as link if href is provided
  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}>
        {children}
      </a>
    );
  }
  
  // Otherwise render as button
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
