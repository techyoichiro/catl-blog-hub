"use client";

import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import {
  getFaviconSrcFromOrigin,
  getMemberPath,
  getMemberById,
} from "../utils/helper";
import { PostItem } from "../types";

dayjs.extend(relativeTime);

const PostLink: React.FC<{ item: PostItem }> = (props) => {
  const { authorId, title, isoDate, link } = props.item;
  const member = getMemberById(authorId);
  if (!member) return null;

  const { hostname, origin } = new URL(link);

  // hatenablog.com の場合、サブドメインを削除
  const displayHostname = hostname.endsWith("hatenablog.com")
    ? "hatenablog.com"
    : hostname;

  return (
    <article className="rounded-lg overflow-hidden mb-4 w-full md:w-[calc(50%-0.5rem)] border border-gray-300">
      <Link href={getMemberPath(member.id)} className="flex items-center p-4 text-sm leading-5">
        <Image
          src={member.avatarSrc}
          className="rounded-full mr-2"
          width={24}
          height={24}
          alt={member.name}
        />
        <div className="flex flex-col">
          <div>{member.name}</div>
          <time dateTime={isoDate} className="text-gray-400 text-xs">
            {dayjs(isoDate).fromNow()}
          </time>
        </div>
      </Link>
      <a href={link} className="block p-4 pt-0" target="_blank" rel="noopener noreferrer">
        <h2 className="text-base mb-2">{title}</h2>
        {hostname && (
          <div className="flex items-center text-gray-400 text-xs">
            <Image
              src={getFaviconSrcFromOrigin(origin)}
              width={14}
              height={14}
              className="rounded-sm mr-1"
              alt={displayHostname}
            />
            {displayHostname}
          </div>
        )}
      </a>
    </article>
  );
};

export const PostList: React.FC<{ items: PostItem[] }> = (props) => {
  const [displayItemsCount, setDisplayItemsCount] = useState<number>(32);
  const totalItemsCount = props.items?.length || 0;
  const canLoadMore = totalItemsCount - displayItemsCount > 0;

  if (!totalItemsCount) {
    return <div className="py-20 text-center font-bold text-lg text-base-light">No posts yet</div>;
  }

  return (
    <>
      <div className="flex flex-wrap justify-between">
        {props.items.slice(0, displayItemsCount).map((item, i) => (
          <PostLink key={`post-item-${i}`} item={item} />
        ))}
      </div>
      {canLoadMore && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setDisplayItemsCount(displayItemsCount + 32)}
            className="border border-base-border py-2 px-8 rounded-full text-sm text-base-light"
          >
            LOAD MORE
          </button>
        </div>
      )}
    </>
  );
};
