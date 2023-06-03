import LargeCard from "@/components/cards/LargeCard";
import SmallCard from "@/components/cards/SmallCard";

export default function page() {
  return (
    <div>
    <LargeCard />
    <div className="flex flex-col w-full lg:flex-row">
      <SmallCard />
      <SmallCard />
      <SmallCard />
    </div>
    <LargeCard />
    <div className="flex flex-col w-full lg:flex-row">
      <SmallCard />
      <SmallCard />
      <SmallCard />
    </div>
  </div>
  )
}
