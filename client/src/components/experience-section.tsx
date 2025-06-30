import { TrendingUp, Database, BarChart } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Business Analyst",
      company: "Wipro",
      period: "January 2025 - Present",
      icon: TrendingUp,
      color: "primary",
      stats: [
        { label: "Ad Spend Tracking", value: "$5M+" },
        { label: "Team Members Led", value: "3" },
      ],
      achievements: [
        "Led BI team of 3 analysts, managing workloads during critical delivery phases",
        "Built Power BI solutions for tracking $5M+ in ad spend and forecasting dashboards",
        "Automated data ingestion via SQL + Power Query from multiple platforms",
      ],
    },
    {
      title: "Business Analyst",
      company: "Wipro",
      period: "March 2024 - December 2024",
      icon: BarChart,
      color: "secondary",
      stats: [
        { label: "Productivity Increase", value: "25%" },
        { label: "Revenue Increase", value: "10%" },
        { label: "Churn Reduction", value: "15%" },
      ],
      achievements: [
        "Analyzed 10+ business processes, identifying inefficiencies and automation opportunities",
        "Led 20+ deep-dive analyses using SQL, Power BI, and statistical modeling",
        "Implemented end-to-end CRM system with automated workflows",
      ],
    },
    {
      title: "Senior Data Analyst",
      company: "Wipro",
      period: "December 2023 - March 2024",
      icon: Database,
      color: "accent",
      stats: [
        { label: "Daily Data Processing", value: "1TB+" },
        { label: "System Uptime", value: "99.9%" },
        { label: "Processing Improvement", value: "40%" },
      ],
      achievements: [
        "Designed and maintained data pipelines handling 1TB+ of data daily",
        "Optimized ETL workflows, reducing processing time from 5 to 3 hours",
        "Deployed scalable cloud-based solutions, reducing infrastructure costs by 20%",
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
