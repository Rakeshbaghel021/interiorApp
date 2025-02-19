import React from "react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";
const secondaryFeatures = [
  {
    name: "Save Time",
    description:
      "Realistic 3D model & top professional help to take the guesswork out of the designing process.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Save Money",
    description:
      "Top talent for up to 80% less than traditional interior design & trade discounts of 5% to 45% at the top vendors.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "Convenient & Stress Free",
    description:
      "A fun and easy white-glove service including everything from design to convenient ordering.",
    href: "#",
    icon: ArrowPathIcon,
  },
];
function Savesection() {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:my-5 lg:px-8 sm:mb-24">
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {secondaryFeatures.map((feature) => (
            <div
              key={feature.name}
              className="flex flex-col justify-center items-center "
            >
              <dt className="flex items-center gap-x-3 text-base/7  justify-centerfont-semibold text-gray-900">
                <feature.icon
                  aria-hidden="true"
                  className="size-9 flex-none text-[#B19F6F]"
                />
                {feature.name}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-500 text-center">
                <p className="flex-auto">{feature.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default Savesection;
