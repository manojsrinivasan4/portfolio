import { TrendingUp, Check } from "lucide-react";

export default function AboutSection() {
  const achievements = [
    "Reduced reporting time by 30% with interactive dashboards",
    "Improved data accuracy to 99% by building robust ETL pipelines",
    "Boosted marketing ROI by 15% using SQL analytics",
    "Led Agile sprints achieving 98% governance compliance",
  ];

  const stats = [
    { value: "99%", label: "Data Accuracy" },
    { value: "30%", label: "Time Reduction" },
    { value: "15%", label: "ROI Improvement" },
    { value: "98%", label: "Compliance Rate" },
  ];

  const languages = ["Tamil (Native)", "Telugu (Professional)", "Hindi (Professional)"];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Transforming raw data into business value through end-to-end analytics solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I help organizations transform raw data into business value through end-to-end analytics solutions that drive insights, streamline operations, and boost performance.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              With 4+ years of experience across Business Analysis, Data Analytics, ETL Development, and Reporting Automation, I bring a unique blend of technical skills and business acumen. I specialize in building dashboards, data pipelines, and process improvements using Power BI, SQL, Python, AWS Glue, and Excel VBA.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Key Achievements
              </h3>
              <ul className="space-y-2 text-slate-700">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </svg>
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((language, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm ${
                      index === 0 ? "bg-primary text-white" : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
