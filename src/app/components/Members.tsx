import Link from "next/link";
import Image from 'next/image';
import { getMemberPath } from "@src/app/utils/helper";
import { members } from "@src/app/member";

export const Members: React.FC = () => {
  const maxVisibleMembers = 6; // 最大表示数
  const visibleMembers = members.slice(0, maxVisibleMembers);
  const hasMoreMembers = members.length > maxVisibleMembers;

  return (
    <div className="overflow-x-auto flex items-start pb-4 scrollbar-hide scroll-snap-x mandatory scroll-smooth after:content-[''] after:block after:w-5 after:h-5 after:flex-shrink-0">
      {visibleMembers.map((member, i) => (
        <Link
          key={`scrollable-member-${i}`}
          href={getMemberPath(member.id)}
          className="block flex-shrink-0 w-24 mr-4 text-center leading-6 snap-center">
          <span className="block">
            <Image
              src={member.avatarSrc}
              alt={member.name}
              className="rounded-lg mx-auto"
              width={80}
              height={80}
            />
          </span>
          <span className="mt-2 text-sm">{member.name}</span><br/>
          <span className="text-xs text-base-light">{member.role}</span>
        </Link>
      ))}
      {hasMoreMembers && (
        <span className="block flex-shrink-0 w-24 text-center leading-6 mt-6">
          <span className="text-sm">and more...</span>
        </span>
      )}
    </div>
  );
};
