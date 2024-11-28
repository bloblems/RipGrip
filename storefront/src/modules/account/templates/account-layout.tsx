"use client"

import React from "react"
import { Container, Button, Heading, Text } from "@medusajs/ui"

import AccountNav from "../components/account-nav"
import { HttpTypes } from "@medusajs/types"
import Link from "next/link"

interface AccountLayoutProps {
  customer: HttpTypes.StoreCustomer | null
  children: React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  customer,
  children,
}) => {
  return (
    <Container className="bg-white dark:bg-dark-bg flex-1 small:py-12" data-testid="account-page">
      <div className="flex-1 content-container h-full max-w-5xl mx-auto flex flex-col">
        <div className="grid grid-cols-1 small:grid-cols-[240px_1fr] py-12">
          <div>{customer && <AccountNav customer={customer} />}</div>
          <div className="flex-1">{children}</div>
        </div>
        <div className="flex flex-col small:flex-row items-end justify-between small:border-t border-ui-border-base dark:border-ui-border-base-dark py-12 gap-8">
          <div className="space-y-2">
            <Heading level="h3" className="text-ui-fg-base dark:text-ui-fg-base-dark">Got questions?</Heading>
            <Text className="text-ui-fg-subtle dark:text-ui-fg-subtle-dark">
              You can find frequently asked questions and answers on our
              customer service page.
            </Text>
          </div>
          <div>
            <Link href="/customer-service" passHref legacyBehavior>
              <Button 
                variant="secondary" 
                size="large"
                className="text-ui-fg-subtle hover:text-ui-fg-base dark:text-ui-fg-subtle-dark dark:hover:text-ui-fg-base-dark"
              >
                Customer Service
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default AccountLayout

