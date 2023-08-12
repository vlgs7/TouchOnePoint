import { Icons, getIcon } from '@/components/icons'
import Maincard from '@/components/main-card'
import Modal from '@/components/modals'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Thumbnail, getData, notion } from '@/lib/notion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
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
  const IconsType = Icons[(item?.properties as any).Tags.select.name]
  return (
    <Modal>
      <Card className="container" key={item.id}>
        <CardContent className="pt-6 pb-2">
          <Image
            src={Thumbnail((item?.properties as any).Thumbnail.files[0])}
            alt={'Thumbnail'}
            width={200}
            height={200}
            layout={'responsive'}
            className="rounded-md aspect-square md:aspect-video object-cover transition-all hover:scale-105"
          />
          <blockquote className="mt-6 border-l-2 pl-6 pr-2 italic max-h-24 md:h-16 overflow-y-hidden text-sm md:text-base ">
            {(item?.properties as any).Bio.rich_text[0] &&
              (item?.properties as any).Bio.rich_text[0].plain_text}
          </blockquote>
        </CardContent>
        <CardFooter>
          <Button variant="link" className="mb-auto mr-0">
            <div className="h-4 flex items-center justify-between gap-1 text-base">
              <IconsType className="h-4 w-auto" />
              <div className="whitespace-nowrap">
                @ {(item?.properties as any).Author.title[0].plain_text}
              </div>
            </div>
          </Button>
        </CardFooter>
      </Card>
    </Modal>
  )
}
