/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { PageIcon, Thumbnail, getData, notion } from '@/lib/notion'
import Balancer from 'react-wrap-balancer'

import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Icons } from '@/components/icons'
import Maincard from '@/components/main-card'
import Link from 'next/link'

async function page() {
  const [BaseInfo, data] = await getData()

  return (
    <>
      <div className="container flex items-center justify-center flex-col p-6 space-y-2">
        <Avatar className="w-24 h-24">
          <AvatarImage src={PageIcon(BaseInfo.icon)} />
          <AvatarFallback className="text-6xl whitespace-pre">
            {BaseInfo.icon && BaseInfo.icon.type == 'emoji'
              ? BaseInfo.icon.emoji
              : BaseInfo.title[0].plain_text
                  ?.split(' ')
                  .map((word: string) => word.charAt(0).toUpperCase())
                  .join()}
          </AvatarFallback>
        </Avatar>
        <div className="nickname scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          {BaseInfo.title[0].plain_text}
        </div>

        <div className="pl-6 md:text-xl text-muted-foreground mx-auto bg-background">
          <Balancer className="whitespace-pre-line">
            {BaseInfo.description
              .map((d: { plain_text: any }) => d.plain_text)
              .join(' ')}
          </Balancer>
        </div>
      </div>
      <Separator />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 container md:items-start my-8 ">
        {data.results.map((item: any) => {
          const IconsType = Icons[item.properties.Tags.select.name]
          return (
            <Link href={`/block/${item.id}`} key={item.id}>
              <Maincard
                IconsType={<IconsType className="h-4 w-auto" />}
                item={item}
                key={item.id}
              />
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default page
