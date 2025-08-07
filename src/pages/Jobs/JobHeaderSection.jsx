import { TbCalendarStats } from "react-icons/tb";
import { Reyal } from "../../../components/layout";
import { IoStatsChartOutline } from "react-icons/io5";

export default function JobHeaderSection({ doctor, mode = "job" }) {
  const isJob = mode === "job";
  const isCourse = mode === "course";

  return (
    <div className="bg-white -mt-8 sm:-mt-12 md:-mt-38 relative shadow-[0_0_20px_0_#076A6012] sm:shadow-[0_0_25px_0_#076A6012] md:shadow-[0_0_35px_0_#076A6012] p-4 sm:p-6 md:p-8 py-8 sm:py-12 md:py-16 rounded-sm flex flex-col md:flex-row justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-18">
      <div className="flex-1 flex flex-col md:flex-row gap-0 sm:gap-1 md:gap-2 lg:gap-18 justify-center">
        {/* Specialty */}
        <div className="flex flex-col gap-2 w-fit px-2 sm:px-3 md:px-4">
          <p className="text-[#617A78] capitalize flex items-center gap-2 text-sm sm:text-base">
            <span className="material-icons text-sm sm:text-base">
              <svg
                width="12"
                height="14"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 sm:w-3.5 sm:h-4 md:w-4 md:h-4"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.3095 2.3727C2.91632 2.83777 2.64213 3.4033 2.43972 4.13814C2.0815 5.43864 2.42544 6.03736 1.61279 7.57227C1.51475 7.75745 1.3006 7.97336 1.07019 8.20567C0.743474 8.53511 0.377348 8.90427 0.412505 9.06942C0.440286 9.20002 0.788567 9.25489 1.12279 9.30755C1.45922 9.36055 1.78772 9.41195 1.97725 9.59089C2.27294 9.86898 1.63847 10.7217 1.71672 10.7669C2.09132 10.9832 3.07132 10.9631 3.1215 10.9614C3.18503 10.9605 3.24633 10.9847 3.29208 11.0288C3.33783 11.0729 3.36434 11.1332 3.36583 11.1968C3.36732 11.2603 3.34369 11.3218 3.30006 11.368C3.25643 11.4142 3.19634 11.4412 3.13285 11.4434C3.12797 11.4435 2.61597 11.4695 2.21647 11.5271C2.04869 11.5514 1.91613 11.5748 1.89616 11.5906C1.82304 11.6486 2.17254 13.4289 2.18072 13.6534C2.1845 13.757 2.30797 13.7975 2.40925 13.8188C2.87375 13.9162 4.45588 13.7504 4.95179 13.5744C5.23497 13.4738 5.53 13.3691 5.69016 13.195L7.07691 11.6882C7.12027 11.6411 7.18057 11.6131 7.24455 11.6104C7.30853 11.6078 7.37095 11.6306 7.41807 11.674C7.46519 11.7173 7.49316 11.7776 7.49582 11.8416C7.49848 11.9056 7.47561 11.968 7.43226 12.0151L6.04551 13.522C5.80669 13.7815 5.45876 13.9069 5.12335 14.026L5.29904 15.5L10.6473 15.4725C10.621 15.0087 10.6423 14.3795 10.6798 13.8206C10.7362 12.9828 11.3014 12.0873 11.7043 11.3711C13.074 8.93674 14.3108 6.73842 13.0972 3.48192C12.8072 2.70367 12.2983 2.0882 11.7134 1.63027C10.9897 1.06367 10.1532 0.738984 9.46919 0.645016C8.71544 0.541484 7.93007 0.445047 7.1711 0.536766C5.79904 0.702641 4.21222 1.30495 3.3095 2.3727ZM8.85779 2.46911C9.18031 2.55695 9.49032 2.68553 9.78035 2.85173L10.4731 2.4127L11.6932 3.63283L11.2543 4.32523C11.4206 4.61537 11.5492 4.92552 11.637 5.24817L12.4365 5.42736V7.15289L11.6368 7.33214C11.5489 7.65466 11.4204 7.96467 11.2542 8.2547L11.6932 8.94742L10.4731 10.1675L9.78066 9.7287C9.49052 9.89496 9.18038 10.0236 8.85772 10.1114L8.67854 10.9109H6.953L6.77375 10.1111C6.45124 10.0233 6.14122 9.89471 5.85119 9.72852L5.15847 10.1675L3.93835 8.94742L4.37719 8.25502C4.21095 7.96487 4.08235 7.65473 3.9945 7.33208L3.195 7.15289V5.42736L3.99466 5.24814C4.0825 4.92558 4.21109 4.61553 4.37732 4.32548L3.93832 3.63286L5.15844 2.41273L5.85113 2.85177C6.14117 2.68558 6.45119 2.55701 6.77372 2.46917L6.95297 1.66942H8.6785L8.85779 2.46911ZM7.81575 3.53592C9.33685 3.53592 10.57 4.76902 10.57 6.29011C10.57 7.8112 9.33685 9.04433 7.81575 9.04433C6.29466 9.04433 5.06154 7.81123 5.06154 6.29011C5.06154 4.76898 6.29466 3.53592 7.81575 3.53592ZM7.90804 4.51089L8.29682 5.7153C8.30295 5.73495 8.31526 5.75211 8.33192 5.76421C8.34858 5.77632 8.3687 5.78273 8.38929 5.78248L9.65488 5.78005C9.74879 5.77986 9.78797 5.90052 9.71191 5.95558L8.6866 6.69752C8.66979 6.70942 8.65727 6.72643 8.65091 6.74602C8.64455 6.76561 8.64468 6.78673 8.65129 6.80623L9.04469 8.00914C9.07379 8.09808 8.97097 8.17273 8.89538 8.11761L7.87291 7.37173C7.8564 7.35944 7.83636 7.3528 7.81577 7.3528C7.79518 7.3528 7.77514 7.35944 7.75863 7.37173L6.73619 8.11761C6.6606 8.17273 6.55779 8.09808 6.58688 8.00914L6.98029 6.80623C6.98688 6.78673 6.987 6.76561 6.98064 6.74602C6.97428 6.72644 6.96177 6.70943 6.94497 6.69752L5.91966 5.95558C5.8436 5.90055 5.88279 5.77989 5.97669 5.78005L7.24229 5.78248C7.26287 5.78272 7.28299 5.7763 7.29965 5.7642C7.3163 5.7521 7.32861 5.73495 7.33475 5.7153L7.72354 4.51089C7.75238 4.42145 7.87916 4.42145 7.90804 4.51089Z"
                  fill="#617A78"
                />
              </svg>
            </span>{" "}
            Specialty
          </p>
          <span className="font-bold text-base sm:text-lg md:text-xl capitalize text-primary">
            {doctor.specialty}
          </span>
        </div>
        {/* Level */}
        {isJob && (
          <div className="flex flex-col gap-2 w-fit px-2 sm:px-3 md:px-4">
            <p className="text-[#617A78] capitalize flex items-center gap-2 text-sm sm:text-base">
              <IoStatsChartOutline className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              Level
            </p>
            <span className="font-bold ml-2 text-base sm:text-lg md:text-xl capitalize text-primary">
              {doctor.level || "mid level"}
            </span>
          </div>
        )}
        {/* License */}
        <div className="flex flex-col gap-2 w-fit px-2 sm:px-3 md:px-4">
          <p className="text-[#617A78] capitalize flex items-center gap-2 text-sm sm:text-base">
            <span className="material-icons text-sm sm:text-base">
              <Reyal
                fill={"#617A78"}
                height="18"
                width="16"
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              />
            </span>{" "}
            License
          </p>
          <span className="font-bold ml-2 text-base sm:text-lg md:text-xl capitalize text-primary">
            {isCourse ? doctor.price : "N/A"}
          </span>
        </div>
        {/* Mode */}
        <div className="flex flex-col gap-2 w-fit px-2 sm:px-3 md:px-4">
          <p className="text-[#617A78] capitalize flex items-center gap-2 text-sm sm:text-base">
            <span className="text-sm sm:text-base">
              {doctor.remotely ? (
                // Remote: Use a laptop icon
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 20 20"
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5"
                >
                  <rect
                    x="3"
                    y="5"
                    width="14"
                    height="8"
                    rx="2"
                    stroke="#617A78"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="1"
                    y="15"
                    width="18"
                    height="2"
                    rx="1"
                    fill="#617A78"
                  />
                </svg>
              ) : (
                // Onsite: Use an office/building icon
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 20 20"
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5"
                >
                  <rect
                    x="4"
                    y="3"
                    width="12"
                    height="14"
                    rx="2"
                    stroke="#617A78"
                    strokeWidth="1.5"
                  />
                  <rect x="7" y="12" width="2" height="2" fill="#617A78" />
                  <rect x="11" y="12" width="2" height="2" fill="#617A78" />
                  <rect x="7" y="8" width="2" height="2" fill="#617A78" />
                  <rect x="11" y="8" width="2" height="2" fill="#617A78" />
                </svg>
              )}
            </span>
            Mode
          </p>
          <span className="font-bold text-base sm:text-lg md:text-xl ml-1 capitalize text-primary">
            {isCourse || isJob
              ? doctor.remotely
                ? "Remotely"
                : "Onsite"
              : "N/A"}
          </span>
        </div>
        {/* Start – End Dates */}
        <div className="flex flex-col gap-2 w-fit px-2 sm:px-3 md:px-4">
          <p className="text-[#617A78] capitalize flex items-center gap-2 whitespace-nowrap text-sm sm:text-base">
            <span className="material-icons text-sm sm:text-base">
              <TbCalendarStats className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </span>{" "}
            Start – End Dates
          </p>
          <span className="font-bold text-base sm:text-lg md:text-xl capitalize text-primary">
            {isCourse
              ? `${doctor.startDate} – ${doctor.endDate}`
              : isJob
              ? `${doctor.fromDate} : ${doctor.toDate}`
              : "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
}
