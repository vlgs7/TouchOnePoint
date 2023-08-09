import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@radix-ui/react-icons'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'
import { Separator } from '@/components/ui/separator'
import { buttonVariants } from '@/components/ui/button'

export default function IndexPage() {
  return (
    <div className="container relative">
      <PageHeader className="pb-8">
        <Link
          href="/"
          className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
        >
          🚀 <Separator className="mx-2 h-4" orientation="vertical" />{' '}
          <span className="sm:hidden">
            Your gateway to personal connections.
          </span>
          <span className="hidden sm:inline">
            Introducing TouchOnePoint, your gateway to personal connections.
          </span>
          <ArrowRightIcon className="ml-1 h-4 w-4" />
        </Link>
        <PageHeaderHeading>Connect Your Digital World.</PageHeaderHeading>
        <PageHeaderDescription>
          With TouchOnePoint, bring your personal links, profiles, and digital
          presence into one cohesive platform. Simple to use. Flexible to
          customize. All about you.
        </PageHeaderDescription>
        <div className="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
          <Link href="/docs" className={cn(buttonVariants())}>
            Get Started
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </div>
      </PageHeader>
    </div>
  )
}
