import React, { useState } from 'react';
import { ChevronRight, Database, Server, Cloud, Lock, Workflow, Users } from 'lucide-react';

const App = () => {
  const [activeCard, setActiveCard] = useState(null);

  const concepts = [
    {
      title: "Data Storage",
      icon: <Database className="w-8 h-8 mb-4" />,
      description: "Modern approaches to organizing and storing data, including databases, data warehouses, and data lakes.",
      details: "Data storage is fundamental to data management. It encompasses structured databases (SQL), unstructured databases (NoSQL), data warehouses for analytical processing, and data lakes for storing raw data at scale."
    },
    {
      title: "Data Integration",
      icon: <Server className="w-8 h-8 mb-4" />,
      description: "Methods and tools for combining data from different sources while ensuring consistency and accuracy.",
      details: "Data integration involves ETL (Extract, Transform, Load) processes, real-time data streaming, and data virtualization techniques to create a unified view of information across the organization."
    },
    {
      title: "Cloud Data Management",
      icon: <Cloud className="w-8 h-8 mb-4" />,
      description: "Leveraging cloud technologies for scalable and flexible data management solutions.",
      details: "Cloud data management provides scalability, reliability, and cost-effectiveness through services like cloud storage, serverless computing, and managed database services."
    },
    {
      title: "Data Security",
      icon: <Lock className="w-8 h-8 mb-4" />,
      description: "Protecting data through encryption, access controls, and compliance measures.",
      details: "Data security encompasses encryption, authentication, authorization, audit trails, and compliance with regulations like GDPR and HIPAA to protect sensitive information."
    },
    {
      title: "Data Governance",
      icon: <Workflow className="w-8 h-8 mb-4" />,
      description: "Policies and procedures for ensuring data quality, compliance, and effective management.",
      details: "Data governance establishes frameworks for data quality, metadata management, master data management, and data lifecycle management to ensure data remains reliable and valuable."
    },
    {
      title: "Data Accessibility",
      icon: <Users className="w-8 h-8 mb-4" />,
      description: "Making data available to stakeholders while maintaining security and performance.",
      details: "Data accessibility focuses on providing secure, efficient access to data through APIs, data catalogs, self-service analytics, and proper documentation."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Data Management Fundamentals</h1>
          <p className="text-xl text-gray-600">Understanding the core concepts of modern data management</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {concepts.map((concept, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl cursor-pointer"
              onClick={() => setActiveCard(activeCard === index ? null : index)}
            >
              <div className="flex flex-col items-center text-center">
                {concept.icon}
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{concept.title}</h2>
                <p className="text-gray-600 mb-4">{concept.description}</p>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeCard === index ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-700 mt-4 text-sm">{concept.details}</p>
                </div>
                
                <ChevronRight
                  className={`w-6 h-6 text-blue-500 transition-transform duration-300 ${
                    activeCard === index ? 'rotate-90' : ''
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        <footer className="text-center mt-12 text-gray-600">
          <p>Click on any card to learn more about the concept</p>
        </footer>
      </div>
    </div>
  );
};

export default App;