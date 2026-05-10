import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col w-full animate-pulse gap-12 mt-16">
      {/* Hero Skeleton */}
      <div className="flex flex-col lg:flex-row gap-12">
        <Skeleton className="flex-1 h-[400px] lg:h-[550px] rounded-2xl" />
        <div className="flex-1 flex flex-col gap-6 justify-center">
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-12 w-1/2" />
          <Skeleton className="h-4 w-full mt-4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-12 w-32 rounded-full mt-6" />
        </div>
      </div>
      
      {/* Content Skeleton */}
      <div className="flex flex-col lg:flex-row gap-12 mt-12">
        <div className="flex-[5] flex flex-col gap-12">
          <Skeleton className="h-[300px] w-full rounded-2xl" />
          <Skeleton className="h-[300px] w-full rounded-2xl" />
        </div>
        <div className="flex-[2] hidden lg:block">
          <Skeleton className="h-[600px] w-full rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
