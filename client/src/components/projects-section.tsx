import { Settings, PieChart, Users, Rocket, Shield, Cloud } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "ETL Pipeline Optimization",
      description: "Streamlined data processing workflows for improved efficiency",
      icon: Settings,
      color: "primary",
      metrics: [
        { label: "Processing Time Reduction", value: "40%" },
        { label: "Data Accuracy Improvement", value: "25%" },
        { label: "Infrastructure Cost Reduction", value: "20%" },
      ],
      technologies: ["SQL", "AWS Glue", "Python"],
    },
    {
      title: "Power BI Dashboard Suite",
      description: "Comprehensive KPI tracking and financial reporting system",
      icon: PieChart,
      color: "secondary",
      metrics: [
        { label: "Ad Spend Tracking", value: "$5M+" },
        { label: "Reporting Time Reduction", value: "30%" },
        { label: "User Adoption Rate", value: "95%" },
      ],
      technologies: ["Power BI", "Power Query", "DAX"],
    },
    {
      title: "CRM System Implementation", 
      description: "End-to-end customer relationship management solution",
      icon: Users,
      color: "success",
      metrics: [
        { label: "Customer Churn Reduction", value: "15%" },
        { label: "Sales Team Efficiency", value: "30%" },
        { label: "Customer Satisfaction", value: "75%" },
      ],
      technologies: ["CRM", "Automation", "Analytics"],
    },
    {
      title: "Process Optimization Initiative",
      description: "Business process analysis and automation implementation",
      icon: Rocket,
      color: "accent",
      metrics: [
        { label: "Productivity Increase", value: "25%" },
        { label: "Manual Effort Reduction", value: "15hrs/week" },
        { label: "Process Success Rate", value: "98%" },
      ],
      technologies: ["Process Analysis", "Automation", "Agile"],
    },
    {
      title: "Data Quality Framework",
      description: "Automated validation and data governance implementation",
      icon: Shield,
      color: "primary",
      metrics: [
        { label: "Data Accuracy", value: "99%" },
        { label: "Validation Checks", value: "30+" },
        { label: "Manual Intervention", value: "-75%" },
      ],
      technologies: ["Data Quality", "Validation", "Governance"],
    },
    {
      title: "Cloud Data Migration",
      description: "Scalable cloud-based data solutions deployment",
      icon: Cloud,
      color: "secondary",
      metrics: [
        { label: "Infrastructure Cost Reduction", value: "20%" },
        { label: "Data Volume Support", value: "+50%" },
        { label: "System Uptime", value: "99.9%" },
      ],
      technologies: ["AWS", "Cloud Migration", "Snowflake"],
    },
  ];

  return (
    <section id="projects" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Key Projects & Achievements</h2>
          <p className="text-lg text-slate-600">
            Quantifiable results from data-driven initiatives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const bgColorClass = `bg-${project.color}/10`;
            const textColorClass = `text-${project.color}`;

            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="mb-4">
                  <div className={`w-12 h-12 ${bgColorClass} rounded-lg flex items-center justify-center mb-3`}>
                    <IconComponent className={`${textColorClass} text-xl w-6 h-6`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{project.description}</p>
                </div>
                
                <div className="space-y-3 mb-4">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex justify-between items-center">
                      <span className="text-slate-700 text-sm">{metric.label}</span>
                      <span className="font-semibold text-success">{metric.value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
