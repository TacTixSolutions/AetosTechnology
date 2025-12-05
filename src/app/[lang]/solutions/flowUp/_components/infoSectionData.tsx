import PieChartCard from "@/app/[lang]/_components/heroSection/pieChartCard";
import {
  BarChart3Icon,
  CheckIcon,
  TargetIcon,
  TrendingUpIcon,
} from "lucide-react";
import Image from "next/image";

export const infoCards = [
  {
    id: "supervisor",
    title: "SuperVisor",
    description:
      "SuperVisor streamlines field operations with smart checklists, optimized schedules, and real-time reporting. Built for multisite teams, it speeds up daily work, improves execution, and supports better decisions.",
    imageSrc: "/flowup/infosection1.png",
    imageAlt: "SuperVisor",
  },
  {
    id: "visual-merchandising",
    title: "Visual Merchandising",
    description:
      "The Visual Merchandising module lets you control in-store execution with clear guidelines, before/after photos, and instant tracking. It ensures brand consistency, improves HQ-to-field communication, and delivers a uniform customer experience across all stores.",
    imageSrc: "/flowup/infosection2.png",
    imageAlt: "Visual Merchandising",
    floatingComponentTwo: (
      <div className="animate-float">
        <Image
          src="/graphFlowup.png"
          alt="FlowUp Hero Image"
          className="shadow-lg rounded"
          width={130}
          height={150}
        />
      </div>
    ),
  },
  {
    id: "shiftmaster",
    title: "ShiftMaster",
    description:
      "Organize and optimize staff schedules with a smart, easy-to-use module. Create and adjust shifts in a few clicks, balance workloads, prevent conflicts, and ensure optimal coverage based on operational needs.",
    imageSrc: "/flowup/infosection3.png",
    imageAlt: "ShiftMaster",
    floatingComponentOne: (
      <div className="bg-white rounded-2xl px-6 py-4 shadow-lg flex items-center gap-3 animate-float">
        <div className="bg-[#024E63] rounded-lg p-2">
          <CheckIcon className="w-6 h-6 text-white" strokeWidth={3} />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">Flux de travail</p>
          <p className="text-xs text-gray-600">simple</p>
        </div>
      </div>
    ),
    floatingComponentTwo: (
      <div className="bg-white rounded-2xl px-6 py-4 shadow-lg flex items-center gap-3 animate-float-1">
        <div className="bg-[#024E63] rounded-lg p-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">
            Moins de conflits,
          </p>
          <p className="text-xs text-gray-600">plus d&apos;efficacité</p>
        </div>
      </div>
    ),
  },
  {
    id: "communication",
    title: "Communication",
    description:
      "Create a real internal social network that transforms team collaboration. The Communication module centralizes messaging, workgroups, news feed, and built-in calls in one modern, intuitive space that connects your entire organization.",
    imageSrc: "/flowup/infosection4.png",
    imageAlt: "Communication",
    floatingComponentOne: (
      <div className="bg-white rounded-2xl px-6 py-4 shadow-lg flex items-center gap-3 animate-float">
        <div className="bg-[#024E63] rounded-lg p-2">
          <TrendingUpIcon className="w-6 h-6 text-white" strokeWidth={2.5} />
        </div>
        <div>
          <p className="text-lg font-bold text-gray-900">+45%</p>
          <p className="text-xs text-gray-600">Engagement des équipes</p>
        </div>
      </div>
    ),
  },
  {
    id: "flowhr",
    title: "FlowHR",
    description:
      "HRFlow is a complete, intuitive module that centralizes daily HR tracking. It manages absences, leave, presence, evaluations, and employee journeys while giving clear, up-to-date insights. A simple and structured tool to support teams and HR decisions.",
    imageSrc: "/flowup/infosection5.png",
    imageAlt: "FlowHR",
    floatingComponentOne: (
      <div className="animate-float">
        <PieChartCard />
      </div>
    ),
  },
  {
    id: "micro-learning",
    title: "Micro-Learning",
    description:
      "Give your teams a fast, interactive, anytime learning experience. The Micro-Learning module delivers short training capsules, videos, quizzes, and targeted paths to build field skills continuously. A modern and flexible way to boost skills without disrupting operations.",
    imageSrc: "/flowup/infosection6.png",
    imageAlt: "Micro-Learning",
    floatingComponentOne: (
      <div className="bg-white rounded-2xl px-6 py-4 shadow-lg flex items-center gap-3 animate-float">
        <div className="bg-white border-2 border-[#024E63] rounded-full p-2">
          <TargetIcon className="w-6 h-6 text-[#024E63]" strokeWidth={2.5} />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">Quizzes</p>
          <p className="text-xs text-gray-600">Smart learning</p>
        </div>
      </div>
    ),
  },
  {
    id: "optistock",
    title: "OptiStock",
    description:
      "OptiStock optimizes stock levels with an AI-driven analysis engine that tracks sales and inventory across each store. It detects imbalances, suggests transfers, and anticipates needs to prevent stockouts, overstock, and lost sales.",
    imageSrc: "/flowup/infosection7.png",
    imageAlt: "OptiStock",
    floatingComponentOne: (
      <div className="bg-white rounded-2xl px-6 py-4 shadow-lg flex items-center gap-3 animate-float">
        <div className="bg-[#024E63] rounded-lg p-2">
          <BarChart3Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
        </div>
        <div>
          <p className="text-lg font-bold text-gray-900">70%</p>
          <p className="text-xs text-gray-600">Smart tracking</p>
        </div>
      </div>
    ),
  },
];
