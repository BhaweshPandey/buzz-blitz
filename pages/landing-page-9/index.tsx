/* eslint-disable linebreak-style */
import { Box } from '@mantine/core';
import dynamic from 'next/dynamic';
import classes from './temp9.module.css';
import BannerAboveTheFold from '@/components/modules/Landing-page-9/BannerAboveTheFold/BannerAboveTheFold';
import WorkCardSkeleton from '@/components/modules/Skeletons/WorkCard/WorkCardSkeleton';
import CookiesAffix from '@/components/modules/Landing-page-9/CookiesAffix/CookiesAffix';

const DynamicWorkCard = dynamic(() => import('@/components/modules/Landing-page-9/workings/WorkCard'), {

  loading: () => <WorkCardSkeleton />, ssr: false,
});
const DynamicTestimonials = dynamic(() => import('@/components/modules/Landing-page-9/testimonials/Testimonials'), {

  loading: () => <WorkCardSkeleton />, ssr: false,
});
const DynamicTeams = dynamic(() => import('@/components/modules/Landing-page-9/teams/Teams'), {
  loading: () => <WorkCardSkeleton />, ssr: false,
});
const DynamicPricing = dynamic(() => import('@/components/modules/Landing-page-9/pricing/Pricing'), {
  loading: () => <WorkCardSkeleton />, ssr: false,
});
const DynamicBody = dynamic(() => import('@/components/modules/Landing-page-9/body/Body'), {
  loading: () => <WorkCardSkeleton />, ssr: false,
});
const DynamicOpensourceCommunity = dynamic(() => import('@/components/modules/Landing-page-9/open-source-community-card/OpenSourceCommunityCard'), {
  loading: () => <WorkCardSkeleton />, ssr: false,
});
const DynamicNewsLetter = dynamic(() => import('@/components/modules/Landing-page-9/newsletter/NewsLetter'), {
  loading: () => <WorkCardSkeleton />, ssr: false,
});
const DynamicFooter = dynamic(() => import('@/components/modules/Landing-page-9/footer/Footer'), {
  loading: () => <WorkCardSkeleton />, ssr: false,
});

const LandingPage9 = () => (
    <Box className={classes.bodyContainer} mx="auto">
      <BannerAboveTheFold />
      <DynamicWorkCard />
      <DynamicTestimonials />
      <DynamicTeams />
      <DynamicPricing />
      <DynamicBody />
      <DynamicOpensourceCommunity />
      <DynamicNewsLetter />
      <DynamicFooter />
      <CookiesAffix />
    </Box>
  );

export default LandingPage9;
