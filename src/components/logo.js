/** @jsx jsx */
import { Link } from 'components/link';
import { Image, jsx } from 'theme-ui';

export default function Logo({ src, ...rest }) {
  return (
    <Link 
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
      }}
      {...rest}
    >
      <Image src={src} alt="next js landing page logo" />
    </Link>
  );
}
