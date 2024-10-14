import Image from 'next/image';
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { AiOutlineLink } from "react-icons/ai";
import { PageSEO } from "@src/app/components/PageSEO";
import { ContentWrapper } from "@src/app/components/ContentWrapper";
import { getMemberById, getMemberPath, getMemberPostsById } from "@src/app/utils/helper";
import { members } from "@src/app/member";
import { PostList } from "@src/app/components/PostList";
import { Member, PostItem } from "@src/app/types";

type Props = {
  postItems: PostItem[];
  member: Member;
};

const MemberPage = ({ member, postItems }: Props) => {
  const { id, name, bio, avatarSrc, twitterUsername, githubUsername, websiteUrl } = member;

  return (
    <>
      <PageSEO title={name} path={getMemberPath(id)} />
      <section className="member">
        <ContentWrapper>
          <header className="py-8 text-center">
            <div className="inline-block">
              <Image
                src={avatarSrc}
                alt={name}
                width={100}
                height={100}
                className="rounded-[18px]"
              />
            </div>
            <h1 className="mt-2 text-2xl">{name}</h1>
            <p className="mt-3 text-sm max-w-md mx-auto opacity-80">{bio}</p>
            <div className="mt-2">
              {twitterUsername && (
                <a
                  href={`https://twitter.com/${twitterUsername}`}
                  className="m-2 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 text-gray-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter
                    className="text-[20px]"
                    aria-label={`Follow @${twitterUsername} on Twitter`}
                  />
                </a>
              )}
              {githubUsername && (
                <a
                  href={`https://github.com/${githubUsername}`}
                  className="m-2 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 text-gray-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    className="text-[20px]"
                    aria-label={`@${githubUsername} on GitHub`}
                  />
                </a>
              )}
              {websiteUrl && (
                <a
                  href={websiteUrl}
                  className="m-2 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 text-gray-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineLink
                    className="text-[20px]"
                    aria-label={`Link to website`}
                  />
                </a>
              )}
            </div>
          </header>

          <div className="pt-4 border-t border-gray-200">
            <PostList items={postItems} />
          </div>
        </ContentWrapper>
      </section>
    </>
  );
};

// 動的なルートのパラメータを生成
export async function generateStaticParams() {
  return members.map((member) => ({
    id: member.id,
  }));
}

// ページのサーバーサイドでのデータフェッチ
export default async function Page({ params }: { params: { id: string } }) {
  const member = getMemberById(params.id);
  const postItems = getMemberPostsById(params.id);

  if (!member) throw new Error("User not found");

  return <MemberPage member={member} postItems={postItems} />;
}
