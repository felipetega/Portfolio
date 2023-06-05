import React from 'react'
import Image from 'next/image';

export default function LargeCard() {

  const project = {
    name: ''
  }

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl m-2">
    <Image src="/todolist.png" alt="me" width="300" height="64" sizes="(max-width: 768px) 100vw" />;
    <div className="card-body">
      <h2 className="card-title">New album is released!</h2>
      <p>Click the button to listen on Spotiwhy app.</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Listen</button>
      </div>
    </div>
  </div>
  )
}

interface ProjectProps {
  project: {
    name: string;
  };
}


function Projects({ project }: ProjectProps) {
  return (
    <img
      className="avatar"
      alt={project.name}
      width={10}
      height={10}
    />
  );
}
