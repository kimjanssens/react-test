import { PageLayoutItems } from "@/types/page-components";
import dynamic from "next/dynamic";

export default function PageLayout({items}:{items:PageLayoutItems}) {
    return <div>
        {
            items.map(item => {
                const Component = dynamic(() => import(`@/components/page-components/${item.type}`));

                return <Component key={item.id} {...item} />;
            })
        }
    </div>;
};
