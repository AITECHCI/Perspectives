"use client";
import { SiteBanner } from "@/components/site-banner";
import SiteHeader from "@/components/navigation/site-header";
import Footer from "@/components/footer";
import Faqs from "@/components/Faqs/faqs";
import { useEffect, useState } from "react";
import Statistiques from "@/components/website/Statistiques/statistiques";

interface WebSiteLayoutProps {
  children: React.ReactNode;
}

export default function WebSiteLayout({ children }: WebSiteLayoutProps) {


  return (
    <>
      <SiteBanner />
      <SiteHeader />
      <main className="flex-1">{children}</main>
       
      <Footer />
    </>
  );
}