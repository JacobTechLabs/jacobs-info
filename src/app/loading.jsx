import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col w-full gap-12 pt-32">
      {/* Hero Skeleton with Shimmer */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="flex-1 relative">
          <Skeleton className="w-full aspect-[4/3] lg:h-[550px] rounded-2xl shimmer" />
        </div>
        <div className="flex-1 flex flex-col gap-6 justify-center">
          <div className="flex gap-2">
            <Skeleton className="h-6 w-24 rounded-full shimmer" />
            <Skeleton className="h-6 w-20 rounded-full shimmer" />
          </div>
          <Skeleton className="h-10 lg:h-14 w-full shimmer" />
          <Skeleton className="h-10 lg:h-14 w-4/5 shimmer" />
          <div className="flex gap-3 mt-2">
            <Skeleton className="h-4 w-32 shimmer" />
            <Skeleton className="h-4 w-1 rounded-full" />
            <Skeleton className="h-4 w-24 shimmer" />
          </div>
          <Skeleton className="h-5 w-full mt-4 shimmer" />
          <Skeleton className="h-5 w-full shimmer" />
          <Skeleton className="h-5 w-2/3 shimmer" />
          <div className="flex gap-3 mt-4">
            <Skeleton className="h-12 w-12 rounded-full shimmer" />
            <Skeleton className="h-12 w-32 rounded-full shimmer" />
          </div>
        </div>
      </div>

      {/* Categories Skeleton */}
      <div className="py-12">
        <Skeleton className="h-8 w-48 mb-8 shimmer" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-32 rounded-2xl shimmer" />
          ))}
        </div>
      </div>
      
      {/* Content Skeleton */}
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-[5] flex flex-col gap-12">
          <Skeleton className="h-8 w-48 mb-4 shimmer" />
          <div className="flex flex-col gap-16">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex flex-col lg:flex-row gap-8">
                <Skeleton className="flex-1 aspect-[4/3] rounded-2xl shimmer" />
                <div className="flex-1 flex flex-col gap-4 py-4">
                  <div className="flex gap-2">
                    <Skeleton className="h-4 w-24 shimmer" />
                    <Skeleton className="h-4 w-1 rounded-full" />
                    <Skeleton className="h-4 w-20 shimmer" />
                  </div>
                  <Skeleton className="h-8 w-full shimmer" />
                  <Skeleton className="h-8 w-3/4 shimmer" />
                  <Skeleton className="h-4 w-full mt-2 shimmer" />
                  <Skeleton className="h-4 w-full shimmer" />
                  <Skeleton className="h-4 w-1/2 shimmer" />
                  <Skeleton className="h-10 w-28 mt-4 rounded-full shimmer" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-[2] hidden lg:block">
          <div className="sticky top-32 space-y-8">
            <Skeleton className="h-40 w-full rounded-xl shimmer" />
            <Skeleton className="h-32 w-full rounded-xl shimmer" />
            <Skeleton className="h-48 w-full rounded-xl shimmer" />
          </div>
        </div>
      </div>
    </div>
  );
}
