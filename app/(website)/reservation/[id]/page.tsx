import HeaderPage from "./components/header-page";
import Content from "./components/Content";
import {  espaces } from "@/config/data";

export default async function ItemSpace({
  params,
}: {
  params: { id: string };
}) {
  // Nouvelle logique robuste pour tous les cas, typage any explicite
  const item: any = espaces
    .flatMap((g) =>
      g.items
        ? g.items.map((i) => ({
            ...i,
            options: i.options ?? [],
            tarifs: i.tarifs ?? [],
            _group: {
              images: g.images,
              description: g.description,
              groupOptions: g.options ?? { title: '', items: [] },
              groupItems: g.items ?? [],
            },
          }))
        : [
            {
              ...g,
              options: g.options ?? [],
              tarifs: g.tarifs ?? [],
              _group: {
                images: g.images,
                description: g.description,
                groupOptions: g.options ?? { title: '', items: [] },
                groupItems: g.items ?? [],
              },
            },
          ]
    )
    .find((i: any) => i.id === params.id);

  const group: any = item?._group || null;

  return (
    <div>
      <HeaderPage group={group} space={item} />
      <Content group={group} space={item} />
    </div>
  );
}
