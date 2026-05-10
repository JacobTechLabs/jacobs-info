import React from "react";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className="flex-[2] mt-12 mb-12 hidden lg:block sticky top-28 h-max">
      <h2 className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-2">{"What's hot"}</h2>
      <h1 className="text-2xl font-bold tracking-tight mb-8">Most Popular</h1>
      <MenuPosts withImage={false} />
      
      <h2 className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-2 mt-12">Discover by topic</h2>
      <h1 className="text-2xl font-bold tracking-tight mb-8">Categories</h1>
      <MenuCategories />
      
      <h2 className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-2 mt-12">Chosen by the editor</h2>
      <h1 className="text-2xl font-bold tracking-tight mb-8">Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
