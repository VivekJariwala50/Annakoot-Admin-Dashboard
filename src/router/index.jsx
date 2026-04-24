import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { AuthenticationLayout } from "../layouts/AuthenticationLayout";

const AKComingSoon = lazy(() => import("../pages/AKAuthentication/AKComingSoon"));
const AKButtons = lazy(() => import("../pages/AKButtons"));
const AKAcademyDashboard = lazy(() => import("../pages/AKDashboard/AKAcademyDashboard"));
const AKECommerceDashboard = lazy(() => import("../pages/AKDashboard/AKECommerceDashboard"));
const AKAnalyticsDashboard = lazy(() => import("../pages/AKDashboard/AKAnalyticsDashboard"));
const AKNFTDashboard = lazy(() => import("../pages/AKDashboard/AKNFTDashboard"));
const AKCheckboxAndRadio = lazy(() => import("../pages/AKFormControls/AKCheckboxAndRadio"));
const AKInputControls = lazy(() => import("../pages/AKFormControls/AKInputControls"));
const AKTablesPage = lazy(() => import("../pages/AKTablesPage"));
const AKTagPillsPage = lazy(() => import("../pages/AKTagPillsPage"));
const AKTabPage = lazy(() => import("../pages/AKTabPage"));
const AKBasicCardPage = lazy(() => import("../pages/AKBasicCardPage"));
const AKListPage = lazy(() => import("../pages/AKListPage"));
const AKDropdownPage = lazy(() => import("../pages/AKDropdownPage"));
const AKModalPage = lazy(() => import("../pages/AKModalPage"));
const AKOffCanvasPage = lazy(() => import("../pages/AKOffCanvasPage"));
const AKChartPage = lazy(() => import("../pages/AKChartPage"));
const AKSelectPage = lazy(() => import("../pages/AKSelectPage"));
const AKAvatarPage = lazy(() => import("../pages/AKAvatarPage"));
const AKCarouselPage = lazy(() => import("../pages/AKCarouselPage"));
const AKProgressPage = lazy(() => import("../pages/AKProgressPage"));
const AKTypographyPage = lazy(() => import("../pages/AKTypographyPage"));
const AKAlertPage = lazy(() => import("../pages/AKAlertPage"));
const AKTimelinePage = lazy(() => import("../pages/AKTimelinePage"));
const AKCalendarPage = lazy(() => import("../pages/AKCalendarPage"));
const AKDatePickerPage = lazy(() => import("../pages/AKDatePickerPage"));
const AKColorPickerPage = lazy(() => import("../pages/AKColorPickerPage"));
const AKSwitchPage = lazy(() => import("../pages/AKSwitchPage"));
const AKCounterPage = lazy(() => import("../pages/AKCounterPage"));
const AKClipBoardPage = lazy(() => import("../pages/AKClipBoardPage"));
const AKTextEditorPage = lazy(() => import("../pages/AKTextEditorPage"));
const AKLoaderPage = lazy(() => import("../pages/AKLoaderPage"));
const AKAccordionPage = lazy(() => import("../pages/AKAccordionPage"));
const AKTooltipPage = lazy(() => import("../pages/AKTooltipPage"));
const AKPopoverPage = lazy(() => import("../pages/AKPopoverPage"));
const AKBreadcrumbPage = lazy(() => import("../pages/AKBreadcrumbPage"));
const AKPaginationPage = lazy(() => import("../pages/AKPaginationPage"));
const AKRatingPage = lazy(() => import("../pages/AKRatingPage"));
const AKToastPage = lazy(() => import("../pages/AKToastPage"));
const AKBadgePage = lazy(() => import("../pages/AKBadgePage"));
const AKError = lazy(() => import("../pages/AKError"));
const AKUnderMaintenance = lazy(() => import("../pages/AKAuthentication/AKUnderMaintenance"));
const AKNotFound = lazy(() => import("../pages/AKAuthentication/AKNotFound"));
const AKMapPage = lazy(() => import("../pages/AKMapPage"));
const AKChat = lazy(() => import("../pages/AKChat"));
const AKForgotPassword = lazy(() => import("../pages/AKAuthentication/AKForgotPassword"));
const AKOTP = lazy(() => import("../pages/AKAuthentication/AKOTP"));
const AKResetPassword = lazy(() => import("../pages/AKAuthentication/AKResetPassword"));
const AKSignIn = lazy(() => import("../pages/AKAuthentication/AkSignIn"));
const AKSignUp = lazy(() => import("../pages/AKAuthentication/AkSignUp"));
const AKVerifyEmail = lazy(() => import("../pages/AKAuthentication/AKVerifyEmail"));
const AKMyProfile = lazy(() => import("../pages/AKMyProfile"));
const AKAccountPage = lazy(() => import("../pages/AKAccountPage"));
const AKAdvancedTablePage = lazy(() => import("../pages/AKAdvancedTablePage"));
const AKIconsPage = lazy(() => import("../pages/AKIconsPage"));
const AKFlagIconPage = lazy(() => import("../pages/AKFlagIconPage"));
const AKSecurity = lazy(() => import("../pages/AKSecurity"));
const AKBillingPlans = lazy(() => import("../pages/AKBillingPlans"));
const AKNotifications = lazy(() => import("../pages/AKNotifications"));
const AKRangeSliderPage = lazy(() => import("../pages/AKRangeSliderPage"));
const AKDropzonePage = lazy(() => import("../pages/AKDropzonePage"));
const AKTreeViewPage = lazy(() => import("../pages/AKTreeViewPage"));
const AKSweetAlertPage = lazy(() => import("../pages/AKSweetAlertPage"));
const AKFormWizardPage = lazy(() => import("../pages/AKFormWizardPage"));
const AKCreativeCardPage = lazy(() => import("../pages/AKCreativeCardPage"));
const AKScrollablePage = lazy(() => import("../pages/AKScrollablePage"));
const AKRibbonPage = lazy(() => import("../pages/AKRibbonPage"));
const AKSwiperPage = lazy(() => import("../pages/AKSwiperPage"));
const AKImageCropperPage = lazy(() => import("../pages/AKImageCropperPage"));
const AKUserTimeline = lazy(() => import("../pages/AKUserTimeline"));
const AKContacts = lazy(() => import("../pages/AKContacts"));
const AKFaq = lazy(() => import("../pages/AKFaq"));
export const router = createBrowserRouter([
  {
    element: <DashboardLayout />,
    children: [
      {
        key: 0,
        path: "*",
        element: <AKNotFound />,
      },
      {
        key: 1,
        path: "/dashboard/analytics",
        element: <AKAnalyticsDashboard />,
      },
      {
        key: 2,
        path: "/dashboard/academy",
        element: <AKAcademyDashboard />,
      },
      {
        key: 3,
        path: "/dashboard/crm",
        element: <AKComingSoon />,
      },
      {
        key: 4,
        path: "/dashboard/e-commerce",
        element: <AKECommerceDashboard />,
      },
      {
        key: 5,
        path: "/dashboard/logistics",
        element: <AKComingSoon />,
      },
      {
        key: 7,
        path: "/dashboard/input-controls",
        element: <AKInputControls />,
      },
      {
        key: 8,
        path: "/dashboard/checkbox-radio",
        element: <AKCheckboxAndRadio />,
      },
      {
        key: 9,
        path: "/dashboard/buttons",
        element: <AKButtons />,
      },
      {
        key: 10,
        path: "/dashboard/basic-table",
        element: <AKTablesPage />,
      },
      {
        key: 11,
        path: "/dashboard/tag-pills",
        element: <AKTagPillsPage />,
      },
      {
        key: 12,
        path: "/dashboard/tab",
        element: <AKTabPage />,
      },
      {
        key: 13,
        path: "/dashboard/card",
        element: <AKBasicCardPage />,
      },
      {
        key: 14,
        path: "/dashboard/list",
        element: <AKListPage />,
      },
      {
        key: 15,
        path: "/dashboard/dropdown",
        element: <AKDropdownPage />,
      },
      {
        key: 16,
        path: "/dashboard/modal",
        element: <AKModalPage />,
      },
      {
        key: 17,
        path: "/dashboard/offcanvas",
        element: <AKOffCanvasPage />,
      },
      {
        key: 18,
        path: "/dashboard/chart",
        element: <AKChartPage />,
      },
      {
        key: 19,
        path: "/dashboard/select",
        element: <AKSelectPage />,
      },
      {
        key: 20,
        path: "/dashboard/avatar",
        element: <AKAvatarPage />,
      },
      {
        key: 21,
        path: "/dashboard/carousel",
        element: <AKCarouselPage />,
      },
      {
        key: 22,
        path: "/dashboard/progress",
        element: <AKProgressPage />,
      },
      {
        key: 23,
        path: "/dashboard/typography",
        element: <AKTypographyPage />,
      },
      {
        key: 24,
        path: "/dashboard/alert",
        element: <AKAlertPage />,
      },
      {
        key: 26,
        path: "/dashboard/timeline",
        element: <AKTimelinePage />,
      },
      {
        key: 27,
        path: "/dashboard/calendar",
        element: <AKCalendarPage />,
      },
      {
        key: 28,
        path: "/dashboard/date-picker",
        element: <AKDatePickerPage />,
      },
      {
        key: 29,
        path: "/dashboard/color-picker",
        element: <AKColorPickerPage />,
      },
      {
        key: 30,
        path: "/dashboard/switch",
        element: <AKSwitchPage />,
      },
      {
        key: 31,
        path: "/dashboard/counter",
        element: <AKCounterPage />,
      },
      {
        key: 32,
        path: "/dashboard/clip-board",
        element: <AKClipBoardPage />,
      },
      {
        key: 33,
        path: "/dashboard/text-editor",
        element: <AKTextEditorPage />,
      },
      {
        key: 34,
        path: "/dashboard/loader",
        element: <AKLoaderPage />,
      },
      {
        key: 35,
        path: "/dashboard/accordion",
        element: <AKAccordionPage />,
      },
      {
        key: 36,
        path: "/dashboard/tooltip",
        element: <AKTooltipPage />,
      },
      {
        key: 37,
        path: "/dashboard/popover",
        element: <AKPopoverPage />,
      },
      {
        key: 38,
        path: "/dashboard/nft",
        element: <AKNFTDashboard />,
      },
      {
        key: 39,
        path: "/dashboard/breadcrumb",
        element: <AKBreadcrumbPage />,
      },
      {
        key: 40,
        path: "/dashboard/pagination",
        element: <AKPaginationPage />,
      },
      {
        key: 41,
        path: "/dashboard/rating",
        element: <AKRatingPage />,
      },
      {
        key: 42,
        path: "/dashboard/toast",
        element: <AKToastPage />,
      },
      {
        key: 43,
        path: "/dashboard/badge",
        element: <AKBadgePage />,
      },
      {
        key: 44,
        path: "/dashboard/coming-soon",
        element: <AKComingSoon />,
      },
      {
        key: 45,
        path: "/dashboard/error",
        element: <AKError />,
      },
      {
        key: 46,
        path: "/dashboard/under-maintenance",
        element: <AKUnderMaintenance />,
      },
      {
        key: 47,
        path: "/dashboard/not-found",
        element: <AKNotFound />,
      },
      {
        key: 48,
        path: "/dashboard/user-profile",
        element: <AKComingSoon />,
      },
      {
        key: 49,
        path: "/dashboard/map",
        element: <AKMapPage />,
      },
      {
        key: 50,
        path: "/dashboard/chat",
        element: <AKChat />,
      },
      {
        key: 51,
        path: "/",
        element: <AKAnalyticsDashboard />,
      },
      {
        key: 52,
        path: "/dashboard/my-profile",
        element: <AKMyProfile />,
      },
      {
        key: 53,
        path: "/dashboard/account",
        element: <AKAccountPage />,
      },
      {
        key: 54,
        path: "/dashboard/advanced-table",
        element: <AKAdvancedTablePage />,
      },
      {
        key: 55,
        path: "/dashboard/icons",
        element: <AKIconsPage />,
      },
      {
        key: 56,
        path: "/dashboard/flag-icons",
        element: <AKFlagIconPage />,
      },
      {
        key: 57,
        path: "/dashboard/security",
        element: <AKSecurity />,
      },
      {
        key: 58,
        path: "/dashboard/billing-plans",
        element: <AKBillingPlans />,
      },
      {
        key: 59,
        path: "/dashboard/notifications",
        element: <AKNotifications />,
      },
      {
        key: 60,
        path: "/dashboard/range-slider",
        element: <AKRangeSliderPage />,
      },
      {
        key: 61,
        path: "/dashboard/dropzone",
        element: <AKDropzonePage />,
      },
      {
        key: 62,
        path: "/dashboard/tree-view",
        element: <AKTreeViewPage />,
      },
      {
        key: 63,
        path: "/dashboard/sweet-alert",
        element: <AKSweetAlertPage />,
      },
      {
        key: 64,
        path: "/dashboard/form-wizard",
        element: <AKFormWizardPage />,
      },
      {
        key: 65,
        path: "/dashboard/creative-card",
        element: <AKCreativeCardPage />,
      },
      {
        key: 66,
        path: "/dashboard/scrollable",
        element: <AKScrollablePage />,
      },
      {
        key: 67,
        path: "/dashboard/ribbon",
        element: <AKRibbonPage />,
      },
      {
        key: 68,
        path: "/dashboard/swiper",
        element: <AKSwiperPage />,
      },
      {
        key: 69,
        path: "/dashboard/google-charts",
        element: <AKComingSoon />,
      },
      {
        key: 70,
        path: "/dashboard/image-cropper",
        element: <AKImageCropperPage />,
      },
      {
        key: 71,
        path: "/dashboard/user-timeline",
        element: <AKUserTimeline />,
      },
      {
        key: 72,
        path: "/dashboard/contacts",
        element: <AKContacts />,
      },
      {
        key: 73,
        path: "/dashboard/faq",
        element: <AKFaq />,
      },
    ],
  },
  {
    element: <AuthenticationLayout />,
    children: [
      { key: 1, path: "/authentication/login", element: <AKSignIn /> },
      { key: 2, path: "/authentication/register", element: <AKSignUp /> },
      { key: 3, path: "/authentication/otp", element: <AKOTP /> },
      {
        key: 4,
        path: "/authentication/reset-password",
        element: <AKResetPassword />,
      },
      {
        key: 5,
        path: "/authentication/verify-email",
        element: <AKVerifyEmail />,
      },
      {
        key: 6,
        path: "/authentication/forgot-password",
        element: <AKForgotPassword />,
      },
      {
        key: 7,
        path: "/authentication/forgot-email",
        element: <AKComingSoon />,
      },
    ],
  },
]);
