'use client'
import React from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Thumbnail } from '@/lib/notion'
import { Skeleton } from './ui/skeleton'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
interface MainCardProps {
  item: any
  IconsType: React.ReactNode
}
function Maincard({ item, IconsType }: MainCardProps) {
  const pathname = usePathname()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <>
      {!mounted ? (
        <Card className="container" key={item.id}>
          <CardContent className="pt-6 pb-2">
            <Skeleton className="rounded-md aspect-square md:aspect-video object-cover transition-all hover:scale-105" />
            <Skeleton className="mt-6 border-l-2 pl-6 pr-2 italic max-h-24 md:h-16 overflow-y-hidden text-sm md:text-base "></Skeleton>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="mb-auto mr-0">
              <Skeleton className="h-4 w-12"></Skeleton>
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card className="container" key={item.id}>
          <CardContent className="pt-6 pb-2">
            <Image
              src={Thumbnail(item.properties?.Thumbnail.files[0])}
              alt={'Thumbnail'}
              width={200}
              height={200}
              layout={'responsive'}
              className="rounded-md aspect-square md:aspect-video object-cover transition-all hover:scale-105"
            />
            <blockquote
              className={cn(
                'mt-6 border-l-2 pl-6 pr-2 italic  text-sm md:text-base',
                {
                  'max-h-24 md:h-16 overflow-y-hidden': true,
                }
              )}
            >
              {item.properties?.Bio.rich_text[0] &&
                item.properties?.Bio.rich_text[0].plain_text}
            </blockquote>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="mb-auto mr-0">
              <div className="h-5 flex items-center justify-between gap-1 text-base">
                <div className="h-4 w-auto"> {IconsType}</div>

                <div className="whitespace-nowrap">
                  @ {item.properties?.Author.title[0].plain_text}
                </div>
              </div>
            </Button>
          </CardFooter>
        </Card>
      )}
    </>
  )
}

export default Maincard
