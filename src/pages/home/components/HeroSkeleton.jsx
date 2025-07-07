// Loading component for hero main content
export const HeroMainContentLoader = () => (
  <div className="text-center max-w-4xl mx-auto space-y-6">
    {/* Title skeleton */}
    <div className="w-48 h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-md animate-pulse skeleton-shimmer mx-auto" />
    
    {/* Main heading skeleton */}
    <div className="space-y-3 max-w-2xl mx-auto">
      <div className="w-full h-16 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-md animate-pulse skeleton-shimmer" />
      <div className="w-3/4 h-16 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-md animate-pulse skeleton-shimmer mx-auto" />
    </div>
    
    {/* Description skeleton */}
    <div className="space-y-2 max-w-2xl mx-auto">
      <div className="w-full h-5 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-md animate-pulse skeleton-shimmer" />
      <div className="w-5/6 h-5 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-md animate-pulse skeleton-shimmer mx-auto" />
    </div>
    
    {/* Button skeleton */}
    <div className="w-48 h-12 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg animate-pulse skeleton-shimmer mx-auto" />
  </div>
);

// Loading component for hero background decoration
export const HeroBackgroundLoader = () => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 animate-pulse skeleton-shimmer" />
    <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-full blur-3xl animate-pulse skeleton-shimmer" />
  </div>
);

// Loading component for hero corner cards
export const HeroCornerCardsLoader = () => (
  <div className="absolute container inset-0 pointer-events-none flex items-center justify-center">
    {/* Top left card skeleton */}
    <div className="absolute top-16 left-16 w-32 h-24 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-tl-3xl animate-pulse skeleton-shimmer transform skew-y-[-20deg]" />
    
    {/* Top right card skeleton */}
    <div className="absolute top-16 right-16 w-32 h-24 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-tr-3xl animate-pulse skeleton-shimmer transform skew-y-[20deg]" />
    
    {/* Bottom left card skeleton */}
    <div className="absolute -bottom-16 left-16 w-32 h-24 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-bl-3xl animate-pulse skeleton-shimmer transform skew-y-[20deg]" />
    
    {/* Bottom right card skeleton */}
    <div className="absolute -bottom-16 right-16 w-32 h-24 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-br-3xl animate-pulse skeleton-shimmer transform skew-y-[-20deg]" />
  </div>
);

// Loading component for hero scroll indicator
export const HeroScrollIndicatorLoader = () => (
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
    <div className="w-6 h-10 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-full animate-pulse skeleton-shimmer" />
  </div>
);

// Loading component for counter statistics
export const CounterSkeleton = () => (
  <div className="relative mb-50 mx-auto px-4 sm:px-6 lg:px-8 my-8">
    {/* Decorative circle skeleton */}
    <div className="absolute left-[-100px] top-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-full animate-pulse skeleton-shimmer" />
    
    <div className="container relative z-10">
      <div
        className="w-full bg-white rounded-2xl flex flex-col md:flex-row justify-between items-center py-8 px-4 md:px-12 gap-8"
        style={{ boxShadow: "0px 0px 35px 0px #076A6012" }}
      >
        {/* Three counter items skeleton */}
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex-1 flex flex-col items-center text-center">
            <div className="flex items-center justify-center mb-2 gap-3">
              {/* Number circle skeleton */}
              <div className="w-30 h-30 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-full animate-pulse skeleton-shimmer" />
              
              <div className="flex flex-col gap-2">
                {/* Title skeleton */}
                <div className="w-32 h-6 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-md animate-pulse skeleton-shimmer" />
                {/* Description skeleton */}
                <div className="w-40 h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-md animate-pulse skeleton-shimmer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
