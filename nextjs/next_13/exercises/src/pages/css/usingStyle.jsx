import Style from "@/components/Style";

export default function usingStyle() {
    return (

        <div>
            <Style number={2} color='#ddd' />
            <Style number={-12} color='#000' center />
        </div>
    )
}