import Link from "next/link";
import Image from 'next/image';
import { getMemberPath } from "@src/app/utils/helper";
import { members } from "@src/app/member";

export const Members: React.FC = () => {
  return (
    <div className="overflow-x-auto flex flex-wrap items-start pb-4 scrollbar-hide scroll-snap-x mandatory scroll-smooth after:content-[''] after:block after:w-5 after:h-5 after:flex-shrink-0">
      {members.map((member, i) => (
        <Link
          key={`scrollable-member-${i}`}
          href={getMemberPath(member.id)}
          className="block flex-shrink-0 w-24 mr-4 text-center leading-6 snap-center pb-4">
          <span className="block">
            <Image
              src={member.avatarSrc}
              alt={member.name}
              className="rounded-lg mx-auto"
              width={90}
              height={90}
            />
          </span>
          <span className="mt-2 text-sm">{member.name}</span><br/>
          <span className="text-xs text-base-light">{member.role}</span>
        </Link>
      ))}
    </div>
  );
};
