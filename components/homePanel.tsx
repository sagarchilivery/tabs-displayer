import { CPLDRIcons, councilCards } from "@/utils/icons";
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import CouncilMemberModal from "./councilMemberModal";

export default function HomePanel() {
  const [repackSectionClicked, setRepackSectionClicked] = useState(false);
  const [councilMembersClicked, setCouncilMembersClicked] = useState(false);

  function CardDisplayer({ array }: any) {
    function HandleClick(name: string) {
      console.log("name: ", name);
      switch (name) {
        case "Repacking & Relabel Request Tracking":
          setRepackSectionClicked(true);
          break;

        case "Council Members":
          setCouncilMembersClicked(true);
          break;

        default:
          break;
      }
    }
    return (
      <div className="flex gap-5 overflow-x-scroll scrollbar-hide">
        {array.map((card: any, i: number) => (
          <button
            key={i}
            onClick={() => HandleClick(card.name)}
            className={`w-[250px] px-5 flex flex-col gap-3 items-center group justify-center h-[275px] rounded bg-[#fff] shrink-0 hover:bg-red-300 ${
              card.name === "Repacking & Relabel Request Tracking" ||
              card.name === "Council Members"
                ? " cursor-pointer"
                : "cursor-not-allowed"
            }`}
          >
            <div className="flex items-center justify-center w-12 h-12 bg-[#E924311A] rounded-full">
              {card.raw}
            </div>
            <div className="font-semibold ">{card.name}</div>
          </button>
        ))}
      </div>
    );
  }

  function SectionDisplayer({ title, array }: any) {
    return (
      <div className="space-y-5">
        <h3 className="text-xl font-semibold ">{title}</h3>
        <div className="w-[83%] overflow-hidden">
          <div className="flex gap-8 overflow-x-auto">
            <CardDisplayer array={array} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start w-full gap-10 px-8 py-6">
      <button
        onClick={() => {
          setRepackSectionClicked(false);
        }}
        className="-mb-4 text-[#9FA0A1]"
      >
        Home{" "}
        {repackSectionClicked && (
          <label className="font-semibold text-black">
            \ Repack & Relabel Request Tracking
          </label>
        )}
      </button>
      {!repackSectionClicked ? (
        <>
          <SectionDisplayer title="Council Members" array={councilCards} />
          <SectionDisplayer title="CPLDR Lead" array={CPLDRIcons} />
        </>
      ) : (
        <div className="space-y-2">
          <button
            onClick={() => {
              setRepackSectionClicked(false);
            }}
            className="border-2 px-4 py-1 rounded-md border-[#121212]"
          >
            Go back
          </button>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit magnam, fuga architecto accusantium excepturi eveniet.
            Placeat, excepturi ea. Eos optio facilis laboriosam culpa nobis quod
            illum exercitationem, eum nulla doloribus commodi dicta atque a
            delectus ullam voluptate veritatis quisquam dolorum et? Repellendus,
            eum dolores quod soluta ratione ipsa deleniti inventore enim cumque
            consectetur facere earum numquam facilis, ab laudantium obcaecati
            excepturi sed. Eaque blanditiis, veniam, quis laudantium soluta
            expedita alias praesentium voluptatum sapiente ratione aliquam sequi
            dolorum quisquam dolor aliquid quasi dolores repellat quia
            voluptates ullam odit delectus. Ea dolore nam ipsa sapiente, ducimus
            maiores iusto sunt, vel pariatur reprehenderit odit quae veritatis
            nobis reiciendis, laboriosam et. Quasi, iste sit. Distinctio numquam
            rerum veritatis! Fugiat tenetur optio molestias in, consequatur
            omnis rem pariatur, id culpa cumque numquam! Officiis minima ad
            facere! Eos earum officia deserunt excepturi soluta nobis assumenda
            porro amet, labore illo animi delectus velit exercitationem optio ad
            repellat.
          </p>
        </div>
      )}

      {councilMembersClicked && (
        <CouncilMemberModal
          open={councilMembersClicked}
          setOpen={setCouncilMembersClicked}
        />
      )}
    </div>
  );
}
