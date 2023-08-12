import { Icons } from '@/components/icons'
import Maincard from '@/components/main-card'
import { getData } from '@/lib/notion'

export async function generateStaticParams() {
  const [, data] = await getData()
  return data.results.map((item: any) => ({
    slug: item.id,
  }))
}
export default async function PhotoModal({
  params: { id: blockId },
}: {
  params: { id: string }
}) {
  const [BaseInfo, data] = await getData()
  const item = data.results.find((item: any) => item.id == blockId)
  const IconsType = Icons[item.properties?.Tags.select.name]
  return (
    <div className="container p-6 h-full">
      <Maincard item={item} IconsType={<IconsType className="h-4 w-auto" />} />
    </div>
  )
}
