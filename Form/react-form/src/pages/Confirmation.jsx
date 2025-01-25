import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Img, Heading } from "../components";
import Header from "../components/Header";

export default function Confirmation() {
  return (
    <>
      <Helmet>
        <title>Task</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="relative h-[1000px] w-full md:h-auto">
        <div className="flex h-[1000px] w-full items-center justify-center bg-black-900 bg-[url(/public/images/img_group_99.png)] bg-cover bg-no-repeat md:h-auto md:flex-col">
          <div className="h-[1000px] w-[6%] bg-white-A700 shadow-bs md:p-5" />
          <div className="relative h-[1000px] flex-1 md:h-auto md:w-full md:flex-none md:self-stretch md:p-5">
            <div className="container-xs flex flex-col gap-[289px] md:gap-[216px] sm:gap-36">
              <Header />
              <div className="flex flex-col items-start gap-[49px] pl-[178px] pr-14 md:px-5">
                <Text
                  size="4xl"
                  as="p"
                  className="!font-dmserifdisplay uppercase tracking-[-2.24px] !text-white-A700"
                >
                  <>
                    gioielli & <br /> preziosi
                  </>
                </Text>
                <Text size="md" as="p" className="uppercase !text-white-A700">
                  <>
                    Design, Asta a Tempo
                    <br />
                    Milano, 21-22 Aprile 2021
                  </>
                </Text>
              </div>
              <div className="flex justify-between gap-5 md:flex-col">
                <div className="flex items-center sm:flex-col">
                  <Button
                    size="lg"
                    variant="outline"
                    shape="circle"
                    color="undefined_undefined"
                    className="w-[56px] !rounded-[28px]"
                  >
                    <Img src="images/img_download.svg" />
                  </Button>
                  <div className="ml-6 flex items-center gap-2 sm:ml-0">
                    <Heading
                      size="lg"
                      as="h1"
                      className="self-end text-center !font-semibold uppercase !text-white-A700"
                    >
                      Info & Preview
                    </Heading>
                    <Img
                      src="images/img_arrow_left.svg"
                      alt="arrowleft"
                      className="h-[20px] self-start"
                    />
                  </div>
                  <div className="ml-3.5 flex items-center gap-[7px] sm:ml-0">
                    <Heading
                      size="lg"
                      as="h2"
                      className="self-end text-center !font-semibold uppercase !text-white-A700"
                    >
                      Consulta i Lotti
                    </Heading>
                    <Img
                      src="images/img_arrow_left.svg"
                      alt="arrowleft"
                      className="h-[20px] self-start"
                    />
                  </div>
                </div>
                <Button
                  variant="outline"
                  shape="round"
                  color="undefined_undefined"
                  className="min-w-[196px] font-semibold uppercase sm:px-5"
                >
                  Registrati Ora
                </Button>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-center justify-center bg-white-A700 py-16 shadow-bs md:py-5">
              <div className="container-xs mb-[276px] mt-[272px] flex flex-col items-center px-[400px] md:p-5 md:px-5">
                <Button
                  size="lg"
                  variant="outline"
                  shape="circle"
                  color="undefined_undefined"
                  className="w-[56px] !rounded-[28px]"
                >
                  <Img src="images/img_checkmark.svg" />
                </Button>
                <Text
                  size="2xl"
                  as="p"
                  className="mt-11 text-center !font-dmserifdisplay tracking-[-1.12px]"
                >
                  Messaggio inviato
                </Text>
                <Text
                  size="s"
                  as="p"
                  className="mt-3 text-center tracking-[-0.32px]"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at risus mauris.
                </Text>
                <Button
                  variant="outline"
                  shape="round"
                  color="undefined_undefined"
                  className="mt-[58px] min-w-[120px] font-semibold uppercase sm:px-5"
                >
                  Chiudi
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[20.00px] left-[16.00px] m-auto h-[56px] w-[4%] rounded-[28px] bg-gray-900" />
      </div>
    </>
  );
}
