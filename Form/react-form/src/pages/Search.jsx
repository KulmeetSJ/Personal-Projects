import React from "react";
import { Helmet } from "react-helmet";
import { Input, Text, Heading, Button, Img } from "../components";

export default function Search() {
  return (
    <>
      <Helmet>
        <title>Task</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[27px] bg-white-A700 p-6 sm:p-5">
        <div className="flex w-[91%] flex-col items-end md:w-full">
          <div className="container-xs flex flex-col items-end px-[52px] md:p-5 md:px-5">
            <Img
              src="images/img_close.svg"
              alt="close"
              className="h-[24px] w-[24px]"
            />
          </div>
        </div>
        <div className="flex w-[91%] flex-col md:w-full">
          <div className="mb-[42px] mt-[27px] flex w-[96%] flex-col items-start md:w-full">
            <Text
              size="5xl"
              as="p"
              className="tracking-[-2.40px] !text-gray-900_28"
            >
              Cerca
            </Text>
            <div className="mt-2.5 h-[4px] w-full self-stretch bg-black-900_14" />
            <div className="mt-10 flex w-[50%] gap-4 md:w-full md:flex-col">
              <Button
                shape="round"
                className="min-w-[118px] border-2 border-solid border-gray-900 font-semibold uppercase sm:px-5"
              >
                Tutte
              </Button>
              <Button
                variant="outline"
                shape="round"
                color="undefined_undefined"
                className="min-w-[107px] font-semibold uppercase sm:px-5"
              >
                Arte
              </Button>
              <Button
                variant="outline"
                shape="round"
                color="undefined_undefined"
                className="w-full flex-1 font-semibold uppercase md:self-stretch sm:px-5"
              >
                orologi
              </Button>
              <Button
                variant="outline"
                shape="round"
                color="undefined_undefined"
                className="w-full flex-1 font-semibold uppercase md:self-stretch sm:px-5"
              >
                Gioielli
              </Button>
              <Button
                variant="outline"
                shape="round"
                color="undefined_undefined"
                className="w-full flex-1 font-semibold uppercase md:self-stretch sm:px-5"
              >
                Design
              </Button>
            </div>
            <div className="mt-[132px] flex flex-col items-start self-stretch">
              <Heading size="md" as="h1" className="uppercase">
                Suggerimenti
              </Heading>
              <Text
                size="xl"
                as="p"
                className="mt-[53px] tracking-[-0.80px] !text-gray-900_28"
              >
                Giorgio De Chirico
              </Text>
              <div className="mt-2.5 h-px w-full self-stretch bg-black-900_14" />
              <Input
                size="md"
                variant="underline"
                shape="square"
                name="salvador_dalì"
                placeholder={`Salvador Dalì`}
                className="mt-[47px] self-stretch tracking-[-0.80px] sm:pr-5"
              />
              <Input
                size="sm"
                variant="underline"
                shape="square"
                name="andy_warhol"
                placeholder={`Andy Warhol`}
                className="mt-[52px] self-stretch tracking-[-0.80px] sm:pr-5"
              />
              <Input
                size="md"
                variant="underline"
                shape="square"
                name="gennaro_guttuso"
                placeholder={`Gennaro Guttuso`}
                className="mt-12 self-stretch tracking-[-0.80px] sm:pr-5"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
