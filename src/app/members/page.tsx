import { NextPage } from "next";
import Link from "next/link";
import Image from 'next/image';

import { config } from "../../../site.config";
import { members } from "../member";
import { PageSEO } from "../components/PageSEO";
import { ContentWrapper } from "../components/ContentWrapper";
import { getMemberPath } from "../utils/helper";
import { Member } from "../types";

const MemberCard: React.FC<{ member: Member }> = ({ member }) => {
  return (
    <Link href={getMemberPath(member.id)} className="member-card relative block text-center text-sm">
      <div className="member-card__avatar">
        <Image
          src={member.avatarSrc}
          alt={member.name}
          width={80}
          height={80}
          className="member-card__avatar-img w-full h-auto"
        />
      </div>
      <h2 className="member-card__name mt-3 text-lg">{member.name}</h2>
      <p className="member-card__bio mt-2 inline-block text-left text-sm leading-6 opacity-70">{member.bio}</p>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-200"></div>
    </Link>
  );
};

const Page: NextPage = () => {
  return (
    <>
      <PageSEO title="Members" path="/members" />
      <ContentWrapper>
        <section className="members py-10">
          <h1 className="members__title text-3xl">
            Members{" "}
            <span className="members__title-team block text-xl text-gray-500">
              @ {config.siteMeta.teamName}
            </span>
          </h1>
          <div className="members__cards mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
            {members.map((member, i) => (
              <MemberCard key={`member-card-${i}`} member={member} />
            ))}
          </div>
        </section>
      </ContentWrapper>
    </>
  );
};

export default Page;
