import { NextPage } from "next";
import Link from "next/link";

import postsData from "@.contents/posts.json";
import { config } from "@site.config";
import { PostItem } from "@src/app/types";
import { Members } from "@src/app/components/Members";
import { PostList } from "@src/app/components/PostList";
import { PageSEO } from "@src/app/components/PageSEO";
import {
  ContentWrapper,
  UndoWrapForScroll,
} from "@src/app/components/ContentWrapper";

const posts: PostItem[] = postsData as PostItem[];

const Page: NextPage = () => {
  return (
    <>
      <PageSEO
        title={config.siteMeta.title}
        description={config.siteMeta.description}
        path="/"
        removeSiteNameFromTitle={true}
      />

      <section className="py-10">
        <ContentWrapper>
          <h1 className="text-3xl leading-tight md:text-2xl">
            {config.siteMeta.title}
          </h1>
          {!!config.siteMeta.description && (
            <p className="mt-1 text-lg text-gray-400">
              {config.siteMeta.description}
            </p>
          )}
        </ContentWrapper>
      </section>

      <section className="py-6">
        <ContentWrapper>
          <div className="flex items-center justify-between py-1 border-b border-gray-300">
            <h2 className="text-2xl">Members</h2>
            <Link href="/members" className="text-lg text-blue-600">
              See Details →
            </Link>
          </div>

          <div className="mt-8">
            <UndoWrapForScroll>
              <Members />
            </UndoWrapForScroll>
          </div>
        </ContentWrapper>
      </section>

      <section className="py-6">
        <ContentWrapper>
          <div className="flex items-center justify-between py-1 border-b border-gray-300">
            <h2 className="text-2xl">Articles</h2>
          </div>

          <div className="mt-8">
            <PostList items={posts as PostItem[]} />
          </div>
        </ContentWrapper>
      </section>
    </>
  );
};

export default Page;
