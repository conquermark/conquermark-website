# Maintenance Reports by webcycle

- **Contributors:** webcycle
- **Tags:** maintenance, reports, event logs, admin, documentation, pdf, html, client reports
- **Requires at least:** 5.0
- **Tested up to:** 6.5
- **Requires PHP:** 7.0
- **Stable tag:** 1.0.0
- **License:** GPLv2 or later
- **License URI:** https://www.gnu.org/licenses/gpl-2.0.html

Generate professional maintenance reports for your WordPress websites. Create detailed event logs, add screenshots, and export reports as HTML or PDF. Perfect for agencies and developers managing multiple client sites.

## Description

Maintenance Reports by webcycle is a comprehensive WordPress plugin designed to help website administrators, developers, and agencies create professional maintenance reports for their clients. With an intuitive dashboard and powerful features, you can easily track, document, and present all maintenance activities.

### Key Capabilities:

*   **Comprehensive Dashboard** - Get an overview of all reports, event logs, and statistics at a glance
*   **Event Log Management** - Create detailed event logs with categories, hours tracking, outcomes, notes, and multiple screenshots
*   **Professional Reports** - Generate beautifully formatted maintenance reports with customizable templates
*   **Multiple Export Formats** - Download reports as HTML or PDF
*   **Quick Add Templates** - Pre-populate event logs with common maintenance tasks organized by category
*   **Whitelabel Settings** - Configure your brand details globally for all reports
*   **Client Customization** - Add client-specific information, logos, and custom colors to each report
*   **Site Health Integration** - Quick-add statistics from WordPress Site Health data

### Perfect For:

*   WordPress maintenance agencies
*   Freelance developers managing client sites
*   Internal IT departments
*   Website administrators tracking routine maintenance
*   Agencies providing monthly maintenance reports

## Installation

1.  Upload the plugin files to the `/wp-content/plugins/maintenance-reports-by-webcycle` directory, or install the plugin through the WordPress plugins screen directly.
2.  Activate the plugin through the 'Plugins' menu in WordPress.
3.  Navigate to 'Maintenance Reports' in the WordPress admin menu to access the dashboard.

### Via WordPress Admin:

1.  Go to Plugins → Add New
2.  Click "Upload Plugin"
3.  Choose the plugin zip file and click "Install Now"
4.  Activate the plugin after installation

### Via FTP:

1.  Extract the plugin zip file
2.  Upload the `maintenance-reports-by-webcycle` folder to `/wp-content/plugins/`
3.  Activate the plugin from the WordPress admin Plugins page

## Frequently Asked Questions

-   **Do I need any additional plugins?**
    No, this plugin is self-contained. However, for PDF export functionality, the dompdf library (included via Composer) is required.

-   **Can I customize the report appearance?**
    Yes! You can choose from 4 professional templates, customize colors, add client logos, and configure your brand details in the settings.

-   **What file types are supported for screenshots?**
    You can upload JPEG, PNG, GIF, and WebP image files for event log screenshots and client logos.

-   **Can I export reports in different formats?**
    Yes, you can download reports as HTML (for viewing/sharing) or PDF (for printing/archiving).

-   **Is this plugin translation-ready?**
    Yes, the plugin uses the text domain 'maintenance-reports-by-webcycle' and is fully internationalized.

-   **Can multiple users create reports?**
    Yes, any user with the 'manage_options' capability (typically administrators) can create and manage reports.

-   **Are reports stored in the database?**
    Yes, all reports and event logs are stored in custom database tables created by the plugin. You can view, edit, and delete them from the admin interface.

-   **Can I reuse event logs in multiple reports?**
    Absolutely! Event logs are stored independently and can be selected and included in multiple reports.

## Screenshots

1.  Dashboard overview with statistics and recent activity
2.  Event logs management interface
3.  Creating a new maintenance report
4.  Report template selection (4 professional designs)
5.  Quick Add feature for common maintenance tasks
6.  Whitelabel settings for brand configuration
7.  Viewing a generated report
8.  PDF export functionality

## Changelog

### 1.0.0

*   Initial release
*   Comprehensive dashboard with statistics overview
*   Event log management with screenshots support
*   Multiple screenshot uploads per event log
*   Four professional report templates (Template 1-4)
*   HTML and PDF export functionality
*   Quick Add templates for common maintenance tasks (UPDATES, BACKUPS, SECURITY, FIREWALL, UPTIME, GOOGLE ANALYTICS, FUNCTIONAL TESTING, DESIGN, DEVELOPMENT, ANALYTICS, SEO, STATS)
*   WordPress Site Health integration for statistics
*   Whitelabel settings for global brand configuration
*   Client-specific customization (name, website, logo, color, notes)
*   Event log categories and hours tracking
*   Full CRUD operations (Create, Read, Update, Delete) for reports and logs
*   Separate admin pages for listing and editing
*   Security: Nonce verification, capability checks, input sanitization, output escaping
*   Database schema with proper indexing
*   Responsive admin interface with bento-style UI
*   Translation-ready with text domain
*   Comprehensive error handling

## Upgrade Notice

### 1.0.0

Initial release of Maintenance Reports by webcycle. Install and activate to start creating professional maintenance reports.

## Features

*   **Dashboard**
    *   Overview statistics (total reports, event logs)
    *   Recent reports and event logs display
    *   Category distribution visualization
    *   Quick action buttons

*   **Event Log Management**
    *   Create, edit, and delete event logs
    *   Categorize logs (UPDATES, BACKUPS, SECURITY, etc.)
    *   Track hours spent on each task
    *   Add descriptions, outcomes, and notes
    *   Upload multiple screenshots per log
    *   Quick Add templates for common tasks

*   **Report Generation**
    *   Four professional templates to choose from
    *   Customizable report colors
    *   Client-specific information (name, website, logo)
    *   Report overview/notes section
    *   Multiple event log selection
    *   Beautiful HTML rendering
    *   Professional PDF export

*   **Quick Add Categories**
    *   UPDATES (Core, Plugin, Theme updates)
    *   BACKUPS (Backup verification and management)
    *   SECURITY (Security patches and updates)
    *   FIREWALL (Traffic monitoring and bot protection)
    *   UPTIME (Uptime monitoring)
    *   GOOGLE ANALYTICS (Analytics data and insights)
    *   FUNCTIONAL TESTING (Form testing, functionality checks)
    *   DESIGN (Design-related tasks)
    *   DEVELOPMENT (Development tasks)
    *   ANALYTICS (Various analytics tasks)
    *   SEO (Search engine optimization tasks)
    *   STATS (WordPress Site Health statistics integration)

*   **Settings**
    *   Global brand name configuration
    *   Brand description
    *   Brand website URL
    *   Brand color selection
    *   Contact details (supports multi-line text)

*   **Export Options**
    *   HTML download (standalone file)
    *   PDF download (using dompdf library)
    *   Print-friendly CSS
    *   Professional formatting

## Requirements

*   WordPress 5.0 or higher
*   PHP 7.0 or higher
*   MySQL 5.6 or higher / MariaDB 10.0 or higher
*   Write permissions for uploads directory (for screenshots and logos)

## Developer Information

### Database Tables:

The plugin creates three custom database tables:

1.  `wp_mrw_reports` - Stores all maintenance reports
2.  `wp_mrw_event_logs` - Stores event log entries
3.  `wp_mrw_screenshots` - Stores screenshot file URLs linked to event logs

### Filters & Actions:

The plugin follows WordPress coding standards and best practices:

*   All strings are internationalized with text domain 'maintenance-reports-by-webcycle'
*   Prepared statements for all database queries
*   Proper sanitization and escaping throughout
*   WordPress admin UI standards compliance

### File Structure:

```
maintenance-reports-by-webcycle/
├── maintenance-reports-by-webcycle.php (Main plugin file)
├── report_html.php (Report template functions)
├── readme.txt (This file)
├── composer.json (Composer dependencies)
├── vendor/ (Composer autoloaded libraries)
│   └── dompdf/ (PDF generation library)
└── languages/ (Translation files - optional)
```

## Support

For support, feature requests, or bug reports, please visit:
https://webcycle.ai/

## Credits

Developed by webcycle (https://webcycle.ai/)

### Third-Party Libraries:

*   dompdf/dompdf - PDF generation library (LGPL-2.1)
*   masterminds/html5 - HTML5 parser
*   sabberworm/php-css-parser - CSS parser
*   php-font-lib - Font library
*   php-svg-lib - SVG library

## Copyright

Copyright (c) 2025 webcycle. All rights reserved.

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.
