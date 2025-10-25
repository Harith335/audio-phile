import { Facebook, Instagram, X } from "lucide-react";

export const Footer = () => {
  return (
    <div className="bg-gray-950">
      <div className="md:w-[1100px] text-white mx-auto py-10 flex flex-col md:flex-row md:justify-between text-center md:text-start w-screen">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-xl">audiophile</h1>
          <p className="text-gray-400 md:w-[550px] w-[350px] mx-auto">
            Audiophileis an all in one stop to fulfill your audio needs. We're a
            small team of music lovers and sound specialists who are devoted to
            helping you get the most out of personal audio. Come and visit our
            demo facility — we're open 7 days a week.
          </p>
          <p className="text-gray-300 mb-4">
            Copyright 2025. All Rights Reserved
          </p>
        </div>
        <div className="grid">
          <ul className="flex md:flex-row flex-col gap-6">
            <li>HOME</li>
            <li>HEADPHONES</li>
            <li>SPEAKERS</li>
            <li>EARPHONES</li>
          </ul>
          <div className="flex md:flex-row flex-col md:justify-end gap-4 mx-auto md:mx-0 mt-6 md:mt-0">
            <Facebook></Facebook>
            <X></X>
            <Instagram></Instagram>
          </div>
        </div>
      </div>
    </div>
  );
};
