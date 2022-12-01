import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Home from "@/components/Home"

const PageHome = () => {
  return (
    <MainLayout>
      <Helmet title="Mint Cardano Tokens & Explore Assets" />
      <Home />
    </MainLayout>
  )
}

export default PageHome
