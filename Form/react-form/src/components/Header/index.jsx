import React from "react";
import { Img, Heading, Text } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="flex w-full items-center justify-between gap-5 sm:flex-col">
        <Text size="lg" as="p" className="text-justify !font-dmserifdisplay !text-white-A700">
          Mediartrade
        </Text>
        <div className="flex items-center self-end">
          <div className="flex flex-wrap gap-6">
            <Heading size="s" as="p" className="self-start text-justify uppercase tracking-[0.30px] !text-white-A700">
              Prossime Aste
            </Heading>
            <Heading size="s" as="p" className="self-start text-justify uppercase tracking-[0.30px] !text-white-A700">
              Private Sale
            </Heading>
          </div>
          <div className="ml-6 flex items-start gap-[5px] self-start">
            <Heading size="s" as="p" className="text-justify uppercase tracking-[0.30px] !text-white-A700">
              IT
            </Heading>
            <Img src="images/img_television.svg" alt="television" className="h-[8px] w-[8px]" />
          </div>
          <Img src="images/img_search_black_24dp.svg" alt="searchblack" className="ml-[31px] h-[24px] w-[24px]" />
        </div>
      </div>
    </header>
  );
}
