import React from "react";
import { VideoMetadata } from "../../../types";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface VideoProps {
  item: VideoMetadata;
}

export const Video = ({ item }: VideoProps) => {
  return (
    <div className="relative">
      <video
        src={`https://www.youtube.com/watch?v=nY5IAhjTclY`}
        className="w-40 aspect-video"
      ></video>
      <div className="absolute left-[50%] top-[50%] transform" />
    </div>
  );
};
