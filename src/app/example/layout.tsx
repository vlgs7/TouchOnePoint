import { SiteFooter } from '@/components/site-footer'

export const revalidate = 60

export default function Layout(props: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <>
      {props.children}
      {props.modal}
      <SiteFooter />
    </>
  )
}
