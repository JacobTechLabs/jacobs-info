import Link from "next/link";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className="flex flex-col w-full">
      <Featured />
      <CategoryList />
      <div className="flex flex-col lg:flex-row gap-12 mt-8">
        <CardList page={page}/>
        <Menu />
      </div>
    </div>
  );
}
