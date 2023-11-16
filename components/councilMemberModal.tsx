import React from "react";
import { Dialog } from "@headlessui/react";
import { MdClose } from "react-icons/md";

export default function CouncilMemberModal({ open, setOpen }: any) {
  const dunnyData = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, incidunt",
    },
  ];
  return (
    <Dialog
      open={open}
      className="absolute top-0 left-0 flex items-center justify-center w-full h-full"
      onClose={() => setOpen(false)}
    >
      <Dialog.Panel className="max-w-[55%] max-h-[80%] py-4 overflow-y-auto px-6 text-black w-full h-full bg-white rounded-lg shadow-2xl border">
        <Dialog.Title className="flex items-center justify-between text-2xl font-semibold ">
          <div>Council Members</div>
          <div className="">
            <MdClose
              onClick={() => setOpen(false)}
              className="w-6 h-6 cursor-pointer"
            />
          </div>
        </Dialog.Title>
        {new Array(50)
          .fill(
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, incidunt"
          )
          .map((item: string, i: number) => (
            <div key={i} className="">
              {item}
            </div>
          ))}
        <div
          onClick={() => setOpen(false)}
          className="w-full py-1 mt-4 font-semibold text-center border rounded-md cursor-pointer"
        >
          Cancel
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
