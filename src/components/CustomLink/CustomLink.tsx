import { Link } from 'react-router-dom';
export interface CustomLinkProps { 
  readonly to: string
  readonly className?: string
  readonly children: React.ReactNode
}

function CustomLink({ to, className, children }: CustomLinkProps) {
  return (
    <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }} className={className}>
      {children}
    </Link>
  );
}

export default CustomLink;

 