import { Icons } from '@/components/icons'
import Maincard from '@/components/main-card'
import { SiteFooter } from '@/components/site-footer'
import { getData } from '@/lib/notion'
import {
  DatabaseObjectResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints'
type ResultType = QueryDatabaseResponse['results'][number]

export const revalidate = 60

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
  const [, data] = await getData()
  const item = data.results.find(
    (item: ResultType) => item.id == blockId
  ) as DatabaseObjectResponse
  const IconsType = Icons[(item?.properties?.Tags as any).select.name]
  return (
    <>
      <div className="container p-6 h-full">
        <Maincard
          item={item}
          IconsType={<IconsType className="h-4 w-auto" />}
        />
      </div>
      <SiteFooter />
    </>
  )
}
