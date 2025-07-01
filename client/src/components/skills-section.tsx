import { BarChart, Settings, Briefcase, Database, Cloud, Code } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Top Skills",
      icon: BarChart,
      color: "primary",
      skills: [
        { name: "Data Transformation", level: 100 },
        { name: "Data Visualization", level: 100 },
        { name: "Predictive Analytics", level: 95 },
        { name: "Statistical Modeling", level: 90 },
        { name: "Business Intelligence", level: 95 },
        { name: "ETL Development", level: 90 },
      ],
    },
    {
      title: "BI & Analytics Tools",
      icon: Settings,
      color: "secondary",
      tools: [
        "Power BI", "Tableau", "QuickSight", "Excel VBA", "Power Query",
        "Google Analytics", "SQLYOG", "Jira", "ServiceNow"
      ],
    },
    {
      title: "Programming & Databases",
      icon: Database,
      color: "accent",
      tools: [
        "SQL", "Python", "Java", "Spring Framework", "Jenkins",
        "WinCVS", "Data Modeling", "Database Optimization"
      ],
    },
    {
      title: "Cloud & Data Platforms",
      icon: Cloud,
      color: "info",
      tools: [
        "AWS", "AWS Glue", "Snowflake", "Data Pipelines",
        "Cloud Migration", "ETL Workflows", "Data Warehousing"
      ],
    },
    {
      title: "Business & Domain Skills",
      icon: Briefcase,
      color: "success",
      businessSkills: [
        "Process Optimization",
        "KPI Reporting", 
        "Agile Methodology",
        "UAT & Testing",
        "BFSI Domain",
        "Project Management",
        "Stakeholder Management",
        "Requirements Gathering",
        "Business Process Analysis",
        "Data Governance",
        "Compliance Management",
        "ITIL Practices",
        "SACM Standards",
      ],
    },
    {
      title: "Certifications & Awards",
      icon: Code,
      color: "warning",
      certifications: [
        "AWS Cloud Essentials for Business Leaders",
        "Google Analytics Certification",
        "GEN AI Fundamentals",
        "Digital Garage Certificate",
        "Walmart USA - Advanced Software Engineering Job Simulation",
        "Bravo Awards",
        "Rising Star Awards",
        "Pat on the Back Awards",
        "Spirit of Wipro Award",
        "Rookie Rising Star",
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-slate-600">
            Technical proficiency across data analytics, business intelligence, and process optimization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const colorClass = `text-${category.color}`;
            const bgColorClass = `bg-${category.color}/10`;

            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 ${bgColorClass} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <IconComponent className={`${colorClass} text-2xl w-6 h-6`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
                </div>

                {/* Data & Analytics Skills with Progress Bars */}
                {category.skills && (
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex justify-between items-center">
                        <span className="text-slate-700">{skill.name}</span>
                        <div className="w-20 h-2 bg-slate-200 rounded-full">
                          <div 
                            className={`h-full bg-primary rounded-full`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technical Tools */}
                {category.tools && (
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className={`px-3 py-1 rounded-full text-sm ${
                          toolIndex < 3 ? "bg-primary text-white" : "bg-slate-200 text-slate-700"
                        }`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}

                {/* Business Skills */}
                {category.businessSkills && (
                  <ul className="space-y-2 text-slate-700">
                    {category.businessSkills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Certifications */}
                {category.certifications && (
                  <div className="space-y-2">
                    {category.certifications.map((cert, certIndex) => (
                      <div key={certIndex} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-slate-700">{cert}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
