import AutomationPageTemplate from "@/components/AutomationPageTemplate";
import { GraduationCap, BookOpen, Users, CheckSquare, DollarSign, Lightbulb, Workflow, Award } from "lucide-react";
import { ToolLogos } from '../../components/ToolLogos';

export default function Education() {
  return (
    <AutomationPageTemplate
        toolLogos={[ToolLogos.Canvas, ToolLogos.Moodle, ToolLogos.Zoom, ToolLogos.GoogleSheets, ToolLogos.Slack, ToolLogos.Typeform]}
      title="Education & EdTech Automation"
      subtitle="Streamline student enrollment, course delivery, and administrative tasks."
      description="We automate the student lifecycle from application to graduation. Integrate your LMS, CRM, and communication tools for a seamless experience."
      heroImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/jOCjRBkcVMDDpyDo.jpg"
      workflowImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663037453261/xAlRWiCnBMrboXDx.png"
      
      features={[
        "Manual processes consuming hours of productive time daily",
        "Data scattered across multiple disconnected systems",
        "Missing opportunities due to slow manual workflows",
        "No automated notifications for critical business events",
        "Team spending time on repetitive tasks instead of strategic work",
        "Unable to scale operations without hiring more staff"
      ]}
      
      benefits={[
        {
          icon: <GraduationCap className="h-12 w-12" />,
          title: "Automated Workflows",
          description: "Build custom automation workflows that handle repetitive tasks automatically, freeing your team for high-value work"
        },
        {
          icon: <BookOpen className="h-12 w-12" />,
          title: "Real-Time Integration",
          description: "Connect all your business tools and systems for seamless real-time data flow and instant updates"
        },
        {
          icon: <Users className="h-12 w-12" />,
          title: "Smart Automation",
          description: "Implement intelligent automation with conditional logic, data transformation, and error handling"
        },
        {
          icon: <CheckSquare className="h-12 w-12" />,
          title: "Scalable Solutions",
          description: "Build automation that scales with your business growth without additional manual effort"
        }
      ]}
      
      tools={[
        "Canvas LMS",
        "Blackboard Learn",
        "Moodle",
        "TalentLMS",
        "Docebo",
        "Google Classroom",
        "Microsoft Teams for Education",
        "Zoom for Education"
      ]}

      process={[
        { step: 1, title: "Discovery & Analysis", description: "We begin by understanding your current educational processes, identifying pain points, and mapping out opportunities for automation."}, 
        { step: 2, title: "Solution Design & Planning", description: "Based on our analysis, we design a tailored automation solution, outlining the workflows, integrations, and technologies to be used."}, 
        { step: 3, title: "Development & Implementation", description: "Our team builds and integrates the automation workflows, ensuring seamless operation with your existing LMS and other educational tools."}, 
        { step: 4, title: "Launch & Optimization", description: "After thorough testing, we launch your automation solution. We provide ongoing support and optimization to ensure maximum efficiency and continuous improvement."}
      ]}

      useCases={[
        {
          title: "Automated Student Onboarding",
          industry: "Higher Education",
          challenge: "A university faced overwhelming manual data entry and slow processing times for new student enrollments, leading to delays and administrative burden.",
          solution: "We implemented an automated onboarding system that integrated with their admissions portal and LMS, automatically processing applications, creating student accounts, and enrolling them in initial courses.",
          results: ["Reduced manual data entry by 70%", "Decreased student onboarding time by 50%", "Saved administrative staff 15 hours per week"]
        },
        {
          title: "Personalized Learning Path Delivery",
          industry: "Online Course Provider",
          challenge: "An online course provider struggled to offer personalized learning experiences at scale, leading to varied student engagement and completion rates.",
          solution: "We developed an automation that dynamically assigned learning modules and resources based on student performance and preferences, triggering personalized feedback and next-step recommendations.",
          results: ["Increased course completion rates by 25%", "Improved student satisfaction by 20%", "Enabled personalized learning for thousands of students simultaneously"]
        }
      ]}

      testimonials={[
        {
          quote: "ConquerMark transformed our student enrollment process. What used to take days now happens in hours, allowing our team to focus on student support rather than paperwork.",
          author: "Dr. Emily Chen",
          role: "Registrar",
          company: "Global University",
          rating: 5
        },
        {
          quote: "The automation solutions provided by ConquerMark have significantly enhanced our online course delivery. Our students are more engaged, and our administrative overhead has drastically reduced.",
          author: "Mark Johnson",
          role: "Director of Online Learning",
          company: "E-Learning Innovations",
          rating: 5
        },
        {
          quote: "Implementing ConquerMark\'s automation for our LMS was a game-changer. We now have real-time data flow and can scale our operations without hiring additional staff.",
          author: "Sarah Lee",
          role: "Head of IT",
          company: "Tech Academy",
          rating: 4
        }
      ]}

      pricingPlans={[
        {
          name: "Starter",
          price: "$799",
          period: "/month",
          features: [
            "Basic student enrollment automation",
            "Automated communication workflows",
            "Integration with 1 LMS platform",
            "Standard support"
          ]
        },
        {
          name: "Professional",
          price: "$2499",
          period: "/month",
          features: [
            "Advanced student lifecycle automation",
            "Course management and grading automation",
            "Integration with up to 3 LMS platforms",
            "Custom reporting & analytics",
            "Priority support"
          ],
          popular: true
        },
        {
          name: "Enterprise",
          price: "$4999",
          period: "/month",
          features: [
            "Comprehensive institutional automation",
            "Custom integrations & bespoke workflows",
            "Unlimited LMS integrations",
            "Dedicated account manager",
            "24/7 premium support"
          ]
        }
      ]}

      faqs={[
        {
          question: "What types of educational institutions can benefit from automation?",
          answer: "All types, including K-12 schools, universities, online course providers, and corporate training departments, can benefit from streamlining administrative tasks, improving student engagement, and optimizing resource allocation."
        },
        {
          question: "How does automation integrate with existing LMS platforms?",
          answer: "Our solutions are designed to integrate seamlessly with popular LMS platforms like Canvas, Moodle, Blackboard, and TalentLMS, using APIs and connectors to ensure smooth data flow and process orchestration."
        },
        {
          question: "Can automation help with student retention?",
          answer: "Yes, by automating personalized communication, progress tracking, and early intervention alerts, automation can significantly improve student engagement and retention rates."
        },
        {
          question: "Is technical expertise required to implement these automation solutions?",
          answer: "No, our team handles the entire setup and configuration process. We provide comprehensive training and ongoing support, so you don't need in-house technical expertise."
        },
        {
          question: "What is the typical ROI for education automation?",
          answer: "While ROI varies, clients typically see significant returns through reduced operational costs, improved staff productivity, higher student satisfaction, and increased enrollment capacity. Many achieve full ROI within the first year."
        }
      ]}

      ctaTitle="Ready to Automate Your Education & LMS Processes?"
      ctaSubtitle="Education & EdTech Automation"
      seoTitle="Education & EdTech Automation | Conquermark"
      seoDescription="Automate educational institutions and EdTech platforms. We integrate Canvas, Moodle, and CRMs to streamline student management."
      seoKeywords="education automation, edtech workflows, lms integration, student enrollment automation, canvas automation"
    />
  );
}
