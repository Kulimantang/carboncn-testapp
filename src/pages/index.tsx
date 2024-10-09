import {
  Accordion as CarbonAccordion,
  AccordionItem as CarbonAccordionItem,
  Button as CarbonButton,
  TextInput,
} from "@carbon/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CEN - MVP-Starter</title>
        <meta name="description" content="MVP-Starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-col items-center gap-4 px-2 pt-10">
        <div className="grid grid-cols-2 gap-4">
          <CarbonButton>Click</CarbonButton>
          <Button>Click</Button>

          <CarbonButton kind="danger">Click</CarbonButton>
          <Button variant="danger">Click</Button>

          <CarbonButton kind="danger--tertiary" onClick={() => {}}>
            Click
          </CarbonButton>
          <Button variant="danger--tertiary">Click</Button>

          <CarbonButton kind="secondary" onClick={() => {}}>
            Click
          </CarbonButton>
          <Button variant="secondary" className="">
            Click
          </Button>

          <CarbonButton kind="tertiary" onClick={() => {}}>
            Click
          </CarbonButton>
          <Button variant="tertiary">Click</Button>

          <CarbonButton kind="ghost" onClick={() => {}}>
            Click
          </CarbonButton>
          <Button variant="ghost">Click</Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <TextInput labelText="Label" id="label" />
          <Input label="Label" id="labl2" />
        </div>

        <div className="grid w-full grid-cols-2 gap-4">
          <div className="w-full">
            <CarbonAccordion>
              <CarbonAccordionItem title="Section 1 title">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </CarbonAccordionItem>
              <CarbonAccordionItem title="Section 2 title">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </CarbonAccordionItem>
            </CarbonAccordion>
          </div>
          <div className="w-full">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="1">
                <AccordionTrigger>Section 1 title</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="2">
                <AccordionTrigger>Section 2 title</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
