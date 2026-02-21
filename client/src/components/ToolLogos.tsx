import React from 'react';

// Helper to render logo from public/logos/ directory
const LogoImage = ({ name, file, className = "w-10 h-10" }: { name: string, file: string, className?: string }) => (
  <img 
    src={`/logos/${file}`} 
    alt={`${name} Logo`} 
    className={`${className} object-contain`}
    onError={(e) => {
      // Fallback if image fails
      e.currentTarget.style.display = 'none';
    }}
  />
);

export const ToolLogos = {
  HubSpot: { name: "HubSpot", component: <LogoImage name="HubSpot" file="hubspot.svg" /> },
  Salesforce: { name: "Salesforce", component: <LogoImage name="Salesforce" file="salesforce.svg" /> },
  Zapier: { name: "Zapier", component: <LogoImage name="Zapier" file="zapier.svg" /> },
  n8n: { name: "n8n", component: <LogoImage name="n8n" file="n8n.svg" className="w-20 h-10" /> },
  Make: { name: "Make", component: <LogoImage name="Make" file="make.svg" /> },
  Slack: { name: "Slack", component: <LogoImage name="Slack" file="slack.svg" /> },
  OpenAI: { name: "OpenAI", component: <LogoImage name="OpenAI" file="openai.svg" /> },
  Stripe: { name: "Stripe", component: <LogoImage name="Stripe" file="stripe.svg" /> },
  Shopify: { name: "Shopify", component: <LogoImage name="Shopify" file="shopify.svg" /> },
  WooCommerce: { name: "WooCommerce", component: <LogoImage name="WooCommerce" file="woocommerce.svg" /> },
  Pabbly: { name: "Pabbly", component: <LogoImage name="Pabbly" file="pabbly.svg" /> },
  
  // New Logos
  Mailchimp: { name: "Mailchimp", component: <LogoImage name="Mailchimp" file="mailchimp.svg" /> },
  GoogleAds: { name: "Google Ads", component: <LogoImage name="Google Ads" file="google-ads.svg" /> },
  Facebook: { name: "Facebook", component: <LogoImage name="Facebook" file="facebook.svg" /> },
  LinkedIn: { name: "LinkedIn", component: <LogoImage name="LinkedIn" file="linkedin.svg" /> },
  TikTok: { name: "TikTok", component: <LogoImage name="TikTok" file="tiktok.svg" /> },
  Klaviyo: { name: "Klaviyo", component: <LogoImage name="Klaviyo" file="klaviyo.svg" /> },
  Pipedrive: { name: "Pipedrive", component: <LogoImage name="Pipedrive" file="pipedrive.svg" /> },
  Zoho: { name: "Zoho", component: <LogoImage name="Zoho" file="zoho.svg" /> },
  Outreach: { name: "Outreach", component: <LogoImage name="Outreach" file="outreach.svg" /> },
  Zendesk: { name: "Zendesk", component: <LogoImage name="Zendesk" file="zendesk.svg" /> },
  Intercom: { name: "Intercom", component: <LogoImage name="Intercom" file="intercom.svg" /> },
  Freshdesk: { name: "Freshdesk", component: <LogoImage name="Freshdesk" file="freshdesk.svg" /> },
  QuickBooks: { name: "QuickBooks", component: <LogoImage name="QuickBooks" file="quickbooks.svg" /> },
  Xero: { name: "Xero", component: <LogoImage name="Xero" file="xero.svg" /> },
  Magento: { name: "Magento", component: <LogoImage name="Magento" file="magento.svg" /> },
  BigCommerce: { name: "BigCommerce", component: <LogoImage name="BigCommerce" file="bigcommerce.svg" /> },
  Notion: { name: "Notion", component: <LogoImage name="Notion" file="notion.svg" /> },
  Airtable: { name: "Airtable", component: <LogoImage name="Airtable" file="airtable.svg" /> },
  Trello: { name: "Trello", component: <LogoImage name="Trello" file="trello.svg" /> },
  Asana: { name: "Asana", component: <LogoImage name="Asana" file="asana.svg" /> },
  Monday: { name: "Monday", component: <LogoImage name="Monday" file="monday.svg" /> },
  ClickUp: { name: "ClickUp", component: <LogoImage name="ClickUp" file="clickup.svg" /> },
  Zoom: { name: "Zoom", component: <LogoImage name="Zoom" file="zoom.svg" /> },
  GoogleSheets: { name: "Google Sheets", component: <LogoImage name="Google Sheets" file="google-sheets.svg" /> },
  Gmail: { name: "Gmail", component: <LogoImage name="Gmail" file="gmail.svg" /> },
  Typeform: { name: "Typeform", component: <LogoImage name="Typeform" file="typeform.svg" /> },
  JotForm: { name: "JotForm", component: <LogoImage name="JotForm" file="jotform.svg" /> },
  DrChrono: { name: "DrChrono", component: <LogoImage name="DrChrono" file="drchrono.svg" className="w-20 h-10" /> },
  Epic: { name: "Epic", component: <LogoImage name="Epic" file="epic.svg" /> },
  Moodle: { name: "Moodle", component: <LogoImage name="Moodle" file="moodle.svg" /> },
  Canvas: { name: "Canvas", component: <LogoImage name="Canvas" file="canvas.svg" /> },
};

export const DefaultToolLogos = [
  ToolLogos.HubSpot,
  ToolLogos.Salesforce,
  ToolLogos.Zapier,
  ToolLogos.n8n,
  ToolLogos.Make,
  ToolLogos.Slack,
  ToolLogos.OpenAI,
  ToolLogos.Stripe
];
