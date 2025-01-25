import React from "react";
import { Helmet } from "react-helmet";
import {
  Heading,
  Text,
  Button,
  Img,
  TextArea,
  SelectBox,
  Input,
} from "../components";
import Header from "../components/Header";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function Contact() {
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
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full justify-end bg-white-A700 pt-[57px] shadow-bs md:pt-5">
              <div className="flex w-[87%] items-start justify-between gap-5 self-end md:w-full md:flex-col md:p-5">
                <div className="mt-[52px] flex w-[51%] flex-col items-center md:w-full">
                  <Text
                    size="2xl"
                    as="p"
                    className="text-center !font-dmserifdisplay tracking-[-1.12px]"
                  >
                    Contattaci
                  </Text>
                  <div className="mt-11 flex flex-col gap-6 self-stretch">
                    <div className="flex gap-6 md:flex-col">
                      <Input
                        shape="round"
                        name="input_one"
                        placeholder={`Nome`}
                        className="w-full tracking-[-0.32px] sm:px-5"
                      />
                      <Input
                        shape="round"
                        name="input_three"
                        placeholder={`Cognome`}
                        className="w-full tracking-[-0.32px] sm:px-5"
                      />
                    </div>
                    <div className="flex gap-6 md:flex-col">
                      <Input
                        shape="round"
                        type="email"
                        name="email"
                        placeholder={`Email`}
                        className="w-full tracking-[-0.32px] sm:px-5"
                      />
                      <Input
                        shape="round"
                        name="input_five"
                        placeholder={`Telefono`}
                        className="w-full tracking-[-0.32px] sm:px-5"
                      />
                    </div>
                  </div>
                  <SelectBox
                    shape="round"
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                        className="h-[11px] w-[11px]"
                      />
                    }
                    name="inserisci"
                    placeholder={`Richiesta Valutazione`}
                    options={dropDownOptions}
                    className="mt-6 gap-px self-stretch font-medium tracking-[-0.32px] sm:px-5"
                  />
                  <TextArea
                    shape="round"
                    name="framethree"
                    placeholder={`Come possiamo aiutarla?`}
                    className="mt-6 self-stretch font-medium tracking-[-0.32px] text-black-900_66 sm:px-5 sm:pb-5"
                  />
                  <div className="mt-6 flex justify-center self-stretch rounded-lg border border-dashed border-gray-900_51 bg-gray-100 p-[30px] sm:p-5">
                    <div className="flex px-3 opacity-0.4">
                      <div className="flex">
                        <Heading
                          size="s"
                          as="h3"
                          className="self-start text-center uppercase"
                        >
                          Carica Immagini
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <Button
                    shape="round"
                    className="mt-14 w-full font-semibold uppercase sm:px-5"
                  >
                    Invia Messaggio
                  </Button>
                </div>
                <div className="flex w-[33%] items-start justify-center md:w-full sm:flex-col">
                  <div className="h-full w-px bg-black-900_14 sm:h-px sm:w-full" />
                  <div className="mt-[126px] flex flex-1 flex-col items-center gap-[183px] md:gap-[137px] sm:gap-[91px] sm:self-stretch">
                    <div className="flex flex-col items-center gap-[186px] self-stretch md:gap-[139px] sm:gap-[93px]">
                      <div className="flex flex-col items-center">
                        <Button
                          size="lg"
                          variant="outline"
                          shape="circle"
                          color="undefined_undefined"
                          className="w-[56px] !rounded-[28px]"
                        >
                          <Img src="images/img_volume.svg" />
                        </Button>
                        <Text
                          as="p"
                          className="mt-6 text-center !text-gray-900_99"
                        >
                          Preferisci usare WhatsApp?
                        </Text>
                        <Heading
                          size="lg"
                          as="h4"
                          className="mt-[9px] text-center tracking-[-0.36px]"
                        >
                          +39 331 9467237
                        </Heading>
                      </div>
                      <div className="h-px w-full self-stretch bg-black-900_14" />
                    </div>
                    <div className="flex flex-col items-center">
                      <Button
                        size="lg"
                        variant="outline"
                        shape="circle"
                        color="undefined_undefined"
                        className="w-[56px] !rounded-[28px]"
                      >
                        <Img src="images/img_settings.svg" />
                      </Button>
                      <Text
                        as="p"
                        className="mt-[23px] text-center !text-gray-900_99"
                      >
                        Preferisci inviarci una Email?
                      </Text>
                      <a
                        href="mailto:info@mediartrade.com"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3"
                      >
                        <Heading
                          size="lg"
                          as="h5"
                          className="text-center tracking-[-0.36px]"
                        >
                          info@mediartrade.com
                        </Heading>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[20.00px] left-[16.00px] m-auto h-[56px] w-[4%] rounded-[28px] bg-gray-900" />
      </div>
    </>
  );
}
