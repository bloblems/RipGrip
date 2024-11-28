import { Text, clx } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  return (
    <footer className="border-t border-ui-border-base dark:border-ui-border-base-dark w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-10">
          <div>
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base dark:text-ui-fg-subtle-dark dark:hover:text-ui-fg-base-dark uppercase"
            >
              Rip Grip
            </LocalizedClientLink>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-subtle dark:text-ui-fg-subtle-dark">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Rip Grip. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  )
}

