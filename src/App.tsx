import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import MobileApp from "./pages/services/MobileApp";
import WebDevelopment from "./pages/services/WebDevelopment";
import NoCode from "./pages/services/NoCode";
import DigitalMarketingService from "./pages/services/DigitalMarketing";
import DigitalMarketing from "./pages/DigitalMarketing";
import AIOverview from "./pages/digital-marketing/ai/AIServicesOverview";
import AIConsulting from "./pages/digital-marketing/ai/AIConsulting";
import AIDigitalMarketing from "./pages/digital-marketing/ai/AIDigitalMarketing";
import AIChatGPT from "./pages/digital-marketing/ai/ChatGPTOptimization";
import AIAgentDevelopment from "./pages/digital-marketing/ai/AIAgentDevelopment";
import AIGPTIntegration from "./pages/digital-marketing/ai/AIGPTIntegration";
import AIEnterpriseGEO from "./pages/digital-marketing/ai/EnterpriseGEO";
import SEOOverview from "./pages/digital-marketing/seo/SEOServicesOverview";
import SEOGenerativeEngine from "./pages/digital-marketing/seo/GenerativeEngineSEO";
import SEOSEOServices from "./pages/digital-marketing/seo/SEOServices";
import SEOEnterpriseSEO from "./pages/digital-marketing/seo/EnterpriseSEO";
import SEOVisibilityTracking from "./pages/digital-marketing/seo/VisibilityTracking";
import SEOBrandAudit from "./pages/digital-marketing/seo/BrandVisibilityAudit";
import SEOLocalSEO from "./pages/digital-marketing/seo/LocalSEO";
import AdvertisingOverview from "./pages/digital-marketing/advertising/AdvertisingOverview";
import AdvertisingPPC from "./pages/digital-marketing/advertising/PPCManagement";
import AdvertisingEnterprisePPC from "./pages/digital-marketing/advertising/EnterprisePPC";
import AdvertisingLocalServices from "./pages/digital-marketing/advertising/LocalServicesAds";
import AdvertisingSocialMedia from "./pages/digital-marketing/advertising/SocialMediaAdvertising";
import AdvertisingEnterpriseSocial from "./pages/digital-marketing/advertising/EnterpriseSocialAds";
import AdvertisingProgrammatic from "./pages/digital-marketing/advertising/ProgrammaticAdvertising";
import ContentOverview from "./pages/digital-marketing/content/ContentOverview";
import ContentDigitalMarketing from "./pages/digital-marketing/content/DigitalMarketing";
import ContentContentServices from "./pages/digital-marketing/content/ContentServices";
import ContentCopywriting from "./pages/digital-marketing/content/Copywriting";
import ContentSocialManagement from "./pages/digital-marketing/content/SocialManagement";
import ContentInfographics from "./pages/digital-marketing/content/Infographics";
import ContentCTVOTT from "./pages/digital-marketing/content/CTVOTT";
import ProductValidation from "./pages/services/ProductValidation";
import WireframingUX from "./pages/services/WireframingUX";
import MVPDevelopment from "./pages/services/MVPDevelopment";
import FundingPitch from "./pages/services/FundingPitch";
import AccountingHandling from "./pages/services/AccountingHandling";
import About from "./pages/About";
import FreeAuditLanding from "./pages/FreeAuditLanding";
import SEOAuditLanding from "./pages/SEOAuditLanding";
import AIAuditLanding from "./pages/AIAuditLanding";
import ContentAuditLanding from "./pages/ContentAuditLanding";
import AdvertisingAuditLanding from "./pages/AdvertisingAuditLanding";
import AutomationServices from "./pages/AutomationServices";
import AutomationAuditLanding from "./pages/AutomationAuditLanding";
import AutomationMarketing from "./pages/automation/Marketing";
import AutomationSales from "./pages/automation/Sales";
import AutomationSupport from "./pages/automation/Support";
import AutomationInternalWorkflows from "./pages/automation/InternalWorkflows";
import AutomationReporting from "./pages/automation/Reporting";
import AutomationN8n from "./pages/automation/N8n";
import AutomationZapier from "./pages/automation/Zapier";
import AutomationMake from "./pages/automation/Make";
import AutomationPabbly from "./pages/automation/Pabbly";
import AutomationCustomApi from "./pages/automation/CustomApi";
import AutomationEcommerce from "./pages/automation/Ecommerce";
import AutomationSaas from "./pages/automation/Saas";
import AutomationHealthcare from "./pages/automation/Healthcare";
import AutomationEducation from "./pages/automation/Education";
import AutomationFinance from "./pages/automation/Finance";
import AutomationLeadCapture from "./pages/automation/LeadCapture";
import AutomationChatbotWhatsapp from "./pages/automation/ChatbotWhatsapp";
import AutomationFormToCrm from "./pages/automation/FormToCrm";
import AutomationOrderSync from "./pages/automation/OrderSync";
import AutomationNotifications from "./pages/automation/Notifications";

import WhoWeAre from "./pages/about/WhoWeAre";
import OurApproach from "./pages/about/OurApproach";
import CareersAbout from "./pages/about/Careers";
import ContactInfo from "./pages/about/ContactInfo";
import Reviews from "./pages/about/Reviews";
import Awards from "./pages/about/Awards";
import CommunityImpact from "./pages/about/CommunityImpact";
import Values from "./pages/about/Values";
import Equality from "./pages/about/Equality";
import History from "./pages/about/History";
import ConquermarkCares from "./pages/about/ConquermarkCares";
import Contact from "./pages/Contact";
import Redirect from "./pages/Redirect";
import FAQ from "./pages/FAQ";
import CaseStudies from "./pages/CaseStudies";
import AppLaunch from "./pages/case-studies/AppLaunch";
import EcommerceGrowth from "./pages/case-studies/EcommerceGrowth";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";
import Testimonials from "./pages/Testimonials";
import Careers from "./pages/Careers";
import Partners from "./pages/Partners";
import Events from "./pages/Events";
import Legal from "./pages/Legal";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/services/mobile-app" component={MobileApp} />
          <Route path="/services/web-development" component={WebDevelopment} />
          <Route path="/services/no-code" component={NoCode} />
          <Route path="/services/digital-marketing" component={DigitalMarketingService} />
          <Route path="/digital-marketing" component={DigitalMarketing} />
          <Route path="/digital-marketing/ai/overview" component={AIOverview} />
          <Route path="/digital-marketing/ai/consulting" component={AIConsulting} />
          <Route path="/digital-marketing/ai/digital-marketing" component={AIDigitalMarketing} />
          <Route path="/digital-marketing/ai/chatgpt" component={AIChatGPT} />
          <Route path="/digital-marketing/ai/agent-development" component={AIAgentDevelopment} />
          <Route path="/digital-marketing/ai/gpt-integration" component={AIGPTIntegration} />
          <Route path="/digital-marketing/ai/enterprise-geo" component={AIEnterpriseGEO} />
          <Route path="/digital-marketing/seo/overview" component={SEOOverview} />
          <Route path="/digital-marketing/seo/generative-engine" component={SEOGenerativeEngine} />
          <Route path="/digital-marketing/seo/services" component={SEOSEOServices} />
          <Route path="/digital-marketing/seo/enterprise" component={SEOEnterpriseSEO} />
          <Route path="/digital-marketing/seo/visibility-tracking" component={SEOVisibilityTracking} />
          <Route path="/digital-marketing/seo/brand-audit" component={SEOBrandAudit} />
          <Route path="/digital-marketing/seo/local" component={SEOLocalSEO} />
          <Route path="/digital-marketing/advertising/overview" component={AdvertisingOverview} />
          <Route path="/digital-marketing/advertising/ppc" component={AdvertisingPPC} />
          <Route path="/digital-marketing/advertising/enterprise-ppc" component={AdvertisingEnterprisePPC} />
          <Route path="/digital-marketing/advertising/local-services" component={AdvertisingLocalServices} />
          <Route path="/digital-marketing/advertising/social-media" component={AdvertisingSocialMedia} />
          <Route path="/digital-marketing/advertising/enterprise-social" component={AdvertisingEnterpriseSocial} />
          <Route path="/digital-marketing/advertising/programmatic" component={AdvertisingProgrammatic} />
          <Route path="/digital-marketing/content/overview" component={ContentOverview} />
          <Route path="/digital-marketing/content/digital-marketing" component={ContentDigitalMarketing} />
          <Route path="/digital-marketing/content/content-services" component={ContentContentServices} />
          <Route path="/digital-marketing/content/copywriting" component={ContentCopywriting} />
          <Route path="/digital-marketing/content/social-management" component={ContentSocialManagement} />
          <Route path="/digital-marketing/content/infographics" component={ContentInfographics} />
          <Route path="/digital-marketing/content/ctv-ott" component={ContentCTVOTT} />
          <Route path="/services/product-validation" component={ProductValidation} />
          <Route path="/services/wireframing-ux" component={WireframingUX} />
          <Route path="/services/mvp-development" component={MVPDevelopment} />
          <Route path="/services/funding-pitch" component={FundingPitch} />
          <Route path="/services/accounting-handling" component={AccountingHandling} />
          <Route path="/free-audit" component={FreeAuditLanding} />
          <Route path="/seo-audit" component={SEOAuditLanding} />
          <Route path="/ai-audit" component={AIAuditLanding} />
          <Route path="/content-audit" component={ContentAuditLanding} />
          <Route path="/advertising-audit" component={AdvertisingAuditLanding} />
          <Route path="/about" component={About} />
          <Route path="/about/who-we-are" component={WhoWeAre} />
          <Route path="/about/our-approach" component={OurApproach} />
          <Route path="/about/careers" component={CareersAbout} />
          <Route path="/about/contact-info" component={ContactInfo} />
          <Route path="/about/reviews" component={Reviews} />
          <Route path="/about/awards" component={Awards} />
          <Route path="/about/community-impact" component={CommunityImpact} />
          <Route path="/about/values" component={Values} />
          <Route path="/about/equality" component={Equality} />
          <Route path="/about/history" component={History} />
          <Route path="/about/conquermark-cares" component={ConquermarkCares} />
          <Route path="/contact" component={Contact} />
          {/* Redirects for removed pages */}
          <Route path="/pricing">{() => <Redirect to="/contact" />}</Route>
          <Route path="/blog">{() => <Redirect to="/case-studies" />}</Route>
          <Route path="/resources">{() => <Redirect to="/contact" />}</Route>
          <Route path="/faq" component={FAQ} />
          <Route path="/case-studies" component={CaseStudies} />
          <Route path="/case-studies/app-launch" component={AppLaunch} />
          <Route path="/case-studies/ecommerce-growth" component={EcommerceGrowth} />
          <Route path="/blog" component={Blog} />
          <Route path="/resources" component={Resources} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/careers" component={Careers} />
          <Route path="/partners" component={Partners} />
          <Route path="/events" component={Events} />
          <Route path="/legal" component={Legal} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-of-service" component={TermsOfService} />
          <Route path="/cookie-policy" component={CookiePolicy} />
          <Route path={"/404"} component={NotFound} />
          {/* Final fallback route */}

          {/* Automation Services Routes */}
          <Route path="/automation-services" component={AutomationServices} />
          <Route path="/automation-audit" component={AutomationAuditLanding} />
          <Route path="/automation/marketing" component={AutomationMarketing} />
          <Route path="/automation/sales" component={AutomationSales} />
          <Route path="/automation/support" component={AutomationSupport} />
          <Route path="/automation/internal-workflows" component={AutomationInternalWorkflows} />
          <Route path="/automation/reporting" component={AutomationReporting} />
          <Route path="/automation/n8n" component={AutomationN8n} />
          <Route path="/automation/zapier" component={AutomationZapier} />
          <Route path="/automation/make" component={AutomationMake} />
          <Route path="/automation/pabbly" component={AutomationPabbly} />
          <Route path="/automation/custom-api" component={AutomationCustomApi} />
          <Route path="/automation/ecommerce" component={AutomationEcommerce} />
          <Route path="/automation/saas" component={AutomationSaas} />
          <Route path="/automation/healthcare" component={AutomationHealthcare} />
          <Route path="/automation/education" component={AutomationEducation} />
          <Route path="/automation/finance" component={AutomationFinance} />
          <Route path="/automation/lead-capture" component={AutomationLeadCapture} />
          <Route path="/automation/chatbot-whatsapp" component={AutomationChatbotWhatsapp} />
          <Route path="/automation/form-to-crm" component={AutomationFormToCrm} />
          <Route path="/automation/order-sync" component={AutomationOrderSync} />
          <Route path="/automation/notifications" component={AutomationNotifications} />


          {/* Automation Services Routes */}
          <Route path="/automation-services" component={AutomationServices} />
          <Route path="/automation-audit" component={AutomationAuditLanding} />
          <Route path="/automation/marketing" component={AutomationMarketing} />
          <Route path="/automation/sales" component={AutomationSales} />
          <Route path="/automation/support" component={AutomationSupport} />
          <Route path="/automation/internal-workflows" component={AutomationInternalWorkflows} />
          <Route path="/automation/reporting" component={AutomationReporting} />
          <Route path="/automation/n8n" component={AutomationN8n} />
          <Route path="/automation/zapier" component={AutomationZapier} />
          <Route path="/automation/make" component={AutomationMake} />
          <Route path="/automation/pabbly" component={AutomationPabbly} />
          <Route path="/automation/custom-api" component={AutomationCustomApi} />
          <Route path="/automation/ecommerce" component={AutomationEcommerce} />
          <Route path="/automation/saas" component={AutomationSaas} />
          <Route path="/automation/healthcare" component={AutomationHealthcare} />
          <Route path="/automation/education" component={AutomationEducation} />
          <Route path="/automation/finance" component={AutomationFinance} />
          <Route path="/automation/lead-capture" component={AutomationLeadCapture} />
          <Route path="/automation/chatbot-whatsapp" component={AutomationChatbotWhatsapp} />
          <Route path="/automation/form-to-crm" component={AutomationFormToCrm} />
          <Route path="/automation/order-sync" component={AutomationOrderSync} />
          <Route path="/automation/notifications" component={AutomationNotifications} />

          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
