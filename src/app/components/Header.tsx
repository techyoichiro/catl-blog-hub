import Link from "next/link";
import Image from 'next/image';
import { ContentWrapper } from "@src/app/components/ContentWrapper";
import { config } from "@/site.config";

export const Header: React.FC = () => (
  <header className="sticky top-0 bg-base-background z-[99] py-4 bg-white">
    <ContentWrapper>
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt={config.siteMeta.title} height={100} width={100} />
        </Link>
        <div className="flex items-center">
          {config.headerLinks.map((link, i) => {
            const key = `header-link-${i}`;
            if (link.href.startsWith("/")) {
              return (
                <Link 
                    key={key} href={link.href} className="ml-6 text-sm">{link.title}
                </Link>
              );
            }
            return (
              <a key={key} href={link.href} target="_blank" rel="noopener noreferrer" className="ml-6 text-sm">
                {link.title}
              </a>
            );
          })}
        </div>
      </div>
    </ContentWrapper>
  </header>
);

export default Header