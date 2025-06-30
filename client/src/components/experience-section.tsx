import { TrendingUp, Database, BarChart } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Business Analyst",
      company: "Wipro",
      period: "January 2025 - Present",
      location: "Bengaluru, Karnataka, India",
      icon: TrendingUp,
      color: "primary",
      stats: [
        { label: "Ad Spend Tracking", value: "$5M+" },
        { label: "Team Members Led", value: "3" },
        { label: "Compliance Rate", value: "100%" },
      ],
      achievements: [
        "Owned full delivery lifecycle of BI solutions across tight deadlines for high-visibility financial and marketing KPIs",
        "Led a BI team of 3 analysts, mentoring them and managing workloads during critical delivery phases",
        "Built Power BI solutions for tracking $5M+ in ad spend, budget variance, and forecasting dashboards",
        "Collaborated with finance teams to support compliance-aligned KPI reporting and monthly reconciliation reports",
        "Automated data ingestion via SQL + Power Query from CRM, ad platforms, and financial systems",
        "Participated in BI Center of Excellence (CoE) initiatives and led Power BI workshops",
      ],
    },
    {
      title: "Business Analyst",
      company: "Wipro",
      period: "March 2024 - December 2024",
      location: "Bengaluru, Karnataka, India",
      icon: BarChart,
      color: "secondary",
      stats: [
        { label: "Productivity Increase", value: "25%" },
        { label: "Revenue Increase", value: "10%" },
        { label: "Project Success Rate", value: "98%" },
      ],
      achievements: [
        "Conducted in-depth analysis of 10+ business processes, identifying inefficiencies and automation solutions",
        "Partnered with cross-functional stakeholders to define requirements for 15+ high-impact projects",
        "Led data-driven decision-making by conducting 20+ deep-dive analyses using SQL, Power BI, and statistical modeling",
        "Designed and led workshops for 50+ stakeholders, achieving 95% satisfaction rate in engagement",
        "Spearheaded end-to-end CRM system implementation, reducing customer churn by 15%",
        "Developed KPI dashboards for 5 business units, improving operational efficiency by 20%",
      ],
    },
    {
      title: "Senior Data Analyst",
      company: "Wipro",
      period: "December 2023 - March 2024",
      location: "Bengaluru, Karnataka, India",
      icon: Database,
      color: "accent",
      stats: [
        { label: "Daily Data Processing", value: "1TB+" },
        { label: "System Uptime", value: "99.9%" },
        { label: "Processing Improvement", value: "40%" },
      ],
      achievements: [
        "Designed and maintained data pipelines handling 1TB+ of data daily with 99.9% uptime",
        "Refactored ETL workflows, reducing data processing time from 5 hours to 3 hours",
        "Built and optimized 10+ data models, improving query performance by 30%",
        "Developed 30+ automated data validation checks, increasing data accuracy by 25%",
        "Integrated 5 new data sources, leading to 15% increase in actionable insights",
        "Deployed scalable cloud-based solutions, reducing infrastructure costs by 20%",
      ],
    },
    {
      title: "Data Analyst",
      company: "Wipro",
      period: "September 2023 - December 2023",
      location: "Gurugram, Haryana, India",
      icon: BarChart,
      color: "primary",
      stats: [
        { label: "Data Rows Analyzed", value: "1M+" },
        { label: "Efficiency Increase", value: "20%" },
        { label: "Time Saved", value: "15hrs/week" },
      ],
      achievements: [
        "Analyzed 1M+ rows of data using Python and SQL, extracting insights from complex datasets",
        "Developed interactive dashboards in Tableau and Power BI for real-time monitoring",
        "Automated 50+ recurring data processes, saving 15+ hours per week",
        "Conducted market trend analysis for 5 major projects using predictive analytics",
        "Implemented advanced data cleansing techniques, increasing data accuracy by 25%",
        "Achieved 95% adoption rate of recommended strategies among leadership",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Wipro",
      period: "June 2023 - September 2023",
      location: "Mumbai, Maharashtra, India",
      icon: TrendingUp,
      color: "secondary",
      stats: [
        { label: "Team Size Led", value: "10" },
        { label: "User Engagement", value: "+20%" },
        { label: "Time-to-Market", value: "-30%" },
      ],
      achievements: [
        "Led a team of 10 developers, overseeing feature development and ensuring smooth execution",
        "Accelerated development cycle, enabling faster release of new features aligned with business goals",
        "Collaborated with product management to define and optimize the feature roadmap",
        "Developed structured training program for junior developers, improving code quality by 15%",
        "Implemented automated customer response system, reducing response time by 50%",
        "Enhanced user engagement by 20% and customer satisfaction ratings by 75%",
      ],
    },
    {
      title: "Software Engineer",
      company: "Wipro",
      period: "March 2023 - June 2023",
      location: "Pune, Maharashtra, India",
      icon: Database,
      color: "accent",
      stats: [
        { label: "Records Managed", value: "100K+" },
        { label: "Compliance Rate", value: "98%" },
        { label: "Processing Time Reduction", value: "70%" },
      ],
      achievements: [
        "Managed datasets exceeding 100,000 records with statistical analysis and visualization",
        "Maintained 98%+ compliance rate, avoiding legal penalties and enhancing corporate reputation",
        "Developed Excel-based automation, reducing data processing time by 70%",
        "Streamlined pension structures for 30+ clients, achieving 15% cost reduction",
        "Executed 100+ complex SQL queries with 99% accuracy rate",
        "Generated 500+ monthly reports for executive teams with 95% satisfaction rate",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-slate-600">
            4+ years of driving data-driven solutions across multiple roles
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              const colorClass = `text-${exp.color}`;
              const bgColorClass = `bg-${exp.color}`;

              return (
                <div key={index} className="relative">
                  <div className="flex items-start gap-8">
                    <div className={`hidden md:flex w-16 h-16 ${bgColorClass} rounded-full items-center justify-center relative z-10`}>
                      <IconComponent className="text-white text-xl w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-slate-50 p-6 rounded-xl">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-slate-900">{exp.title}</h3>
                            <p className="text-primary font-medium">{exp.company}</p>
                            {exp.location && (
                              <p className="text-slate-600 text-sm flex items-center gap-1 mt-1">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                {exp.location}
                              </p>
                            )}
                          </div>
                          <div className="text-slate-600">
                            <svg className="inline w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            {exp.period}
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4 mb-4">
                          {exp.stats.map((stat, statIndex) => (
                            <div key={statIndex} className="bg-white p-4 rounded-lg">
                              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                              <div className="text-sm text-slate-600">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                        
                        <ul className="space-y-2 text-slate-700">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2">
                              <svg className={`${colorClass} mt-1 text-sm w-4 h-4 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
