import PieChartCard from "@/app/[lang]/_components/heroSection/pieChartCard";
import {
  BarChart3Icon,
  CheckIcon,
  TargetIcon,
  TrendingUpIcon,
} from "lucide-react";
import Image from "next/image";

interface ModuleDict {
  attendanceRate: string;
  title: string;
  description: string;
  id: string;
  card1Title?: string;
  card1Subtitle?: string;
  card2Title?: string;
  card2Subtitle?: string;
  cardTitle?: string;
  cardSubtitle?: string;
  statValue?: string;
  statLabel?: string;
}

interface ModulesDict {
  supervisor: ModuleDict;
  visualMerchandising: ModuleDict;
  shiftMaster: ModuleDict;
  communication: ModuleDict;
  flowHR: ModuleDict;
  microLearning: ModuleDict;
  optiStock: ModuleDict;
}

export const getInfoCards = (modules: ModulesDict) => [
  {
    id: modules.supervisor.id,
    title: modules.supervisor.title,
    description: modules.supervisor.description,
    imageSrc: "/flowup/infosection1.png",
    imageAlt: modules.supervisor.title,
  },
  {
    id: modules.visualMerchandising.id,
    title: modules.visualMerchandising.title,
    description: modules.visualMerchandising.description,
    imageSrc: "/flowup/infosection2.png",
    imageAlt: modules.visualMerchandising.title,
    floatingComponentTwo: (
      <div className="animate-float">
        <Image
          src="/graphFlowup.png"
          alt={modules.visualMerchandising.title}
          className="shadow-lg rounded"
          width={130}
          height={150}
        />
      </div>
    ),
  },
  {
    id: modules.shiftMaster.id,
    title: modules.shiftMaster.title,
    description: modules.shiftMaster.description,
    imageSrc: "/flowup/infosection3.png",
    imageAlt: modules.shiftMaster.title,
    floatingComponentOne: (
      <div className="bg-white rounded-2xl px-6 py-4 shadow-lg flex items-center gap-3 animate-float">
        <div className="bg-[#024E63] rounded-lg p-2">
          <CheckIcon className="w-6 h-6 text-white" strokeWidth={3} />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">
            {modules.shiftMaster.card1Title}
          </p>
          <p className="text-xs text-gray-600">
            {modules.shiftMaster.card1Subtitle}
          </p>
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
            {modules.shiftMaster.card2Title}
          </p>
          <p className="text-xs text-gray-600">
            {modules.shiftMaster.card2Subtitle}
          </p>
        </div>
      </div>
    ),
  },
  {
    id: modules.communication.id,
    title: modules.communication.title,
    description: modules.communication.description,
    imageSrc: "/flowup/infosection4.png",
    imageAlt: modules.communication.title,
    floatingComponentOne: (
      <div className="bg-white rounded-2xl px-6 py-4 shadow-lg flex items-center gap-3 animate-float">
        <div className="bg-[#024E63] rounded-lg p-2">
          <TrendingUpIcon className="w-6 h-6 text-white" strokeWidth={2.5} />
        </div>
        <div>
          <p className="text-lg font-bold text-gray-900">
            {modules.communication.statValue}
          </p>
          <p className="text-xs text-gray-600">
            {modules.communication.statLabel}
          </p>
        </div>
      </div>
    ),
  },
  {
    id: modules.flowHR.id,
    title: modules.flowHR.title,
    description: modules.flowHR.description,
    imageSrc: "/flowup/infosection5.png",
    imageAlt: modules.flowHR.title,
    floatingComponentOne: (
      <div className="animate-float">
        <PieChartCard attendanceRate={modules.flowHR.attendanceRate} />
      </div>
    ),
  },
  {
    id: modules.microLearning.id,
    title: modules.microLearning.title,
    description: modules.microLearning.description,
    imageSrc: "/flowup/infosection6.png",
    imageAlt: modules.microLearning.title,
    floatingComponentOne: (
      <div className="bg-white rounded-2xl px-6 py-4 shadow-lg flex items-center gap-3 animate-float">
        <div className="bg-white border-2 border-[#024E63] rounded-full p-2">
          <TargetIcon className="w-6 h-6 text-[#024E63]" strokeWidth={2.5} />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">
            {modules.microLearning.cardTitle}
          </p>
          <p className="text-xs text-gray-600">
            {modules.microLearning.cardSubtitle}
          </p>
        </div>
      </div>
    ),
  },
  {
    id: modules.optiStock.id,
    title: modules.optiStock.title,
    description: modules.optiStock.description,
    imageSrc: "/flowup/infosection7.png",
    imageAlt: modules.optiStock.title,
    floatingComponentOne: (
      <div className="bg-white rounded-2xl px-6 py-4 shadow-lg flex items-center gap-3 animate-float">
        <div className="bg-[#024E63] rounded-lg p-2">
          <BarChart3Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
        </div>
        <div>
          <p className="text-lg font-bold text-gray-900">
            {modules.optiStock.statValue}
          </p>
          <p className="text-xs text-gray-600">{modules.optiStock.statLabel}</p>
        </div>
      </div>
    ),
  },
];
