import { Skeleton } from "@/components/ui/skeleton";

export default function PostLoading() {
  return (
    <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-32 max-w-[1400px] pt-32 pb-20">
      {/* Breadcrumb Skeleton */}
      <Skeleton className="w-32 h-5 mb-8" />

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        {/* Category */}
        <Skeleton className="w-24 h-6 mx-auto mb-6 rounded-full" />
        
        {/* Title */}
        <Skeleton className="w-full h-16 md:h-20 mx-auto mb-8" />
        <Skeleton className="w-3/4 h-16 md:h-20 mx-auto mb-8" />

        {/* Meta Info */}
        <div className="flex items-center justify-center gap-4">
          <Skeleton className="w-32 h-5" />
          <Skeleton className="w-1 h-1 rounded-full" />
          <Skeleton className="w-32 h-5" />
          <Skeleton className="w-1 h-1 rounded-full" />
          <Skeleton className="w-32 h-5" />
        </div>
      </div>

      {/* Featured Image */}
      <Skeleton className="w-full aspect-[21/9] rounded-3xl mb-16" />

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Article Body */}
        <div className="flex-[5] space-y-4">
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-5/6 h-6" />
          <Skeleton className="w-full h-6 mt-8" />
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-4/5 h-6" />
          <Skeleton className="w-full h-6 mt-8" />
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-3/4 h-6" />
        </div>

        {/* Sidebar */}
        <div className="flex-[2] space-y-6">
          <Skeleton className="w-full h-40 rounded-xl" />
          <Skeleton className="w-full h-32 rounded-xl" />
          <Skeleton className="w-full h-48 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
