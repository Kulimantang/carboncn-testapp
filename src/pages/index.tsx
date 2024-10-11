import {
  Accordion as CarbonAccordion,
  AccordionItem as CarbonAccordionItem,
  Button as CarbonButton,
  Checkbox as CarbonCheckbox,
  Tab as CarbonTab,
  TabList as CarbonTabList,
  TabPanel as CarbonTabPanel,
  TabPanels as CarbonTabPanels,
  Tabs as CarbonTabs,
  TextInput,
} from "@carbon/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
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
      <main className="flex w-full flex-col items-center gap-4 px-2 pb-96 pt-10">
        <p className="text-cds-primary">TEST</p>
        <div className="grid grid-cols-2 gap-4">
          <CarbonButton>Click</CarbonButton>
          <Button>Click</Button>

          <CarbonButton kind="danger">Click</CarbonButton>
          <Button variant="destructive">Click</Button>

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
          <Button variant="outline">Click</Button>

          <CarbonButton kind="ghost" onClick={() => {}}>
            Click
          </CarbonButton>
          <Button variant="ghost">Click</Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <TextInput labelText="Label" id="label" placeholder="Placeholder" />
          <Input label="Label" id="labl2" placeholder="Placeholder" />
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

        <div className="grid w-full grid-cols-2 gap-4">
          <div className="w-full">
            <CarbonTabs>
              <CarbonTabList aria-label="List of tabs">
                <CarbonTab>Dashboard</CarbonTab>
                <CarbonTab>Monitoring</CarbonTab>
                <CarbonTab>Activity</CarbonTab>
                <CarbonTab disabled>Settings</CarbonTab>
              </CarbonTabList>
              <CarbonTabPanels>
                <CarbonTabPanel>Tab Panel 1</CarbonTabPanel>
                <CarbonTabPanel>
                  <form
                    style={{
                      margin: "2em",
                    }}
                  >
                    <legend className={`cds--label`}>Validation example</legend>
                    <CarbonButton
                      style={{
                        marginTop: "1rem",
                        marginBottom: "1rem",
                      }}
                      type="submit"
                      disabled
                    >
                      Submit
                    </CarbonButton>
                    <TextInput
                      type="text"
                      labelText="Text input label"
                      helperText="Optional help text"
                      id="text-input-1"
                    />
                  </form>
                </CarbonTabPanel>
                <CarbonTabPanel>Tab Panel 3</CarbonTabPanel>
                <CarbonTabPanel>Tab Panel 4</CarbonTabPanel>
              </CarbonTabPanels>
            </CarbonTabs>
          </div>

          <div className="w-full">
            <Tabs>
              <TabsList className="w-full">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="settings" disabled>
                  Settings
                </TabsTrigger>
              </TabsList>
              <TabsContent value="dashboard">Tab Panel 1</TabsContent>
              <TabsContent value="monitoring">
                <form
                  style={{
                    margin: "2em",
                  }}
                >
                  <legend className={`cds--label`}>Validation example</legend>
                  <Button
                    style={{
                      marginTop: "1rem",
                      marginBottom: "1rem",
                    }}
                    type="submit"
                    disabled
                  >
                    Submit
                  </Button>
                  <Input type="text" label="Text input label" id="text-input-1" />
                </form>
              </TabsContent>
              <TabsContent value="activity">Tab Panel 3</TabsContent>
              <TabsContent value="settings">Tab Panel 4</TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-4">
          <div className="w-full">
            <CarbonCheckbox id="checkbox-1" labelText="Checkbox label" />
          </div>
          <div className="w-full">
            <div className="flex items-center gap-2">
              <Checkbox id="checkbox-2" />
              <label className="text-sm" htmlFor="checkbox-2">
                Checkbox label
              </label>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
