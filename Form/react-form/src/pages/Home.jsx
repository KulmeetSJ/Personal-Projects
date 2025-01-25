import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Text, Button, Img } from "../components";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Task</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex items-start md:flex-col">
          <Img
            src="images/defaultNoData.png"
            alt="lateralbar"
            className="h-[2080px] w-[6%] object-cover md:w-full"
          />
          <div className="mt-[18px] flex flex-1 flex-col items-center gap-[145px] md:gap-[108px] md:self-stretch md:p-5 sm:gap-[72px]">
            <header className="flex flex-col items-center gap-[30px] self-stretch">
              <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">
                <Text
                  size="lg"
                  as="p"
                  className="text-justify !font-dmserifdisplay"
                >
                  Mediartrade
                </Text>
                <div className="flex items-start self-end sm:flex-col">
                  <div className="flex flex-wrap gap-6">
                    <Heading
                      size="s"
                      as="p"
                      className="self-start text-justify uppercase tracking-[0.30px]"
                    >
                      Prossime Aste
                    </Heading>
                    <Heading
                      size="s"
                      as="p"
                      className="self-start text-justify uppercase tracking-[0.30px]"
                    >
                      Private Sale
                    </Heading>
                    <Heading
                      size="s"
                      as="p"
                      className="self-start text-justify uppercase tracking-[0.30px]"
                    >
                      Accedi
                    </Heading>
                  </div>
                  <Heading
                    size="s"
                    as="p"
                    className="ml-6 text-justify uppercase tracking-[0.30px] sm:ml-0"
                  >
                    IT
                  </Heading>
                  <Img
                    src="images/img_arrow_down_gray_900.svg"
                    alt="arrowdown"
                    className="ml-[5px] mt-[5px] h-[8px] w-[8px] sm:ml-0 sm:w-full"
                  />
                  <Img
                    src="images/img_search_black_24dp_gray_900.svg"
                    alt="searchblack"
                    className="ml-[31px] h-[24px] w-[24px] sm:ml-0 sm:w-full"
                  />
                </div>
              </div>
              <div className="h-px w-full self-stretch bg-black-900_14" />
            </header>
            <div className="container-xs flex flex-col items-start pl-[339px] pr-14 md:px-5">
              <Text
                size="3xl"
                as="p"
                className="text-center !font-dmserifdisplay tracking-[-1.60px]"
              >
                Giorgio De Chirico
              </Text>
            </div>
            <div className="container-xs flex flex-col gap-20 md:gap-[60px] sm:gap-10">
              <div className="flex items-center gap-4">
                <Text
                  size="xl"
                  as="p"
                  className="!font-dmserifdisplay !font-normal tracking-[-0.80px]"
                >
                  Risultati
                </Text>
                <Button
                  size="md"
                  variant="outline"
                  shape="round"
                  color="undefined_undefined"
                  className="min-w-[94px] font-dmserifdisplay tracking-[-0.64px]"
                >
                  1.364
                </Button>
              </div>
              <div className="grid grid-cols-4 gap-10 md:grid-cols-2 sm:grid-cols-1">
                <div className="flex w-full flex-col">
                  <div className="relative h-[316px] md:h-auto">
                    <Img
                      src="images/img_rectangle_21.png"
                      alt="image"
                      className="h-[316px] w-full object-cover"
                    />
                    <Button
                      size="xs"
                      leftIcon={
                        <Img
                          src="images/img_eye.svg"
                          alt="eye"
                          className="h-[20px] w-[20px]"
                        />
                      }
                      className="absolute left-[10.00px] top-[10.00px] m-auto min-w-[89px] gap-[5px] rounded-[16px] font-semibold"
                    >
                      3,359
                    </Button>
                  </div>
                  <Text as="p" className="mt-[33px] tracking-[-0.28px]">
                    Spilla in argento e oro a forma di rana stilizzata.
                  </Text>
                  <Heading as="h1" className="mt-[65px] leading-[18px]">
                    <span className="font-medium text-gray-900">
                      <>
                        Asta
                        <br />
                      </>
                    </span>
                    <span className="font-bold text-gray-900">
                      <>
                        Arte Moderna e Contemporanea
                        <br />
                      </>
                    </span>
                    <span className="font-bold text-gray-900">
                      Milano, 21-22 Dicembre 2021
                    </span>
                  </Heading>
                </div>
                <div className="flex w-full flex-col">
                  <div className="relative h-[316px] md:h-auto">
                    <Img
                      src="images/img_rectangle_21_316x316.png"
                      alt="image"
                      className="h-[316px] w-full object-cover"
                    />
                    <Button
                      size="xs"
                      leftIcon={
                        <Img
                          src="images/img_eye.svg"
                          alt="eye"
                          className="h-[20px] w-[20px]"
                        />
                      }
                      className="absolute left-[10.00px] top-[10.00px] m-auto min-w-[89px] gap-[5px] rounded-[16px] font-semibold"
                    >
                      3,359
                    </Button>
                  </div>
                  <Text as="p" className="mt-[33px] tracking-[-0.28px]">
                    Spilla in argento e oro a forma di rana stilizzata.
                  </Text>
                  <Heading as="h2" className="mt-[65px] leading-[18px]">
                    <span className="font-medium text-gray-900">
                      <>
                        Asta
                        <br />
                      </>
                    </span>
                    <span className="font-bold text-gray-900">
                      Arte Moderna e Contemporanea
                    </span>
                    <span className="text-gray-900">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="font-bold text-gray-900">
                      Milano, 21-22 Dicembre 2021
                    </span>
                  </Heading>
                </div>
                <div className="flex w-full flex-col gap-10">
                  <div className="relative h-[316px] md:h-auto">
                    <Img
                      src="images/img_rectangle_21_1.png"
                      alt="image"
                      className="h-[316px] w-full object-cover"
                    />
                    <Button
                      size="xs"
                      leftIcon={
                        <Img
                          src="images/img_eye.svg"
                          alt="eye"
                          className="h-[20px] w-[20px]"
                        />
                      }
                      className="absolute left-[10.00px] top-[10.00px] m-auto min-w-[89px] gap-[5px] rounded-[16px] font-semibold"
                    >
                      3,359
                    </Button>
                  </div>
                  <Text as="p" className="leading-[18px] tracking-[-0.28px]">
                    Spilla (Metà XIX secolo) in avorio finemente intagliato con
                    micromosaico policromo a motiv..
                  </Text>
                  <Heading as="h3" className="leading-[18px]">
                    <span className="font-medium text-gray-900">
                      <>
                        Asta
                        <br />
                      </>
                    </span>
                    <span className="font-bold text-gray-900">
                      Arte Moderna e Contemporanea
                    </span>
                    <span className="text-gray-900">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="font-bold text-gray-900">
                      Milano, 21-22 Dicembre 2021
                    </span>
                  </Heading>
                </div>
                <div className="flex w-full flex-col">
                  <div className="relative h-[316px] md:h-auto">
                    <Img
                      src="images/img_rectangle_21_2.png"
                      alt="image"
                      className="h-[316px] w-full object-cover"
                    />
                    <Button
                      size="xs"
                      leftIcon={
                        <Img
                          src="images/img_eye.svg"
                          alt="eye"
                          className="h-[20px] w-[20px]"
                        />
                      }
                      className="absolute left-[10.00px] top-[10.00px] m-auto min-w-[89px] gap-[5px] rounded-[16px] font-semibold"
                    >
                      3,359
                    </Button>
                  </div>
                  <Text as="p" className="mt-[33px] tracking-[-0.28px]">
                    Spilla in argento e oro a forma di rana stilizzata.
                  </Text>
                  <Heading as="h4" className="mt-[65px] leading-[18px]">
                    <span className="font-medium text-gray-900">
                      <>
                        Asta
                        <br />
                      </>
                    </span>
                    <span className="font-bold text-gray-900">
                      Arte Moderna e Contemporanea
                    </span>
                    <span className="text-gray-900">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="font-bold text-gray-900">
                      Milano, 21-22 Dicembre 2021
                    </span>
                  </Heading>
                </div>
                <div className="flex w-full flex-col gap-[35px]">
                  <div className="relative h-[316px] md:h-auto">
                    <Img
                      src="images/img_rectangle_21_3.png"
                      alt="image"
                      className="h-[316px] w-full object-cover"
                    />
                    <Button
                      size="xs"
                      leftIcon={
                        <Img
                          src="images/img_eye.svg"
                          alt="eye"
                          className="h-[20px] w-[20px]"
                        />
                      }
                      className="absolute left-[10.00px] top-[10.00px] m-auto min-w-[89px] gap-[5px] rounded-[16px] font-semibold"
                    >
                      3,359
                    </Button>
                  </div>
                  <Text as="p" className="tracking-[-0.28px]">
                    Spilla in argento e oro a forma di rana stilizzata.
                  </Text>
                  <Heading as="h5" className="leading-[18px]">
                    <span className="font-medium text-gray-900">
                      <>
                        Asta
                        <br />
                      </>
                    </span>
                    <span className="font-bold text-gray-900">
                      Arte Moderna e Contemporanea
                    </span>
                    <span className="text-gray-900">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="font-bold text-gray-900">
                      Milano, 21-22 Dicembre 2021
                    </span>
                  </Heading>
                </div>
                <div className="flex w-full flex-col gap-8">
                  <div className="relative h-[316px] md:h-auto">
                    <Img
                      src="images/img_rectangle_21_4.png"
                      alt="image"
                      className="h-[316px] w-full object-cover"
                    />
                    <Button
                      size="xs"
                      leftIcon={
                        <Img
                          src="images/img_eye.svg"
                          alt="eye"
                          className="h-[20px] w-[20px]"
                        />
                      }
                      className="absolute left-[10.00px] top-[10.00px] m-auto min-w-[89px] gap-[5px] rounded-[16px] font-semibold"
                    >
                      3,359
                    </Button>
                  </div>
                  <div className="flex flex-col gap-5">
                    <Text as="p" className="leading-[18px] tracking-[-0.28px]">
                      Spilla (Metà XIX secolo) in avorio finemente intagliato
                      con micromosaico policromo a motiv..
                    </Text>
                    <Heading as="h6" className="leading-[18px]">
                      <span className="font-medium text-gray-900">
                        <>
                          Asta
                          <br />
                        </>
                      </span>
                      <span className="font-bold text-gray-900">
                        Arte Moderna e Contemporanea
                      </span>
                      <span className="text-gray-900">
                        <>
                          <br />
                        </>
                      </span>
                      <span className="font-bold text-gray-900">
                        Milano, 21-22 Dicembre 2021
                      </span>
                    </Heading>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-8">
                  <div className="relative h-[316px] md:h-auto">
                    <Img
                      src="images/img_rectangle_21_5.png"
                      alt="image"
                      className="h-[316px] w-full object-cover"
                    />
                    <Button
                      size="xs"
                      leftIcon={
                        <Img
                          src="images/img_eye.svg"
                          alt="eye"
                          className="h-[20px] w-[20px]"
                        />
                      }
                      className="absolute left-[10.00px] top-[10.00px] m-auto min-w-[89px] gap-[5px] rounded-[16px] font-semibold"
                    >
                      3,359
                    </Button>
                  </div>
                  <div className="flex flex-col gap-5">
                    <Text as="p" className="leading-[18px] tracking-[-0.28px]">
                      Spilla (Metà XIX secolo) in avorio finemente intagliato
                      con micromosaico policromo a motiv..
                    </Text>
                    <Heading as="p" className="leading-[18px]">
                      <span className="font-medium text-gray-900">
                        <>
                          Asta
                          <br />
                        </>
                      </span>
                      <span className="font-bold text-gray-900">
                        Arte Moderna e Contemporanea
                      </span>
                      <span className="text-gray-900">
                        <>
                          <br />
                        </>
                      </span>
                      <span className="font-bold text-gray-900">
                        Milano, 21-22 Dicembre 2021
                      </span>
                    </Heading>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-[33px]">
                  <div className="relative h-[316px] md:h-auto">
                    <Img
                      src="images/img_rectangle_21_6.png"
                      alt="image"
                      className="h-[316px] w-full object-cover"
                    />
                    <Button
                      size="xs"
                      leftIcon={
                        <Img
                          src="images/img_eye.svg"
                          alt="eye"
                          className="h-[20px] w-[20px]"
                        />
                      }
                      className="absolute left-[10.00px] top-[10.00px] m-auto min-w-[89px] gap-[5px] rounded-[16px] font-semibold"
                    >
                      3,359
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[37px]">
                    <Text as="p" className="tracking-[-0.28px]">
                      Spilla in argento e oro a forma di rana stilizzata.
                    </Text>
                    <Heading as="p" className="leading-[18px]">
                      <span className="font-medium text-gray-900">
                        <>
                          Asta
                          <br />
                        </>
                      </span>
                      <span className="font-bold text-gray-900">
                        Arte Moderna e Contemporanea
                      </span>
                      <span className="text-gray-900">
                        <>
                          <br />
                        </>
                      </span>
                      <span className="font-bold text-gray-900">
                        Milano, 21-22 Dicembre 2021
                      </span>
                    </Heading>
                  </div>
                </div>
                <div className="flex w-full flex-col">
                  <div className="relative h-[316px] md:h-auto">
                    <Img
                      src="images/img_rectangle_21_7.png"
                      alt="image"
                      className="h-[316px] w-full object-cover"
                    />
                    <Button
                      size="xs"
                      leftIcon={
                        <Img
                          src="images/img_eye.svg"
                          alt="eye"
                          className="h-[20px] w-[20px]"
                        />
                      }
                      className="absolute left-[10.00px] top-[10.00px] m-auto min-w-[89px] gap-[5px] rounded-[16px] font-semibold"
                    >
                      3,359
                    </Button>
                  </div>
                  <Heading
                    size="lg"
                    as="h6"
                    className="mt-8 tracking-[-0.36px]"
                  >
                    Spilla in oro 18 Kt con diamanti
                  </Heading>
                  <Text as="p" className="mt-4 tracking-[-0.28px]">
                    Spilla in argento e oro a forma di rana stilizzata.
                  </Text>
                  <Heading as="p" className="mt-[66px] leading-[18px]">
                    <span className="font-medium text-gray-900">
                      Base d’asta
                    </span>
                    <span className="text-gray-900">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="font-bold text-gray-900">
                      €1.500 - €2.000
                    </span>
                  </Heading>
                </div>
                <div className="flex w-full flex-col">
                  <div className="relative h-[316px] md:h-auto">
                    <Img
                      src="images/img_rectangle_21_8.png"
                      alt="image"
                      className="h-[316px] w-full object-cover"
                    />
                    <Button
                      size="xs"
                      leftIcon={
                        <Img
                          src="images/img_eye.svg"
                          alt="eye"
                          className="h-[20px] w-[20px]"
                        />
                      }
                      className="absolute left-[10.00px] top-[10.00px] m-auto min-w-[89px] gap-[5px] rounded-[16px] font-semibold"
                    >
                      3,359
                    </Button>
                  </div>
                  <Heading
                    size="lg"
                    as="h6"
                    className="mt-8 tracking-[-0.36px]"
                  >
                    Spilla in argento e oro
                  </Heading>
                  <Text as="p" className="mt-4 tracking-[-0.28px]">
                    Spilla in argento e oro a forma di rana stilizzata.
                  </Text>
                  <Heading as="p" className="mt-[66px] leading-[18px]">
                    <span className="font-medium text-gray-900">
                      Base d’asta
                    </span>
                    <span className="text-gray-900">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="font-bold text-gray-900">
                      €1.500 - €2.000
                    </span>
                  </Heading>
                </div>
                <div className="flex w-full flex-col">
                  <div className="relative h-[316px] md:h-auto">
                    <Img
                      src="images/img_rectangle_21_9.png"
                      alt="image"
                      className="h-[316px] w-full object-cover"
                    />
                    <Button
                      size="xs"
                      leftIcon={
                        <Img
                          src="images/img_eye.svg"
                          alt="eye"
                          className="h-[20px] w-[20px]"
                        />
                      }
                      className="absolute left-[10.00px] top-[10.00px] m-auto min-w-[89px] gap-[5px] rounded-[16px] font-semibold"
                    >
                      3,359
                    </Button>
                  </div>
                  <Heading
                    size="lg"
                    as="h6"
                    className="mt-8 tracking-[-0.36px]"
                  >
                    Spilla in argento e oro
                  </Heading>
                  <Text
                    as="p"
                    className="mt-4 leading-[18px] tracking-[-0.28px]"
                  >
                    Spilla (Metà XIX secolo) in avorio finemente intagliato con
                    micromosaico policromo a motiv..
                  </Text>
                  <Heading as="p" className="mt-12 leading-4">
                    <span className="font-medium text-gray-900">
                      Base d’asta
                    </span>
                    <span className="text-gray-900">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="font-bold text-gray-900">
                      €1.500 - €2.000
                    </span>
                  </Heading>
                </div>
                <div className="flex w-full flex-col">
                  <div className="relative h-[316px] md:h-auto">
                    <Img
                      src="images/img_rectangle_21_10.png"
                      alt="image"
                      className="h-[316px] w-full object-cover"
                    />
                    <Button
                      size="xs"
                      leftIcon={
                        <Img
                          src="images/img_eye.svg"
                          alt="eye"
                          className="h-[20px] w-[20px]"
                        />
                      }
                      className="absolute left-[10.00px] top-[10.00px] m-auto min-w-[89px] gap-[5px] rounded-[16px] font-semibold"
                    >
                      3,359
                    </Button>
                  </div>
                  <Heading
                    size="lg"
                    as="h6"
                    className="mt-8 leading-7 tracking-[-0.36px]"
                  >
                    Spilla in oro 18 Kt diamanti e rubini, 1940
                  </Heading>
                  <Text as="p" className="mt-4 tracking-[-0.28px]">
                    Spilla in argento e oro a forma di rana stilizzata.
                  </Text>
                  <Heading as="p" className="mt-[38px] leading-4">
                    <span className="font-medium text-gray-900">
                      Base d’asta
                    </span>
                    <span className="text-gray-900">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="font-bold text-gray-900">
                      €1.500 - €2.000
                    </span>
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
