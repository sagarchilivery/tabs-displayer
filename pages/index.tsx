import Baselayout from "@/components/baselayout";
import HomePanel from "@/components/homePanel";
import { Icons } from "@/utils/icons";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";

export default function Home() {
  return (
    <Baselayout>
      <div className="flex w-screen min-h-screen bg-white">
        <Tab.Group>
          <div className="flex shrink-0 flex-col max-w-[20%] pl-5 pr-12 w-full gap-5">
            <Tab.List>
              {Icons.map((Icon: { raw: any; name: string }, i: number) => (
                <div key={i} className="">
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`px-2 border-none focus:outline-none outline-none py-2 w-full text-start rounded hover:bg-[#F3F5F8] flex items-center my-2 gap-5 ${
                          selected && "bg-[#F3F5F8]"
                        }`}
                      >
                        <div className="">{Icon.raw}</div>
                        <div className="">{Icon.name}</div>
                      </button>
                    )}
                  </Tab>
                </div>
              ))}
            </Tab.List>
          </div>
          <Tab.Panels className="bg-[#F5F5F5] w-full pb-10">
            <Tab.Panel>
              <HomePanel />
            </Tab.Panel>
            {new Array(12)
              .fill("Coming Soon")
              .map((item: string, i: number) => (
                <Tab.Panel key={i}>
                  <div className="p-10 text-xl font-semibold">Coming Soon</div>
                </Tab.Panel>
              ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Baselayout>
  );
}
