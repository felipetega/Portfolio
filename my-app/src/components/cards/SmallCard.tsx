import React from 'react';
import Image from 'next/image';
// import Modal from '../Modal';
import { IconType } from 'react-icons';
import { AiFillGithub, AiFillLinkedin, AiOutlineDesktop} from 'react-icons/ai';

interface SmallCardProps {
  src: string;
  title: string;
  description: string;
  date: string;
  stack: IconType[];
  repoUrl: string;
  siteUrl: string;
  showSiteButton: boolean;
  inUrl: string;
  showInButton: boolean;
}

export default function SmallCard({ src, title, description, date, stack, siteUrl, repoUrl, showSiteButton, inUrl, showInButton }: SmallCardProps) {

  return (
    <div className="card bg-base-100 shadow-xl image-full mx-2 my-8 w-full hover:translate-y-[-5px] transition-transform duration-300 border-2 border-secondary">
      <figure className="card">
        <Image src={src} alt="me" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-black">{title}</h2>
        <p className="font-bold">{date}</p>
        <p className="font-bold">{description}</p>
        <div className="card-stack flex">
          {stack.map((Icon, index) => (
            <Icon size={30} key={index} className="card-stack-icon mx-2" />
          ))}
        </div>
        <div className="card-actions justify-between">
        <a href={repoUrl} target="_blank"> {/* Link para o repositório */}
          <div className="btn btn-primary text-xs px-2 py-1 mt-4">
                <AiFillGithub size={30} />
          </div>
        </a>
        {showInButton ? (
        <a href={inUrl} target="_blank">
          <div className="btn btn-secondary text-xs px-2 py-1 mt-4">
                <AiFillLinkedin size={30} />
          </div>
        </a>
      ) : null}
          {showSiteButton ? (
        <a href={siteUrl} target="_blank">
          <div className="btn text-yellow-500 text-xs px-2 py-1 mt-4">
          <AiOutlineDesktop size={30} />
          </div>
        </a>
      ) : null}
        </div>
      </div>
    </div>
  );
}

