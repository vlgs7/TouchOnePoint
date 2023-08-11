import { getData } from "@/lib/notion";
import { NavItem } from "@/types/nav";

const getItems =  async () => {
    const [BaseInfo, data] = await getData();
    const mainNavs = data.results.map((item: any) => ({
        title: item.properties?.Author.title[0].plain_text ,
        href: `/block/${item.id}`
    }));


    return mainNavs;
}
 
export default getItems;