import Item from "@/components/Item";
import List from "@/components/List";

export default function componentWithChildren() {
    return (
        <div>
            <List>
                <Item content='Item #11' />
                <Item content='Item #12' />
                <Item content='Item #13' />
                <Item content='Item #14' />
                <Item content='Item #15' />
                <Item content='Item #16' />
                <Item content='Item #17' />
            </List>
        </div>
    )
}