import React, { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import { projectData } from "@/lib/data";
import { FaBriefcase, FaGraduationCap, FaLaptopCode, FaMapMarkerAlt, FaEnvelope, FaPhone, FaTools, FaUserTie, FaUsers, FaChartLine, FaSeedling, FaFileAlt, FaHandshake } from "react-icons/fa";

const Home = () => {
  const [showMoreExperience, setShowMoreExperience] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
  });

  const toggleMoreExperience = () => {
    setShowMoreExperience(!showMoreExperience);
  };

  const openProjectModal = (projectId: number) => {
    setSelectedProject(projectId);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormStatus({ isSubmitting: true, isSubmitted: false });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ isSubmitting: false, isSubmitted: true });
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
      
      // Reset button after 3 seconds
      setTimeout(() => {
        setFormStatus({ isSubmitting: false, isSubmitted: false });
      }, 3000);
    }, 2000);
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-r from-primary to-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Fred Walyaula</h1>
              <h2 className="text-2xl md:text-3xl font-heading font-light mb-8">Community Development Specialist</h2>
              <p className="text-lg mb-8">
                A seasoned professional with over 10 years of experience in agro-ecological approaches, community mobilization, and sustainable development initiatives across Uganda.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-accent hover:bg-amber-600 text-white font-medium py-2 px-6 rounded-md transition"
                >
                  Get in Touch
                </a>
                <a
                  href="#about"
                  className="bg-white hover:bg-gray-100 text-primary-600 font-medium py-2 px-6 rounded-md transition"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Fred Walyaula"
                className="rounded-full h-64 w-64 object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Community Development Work"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-semibold text-gray-800 mb-4">Professional Profile</h3>
              <p className="text-gray-700 mb-6">
                A seasoned Community Development Specialist, an Agro-Ecological Champion, Orphans and vulnerable persons advocate, an Environmental Social and Governance implementer with more than 10 years of experience working with several Local Governments, multinational and indigenous Organizations.
              </p>
              <p className="text-gray-700 mb-6">
                I am passionate about One Health strategies to achieve Community-led development interventions through community collective actions and agro-ecological and social economic platforms, community SACCOS and women and youth empowerment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-heading font-semibold text-gray-800 mb-2">Languages</h4>
                  <ul className="text-gray-700">
                    <li>English (Official)</li>
                    <li>Lumasaba & Luganda (Local)</li>
                    <li>Lugwere & Kiswahili (Others)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-heading font-semibold text-gray-800 mb-2">Computer Skills</h4>
                  <ul className="text-gray-700">
                    <li>Microsoft Office Suite</li>
                    <li>PowerPoint</li>
                    <li>Excel</li>
                    <li>Internet-related programs</li>
                  </ul>
                </div>
              </div>

              <a
                href="#"
                className="inline-flex items-center bg-primary hover:bg-primary-600 text-white font-medium py-2 px-6 rounded-md transition"
              >
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </span>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="timeline-container">
            {/* Experience Item 1 */}
            <div className="timeline-item mb-16">
              <div className="timeline-point"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-12 md:order-1">
                  <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">
                    Value Chain Development and Community Engagement Technical Consultant
                  </h3>
                  <h4 className="text-lg font-heading text-primary mb-4">Share An Opportunity Uganda</h4>
                  <p className="text-gray-600 italic mb-2">April to October 2023</p>
                  <div className="hidden md:block">
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      Value Chain Research
                    </span>
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      Market Assessment
                    </span>
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      Stakeholder Engagement
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 md:order-2">
                  <p className="text-gray-700 mb-4">
                    This was a short term engagement which ran from April 2023 and accomplished in October 2023.
                  </p>
                  <ul className="text-gray-700 list-disc pl-5 space-y-2">
                    <li>Carried out Value chain Research and development, Rapid Market assessments, stakeholder engagements</li>
                    <li>Building capacity and monitoring of Grantee agencies, business planning</li>
                    <li>Technical skills training in Gender participation, Communication, group dynamics</li>
                    <li>Business planning and enterprise development and management along different value chains</li>
                  </ul>
                  <div className="md:hidden mt-4">
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      Value Chain Research
                    </span>
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      Market Assessment
                    </span>
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      Stakeholder Engagement
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="timeline-item mb-16">
              <div className="timeline-point"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-12 md:order-1 md:hidden">
                  <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">
                    Value Chain Development (VCD) Short Term Technical Consultant
                  </h3>
                  <h4 className="text-lg font-heading text-primary mb-4">Agriculture Business Initiative (aBi) Limited</h4>
                  <p className="text-gray-600 italic mb-2">July 2022 to March 2023</p>
                  <div className="hidden md:block">
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      Project Management
                    </span>
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      Monitoring & Evaluation
                    </span>
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      Green Challenge Fund
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 md:order-1">
                  <p className="text-gray-700 mb-4">
                    This was a short-term Consultancy to oversee the implementation of 5 designated projects with aBi Implementing Partners.
                  </p>
                  <ul className="text-gray-700 list-disc pl-5 space-y-2">
                    <li>Conducted Monitoring and Validation field visits to 5 implementing partners</li>
                    <li>Carried out end of project Evaluation for 2 projects</li>
                    <li>Designed and contracted 5 companies and 2 farmer Organizations under the aBi Green Challenge Funding window 2022-2023</li>
                    <li>Inducted and trained 5 newly on boarded Companies and 2 Farmer Organization Implementing Partner agencies</li>
                    <li>Developed Key Performance Indicators embedding Climate Change, sustainability, and human rights considerations</li>
                  </ul>
                  <div className="md:hidden mt-4">
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      Project Management
                    </span>
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      Monitoring & Evaluation
                    </span>
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      Green Challenge Fund
                    </span>
                  </div>
                </div>
                <div className="md:text-left md:pl-12 md:order-2 hidden md:block">
                  <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">
                    Value Chain Development (VCD) Short Term Technical Consultant
                  </h3>
                  <h4 className="text-lg font-heading text-primary mb-4">Agriculture Business Initiative (aBi) Limited</h4>
                  <p className="text-gray-600 italic mb-2">July 2022 to March 2023</p>
                  <div>
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      Project Management
                    </span>
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      Monitoring & Evaluation
                    </span>
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      Green Challenge Fund
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Item 3 */}
            <div className="timeline-item mb-16">
              <div className="timeline-point"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-12 md:order-1">
                  <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">Value Chain Development and Marketing Specialist</h3>
                  <h4 className="text-lg font-heading text-primary mb-4">Self Help Africa</h4>
                  <p className="text-gray-600 italic mb-2">July to December 2021</p>
                  <div className="hidden md:block">
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      Honey Production
                    </span>
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      Market Linkages
                    </span>
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      Monitoring
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 md:order-2">
                  <p className="text-gray-700 mb-4">
                    My six months engagement with Self Help Africa was to develop sustainable and profitable production and marketing strategies for honey Agri-enterprises in the Karamoja and Lango sub-regions.
                  </p>
                  <ul className="text-gray-700 list-disc pl-5 space-y-2">
                    <li>Provided management oversight to 14 honey aggregation hubs, 12 cooperatives, and 15 producer groups</li>
                    <li>Conducted 45 monitoring visits to honey producing Cooperatives and farmer groups</li>
                    <li>Linked honey producers and aggregators to two off takers (Golden Bees Uganda Limited and Bee Natural)</li>
                  </ul>
                  <div className="md:hidden mt-4">
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      Honey Production
                    </span>
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      Market Linkages
                    </span>
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      Monitoring
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {showMoreExperience && (
              <>
                {/* Experience Item 4 */}
                <div className="timeline-item mb-16">
                  <div className="timeline-point"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:text-right md:pr-12 md:order-1 md:hidden">
                      <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">
                        Program Manager
                      </h3>
                      <h4 className="text-lg font-heading text-primary mb-4">Africa Development Promise (ADP - Uganda)</h4>
                      <p className="text-gray-600 italic mb-2">February 2020 to February 2021</p>
                      <div className="hidden md:block">
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Cooperative Development
                        </span>
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Solar Energy
                        </span>
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Women Empowerment
                        </span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 md:order-1">
                      <p className="text-gray-700 mb-4">
                        Managed agricultural cooperatives and smart village women and youth-led solar power project.
                      </p>
                      <ul className="text-gray-700 list-disc pl-5 space-y-2">
                        <li>Built capacity of 165 leaders from 25 Cooperatives engaged in different value chains</li>
                        <li>Linked 9 women's mushroom growing groups to partners for production support and value addition</li>
                        <li>Identified and assessed 24 mushrooms out-growers to increase production</li>
                        <li>Facilitated registration with PELUM Uganda and onboarded Master Card Foundation for financial literacy training</li>
                      </ul>
                      <div className="md:hidden mt-4">
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Cooperative Development
                        </span>
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Solar Energy
                        </span>
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Women Empowerment
                        </span>
                      </div>
                    </div>
                    <div className="md:text-left md:pl-12 md:order-2 hidden md:block">
                      <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">
                        Program Manager
                      </h3>
                      <h4 className="text-lg font-heading text-primary mb-4">Africa Development Promise (ADP - Uganda)</h4>
                      <p className="text-gray-600 italic mb-2">February 2020 to February 2021</p>
                      <div>
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Cooperative Development
                        </span>
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Solar Energy
                        </span>
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Women Empowerment
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Item 5 */}
                <div className="timeline-item mb-16">
                  <div className="timeline-point"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:text-right md:pr-12 md:order-1">
                      <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">
                        Markets and Trade Manager
                      </h3>
                      <h4 className="text-lg font-heading text-primary mb-4">Farm Concern International</h4>
                      <p className="text-gray-600 italic mb-2">March 2016 to December 2019</p>
                      <div className="hidden md:block">
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Market Research
                        </span>
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Value Chain Analysis
                        </span>
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Grantee Management
                        </span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 md:order-2">
                      <p className="text-gray-700 mb-4">
                        Responsible for developing work plans, budgets, and reports for the central, Busoga, Teso, and Karamoja sub-regions.
                      </p>
                      <ul className="text-gray-700 list-disc pl-5 space-y-2">
                        <li>Supervised 9 Grantee Organizations ensuring timely submissions and funds disbursement</li>
                        <li>Oversaw 46 Commercial Village Trade Facilitators and 8 Markets Trade Facilitators</li>
                        <li>Conducted market research and value chain analyses for 15 partner organizations</li>
                        <li>Facilitated 115 Value Chain Business Forums and built capacity of 118 farmer groups and 39 cooperatives</li>
                      </ul>
                      <div className="md:hidden mt-4">
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Market Research
                        </span>
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Value Chain Analysis
                        </span>
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Grantee Management
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Show More Button */}
            <div className="text-center mt-8">
              <button
                id="show-more-experience"
                className="bg-white hover:bg-gray-100 text-primary-600 font-medium py-2 px-6 rounded-md border border-primary transition"
                onClick={toggleMoreExperience}
              >
                {showMoreExperience ? "Show Less" : "Show More Experience"}
              </button>
            </div>

            {/* Hidden Experience Items */}
            {showMoreExperience && (
              <>
                {/* Experience Item 4 */}
                <div className="timeline-item mb-16 mt-16">
                  <div className="timeline-point"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:text-right md:pr-12 md:order-1 md:hidden">
                      <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">Program Manager</h3>
                      <h4 className="text-lg font-heading text-primary mb-4">Africa Development Promise (ADP - Uganda)</h4>
                      <p className="text-gray-600 italic mb-2">February 2020 to February 2021</p>
                      <div className="hidden md:block">
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Cooperative Development
                        </span>
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Solar Power
                        </span>
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Women Empowerment
                        </span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 md:order-1">
                      <p className="text-gray-700 mb-4">
                        Managed Agricultural Cooperatives and smart village women and youth led Solar power project.
                      </p>
                      <ul className="text-gray-700 list-disc pl-5 space-y-2">
                        <li>Built capacity of 165 leaders from 25 Cooperatives engaged in different value chains</li>
                        <li>Linked 9 women mushroom growing groups to a Partner Organization for production and value addition</li>
                        <li>Identified 8 new Cooperatives in Kasangati town council for vegetable production and coffee development</li>
                        <li>Facilitated the process of registering ADP with Participatory Ecological Land Use Management (PELUM) Uganda</li>
                      </ul>
                      <div className="md:hidden mt-4">
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Cooperative Development
                        </span>
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Solar Power
                        </span>
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Women Empowerment
                        </span>
                      </div>
                    </div>
                    <div className="md:text-left md:pl-12 md:order-2 hidden md:block">
                      <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">Program Manager</h3>
                      <h4 className="text-lg font-heading text-primary mb-4">Africa Development Promise (ADP - Uganda)</h4>
                      <p className="text-gray-600 italic mb-2">February 2020 to February 2021</p>
                      <div>
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Cooperative Development
                        </span>
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Solar Power
                        </span>
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Women Empowerment
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Item 5 */}
                <div className="timeline-item mb-16">
                  <div className="timeline-point"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:text-right md:pr-12 md:order-1">
                      <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">Markets and Trade Manager</h3>
                      <h4 className="text-lg font-heading text-primary mb-4">Farm Concern International</h4>
                      <p className="text-gray-600 italic mb-2">March 2016 to December 2019</p>
                      <div className="hidden md:block">
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Market Research
                        </span>
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Value Chain Analysis
                        </span>
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Market Linkages
                        </span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 md:order-2">
                      <p className="text-gray-700 mb-4">
                        Responsible for market development across Central, Busoga, Teso and Karamoja Sub-regions.
                      </p>
                      <ul className="text-gray-700 list-disc pl-5 space-y-2">
                        <li>Supervised 9 Grantee Organizations, ensuring accountabilities and timely fund disbursement</li>
                        <li>Oversaw 46 Commercial Village Trade Facilitators and 8 Markets Trade Facilitators</li>
                        <li>Conducted market research/Value chain Analyses for 15 FCI Partner Organizations</li>
                        <li>Facilitated 115 Value Chain Business Forums</li>
                        <li>Conducted Capacity Building sessions for 118 Small Holder Farmer Groups and 39 Cooperatives</li>
                      </ul>
                      <div className="md:hidden mt-4">
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Market Research
                        </span>
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Value Chain Analysis
                        </span>
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          Market Linkages
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">Areas of Expertise</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg shadow-md p-6 transition transform hover:-translate-y-1 hover:shadow-lg">
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-network-wired"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-800 mb-3">Community Development</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>Critical analysis of Socio-Economic aspects affecting community development</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>Community mobilization and capacity building</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>High facilitation skills using participatory approaches</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-md p-6 transition transform hover:-translate-y-1 hover:shadow-lg">
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-800 mb-3">Project Management</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>Project design, implementation, and review</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>Budget planning & forecasting</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>Performance management & measurement</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>Team building and motivation</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-md p-6 transition transform hover:-translate-y-1 hover:shadow-lg">
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-800 mb-3">Stakeholder Engagement</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>Stakeholder mapping, analysis, and engagement</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>Coordination with development partners</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>Human and financial resource mobilization</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>Partnership development</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-md p-6 transition transform hover:-translate-y-1 hover:shadow-lg">
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-seedling"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-800 mb-3">Agricultural Development</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>Bio-intensive agriculture and entrepreneurship</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>Value chain analysis and development</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>Market research and linkages</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>Agro-ecological approaches</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-md p-6 transition transform hover:-translate-y-1 hover:shadow-lg">
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-800 mb-3">Cooperative Development</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>Cooperative formation and strengthening</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>Enterprise selection and development</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>Collective production and marketing</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>SACCO formation and management</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-md p-6 transition transform hover:-translate-y-1 hover:shadow-lg">
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-file-alt"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-800 mb-3">Reporting & Compliance</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>Report writing and presentation</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>Facilitating public policy and governance</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>Regulatory compliance</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>Records management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">Education & Certifications</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-semibold text-gray-800 mb-6">Formal Education</h3>

              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h4 className="text-xl font-heading font-semibold text-gray-800 mb-2">Master of Development Practice (MDP)</h4>
                <p className="text-primary mb-2">Regis University Denver - Colorado USA</p>
                <p className="text-gray-600">2020</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h4 className="text-xl font-heading font-semibold text-gray-800 mb-2">Bachelor's Degree in Social Work and Social Administration</h4>
                <p className="text-primary mb-2">Uganda Christian University</p>
                <p className="text-gray-600">2006</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-xl font-heading font-semibold text-gray-800 mb-2">Diploma in Community Development</h4>
                <p className="text-primary mb-2">Nsamizi Training Institute for Social Development</p>
                <p className="text-gray-600">2001</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-semibold text-gray-800 mb-6">Professional Certification & Training</h3>

              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                    <h4 className="text-lg font-heading font-semibold text-gray-800 mb-1">Bio-intensive Agriculture & Entrepreneurship</h4>
                    <p className="text-primary text-sm">Manor House Agricultural Training Center, Kitale Kenya</p>
                    <p className="text-gray-600 text-sm">2014</p>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <h4 className="text-lg font-heading font-semibold text-gray-800 mb-1">Value Chain Analysis & Market Research</h4>
                    <p className="text-primary text-sm">FCI Headquarters Nairobi Kenya</p>
                    <p className="text-gray-600 text-sm">2018</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                    <h4 className="text-lg font-heading font-semibold text-gray-800 mb-1">TOT Certificate in ECCD</h4>
                    <p className="text-primary text-sm">Health Manpower Development Centre, Mbale</p>
                    <p className="text-gray-600 text-sm">2003</p>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <h4 className="text-lg font-heading font-semibold text-gray-800 mb-1">Certificate in Strategic Planning</h4>
                    <p className="text-primary text-sm">St. Andrews Community Centre</p>
                    <p className="text-gray-600 text-sm">2003</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                    <h4 className="text-lg font-heading font-semibold text-gray-800 mb-1">TOT Certificate in Psycho-social Support to OVCs</h4>
                    <p className="text-primary text-sm">Soroti flying School</p>
                    <p className="text-gray-600 text-sm">2017</p>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <h4 className="text-lg font-heading font-semibold text-gray-800 mb-1">Mindset Change for Sustainable Transformation</h4>
                    <p className="text-primary text-sm">C.I.M Center, Yatta, Machakos Kenya</p>
                    <p className="text-gray-600 text-sm">2019</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">Areas of Expertise</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Expertise Card 1 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="text-primary text-3xl mb-4">
                <FaUsers />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-800 mb-3">Community Mobilization</h3>
              <p className="text-gray-700">
                Expert in organizing, engaging, and empowering communities through participatory methods for sustainable development initiatives.
              </p>
            </div>
            
            {/* Expertise Card 2 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="text-primary text-3xl mb-4">
                <FaSeedling />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-800 mb-3">Agro-Ecological Approaches</h3>
              <p className="text-gray-700">
                Implementation of sustainable farming practices that enhance ecosystem services while improving agricultural productivity.
              </p>
            </div>
            
            {/* Expertise Card 3 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="text-primary text-3xl mb-4">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-800 mb-3">Value Chain Analysis</h3>
              <p className="text-gray-700">
                Comprehensive assessment of agricultural value chains to identify bottlenecks and opportunities for increased efficiency and profitability.
              </p>
            </div>
            
            {/* Expertise Card 4 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="text-primary text-3xl mb-4">
                <FaHandshake />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-800 mb-3">Stakeholder Engagement</h3>
              <p className="text-gray-700">
                Building strategic partnerships and coalitions among diverse stakeholders to create synergies for community-led development.
              </p>
            </div>
            
            {/* Expertise Card 5 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="text-primary text-3xl mb-4">
                <FaFileAlt />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-800 mb-3">Project Design & Management</h3>
              <p className="text-gray-700">
                Designing, implementing, and evaluating development projects with a focus on sustainability, inclusion, and measurable impact.
              </p>
            </div>
            
            {/* Expertise Card 6 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="text-primary text-3xl mb-4">
                <FaUserTie />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-800 mb-3">Capacity Building</h3>
              <p className="text-gray-700">
                Training and mentoring stakeholders in various aspects of community development, leadership, and sustainable business practices.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section id="education" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">Education & Certification</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Formal Education Column */}
            <div>
              <h3 className="text-2xl font-heading font-semibold text-gray-800 mb-6 flex items-center">
                <FaGraduationCap className="mr-3 text-primary" /> Formal Education
              </h3>
              
              {/* Education Item 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h4 className="text-xl font-heading font-semibold text-gray-800 mb-2">Master of Development Practice</h4>
                <p className="text-lg text-primary mb-2">Regis University, Denver - Colorado, USA</p>
                <p className="text-gray-600 mb-0">2020</p>
              </div>
              
              {/* Education Item 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h4 className="text-xl font-heading font-semibold text-gray-800 mb-2">Bachelor's Degree in Social Work and Social Administration</h4>
                <p className="text-lg text-primary mb-2">Uganda Christian University</p>
                <p className="text-gray-600 mb-0">2006</p>
              </div>
              
              {/* Education Item 3 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-xl font-heading font-semibold text-gray-800 mb-2">Diploma in Community Development</h4>
                <p className="text-lg text-primary mb-2">Nsamizi Training Institute for Social Development</p>
                <p className="text-gray-600 mb-0">2001</p>
              </div>
            </div>
            
            {/* Professional Certifications Column */}
            <div>
              <h3 className="text-2xl font-heading font-semibold text-gray-800 mb-6 flex items-center">
                <FaTools className="mr-3 text-primary" /> Professional Certifications
              </h3>
              
              {/* Certification Item 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h4 className="text-xl font-heading font-semibold text-gray-800 mb-2">Bio-intensive Agriculture and Entrepreneurship</h4>
                <p className="text-lg text-primary mb-2">Manor House Agricultural Training Center – Kitale, Kenya</p>
                <p className="text-gray-600 mb-0">2014</p>
              </div>
              
              {/* Certification Item 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h4 className="text-xl font-heading font-semibold text-gray-800 mb-2">Value Chain Analysis, Business Incubation and Market Research</h4>
                <p className="text-lg text-primary mb-2">FCI Headquarters – Nairobi, Kenya</p>
                <p className="text-gray-600 mb-0">2018</p>
              </div>
              
              {/* Certification Item 3 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-xl font-heading font-semibold text-gray-800 mb-2">Mindset Change for Sustainable Transformation</h4>
                <p className="text-lg text-primary mb-2">C.I.M Center, Yatta, Machakos, Kenya</p>
                <p className="text-gray-600 mb-0">2019</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Agricultural Development Project"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">Smart Village Solar Power Project</h3>
                <p className="text-gray-600 mb-4">
                  Led women and youth-focused initiatives to bring sustainable solar power solutions to rural communities, creating economic opportunities and improving quality of life.
                </p>
                <div className="flex flex-wrap mb-4">
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                    Solar Energy
                  </span>
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                    Women Empowerment
                  </span>
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                    Economic Development
                  </span>
                </div>
                <button
                  className="text-primary hover:text-primary-700 font-medium transition"
                  onClick={() => openProjectModal(1)}
                >
                  View Details <i className="fas fa-arrow-right ml-1"></i>
                </button>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Honey Value Chain Project"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">Honey Value Chain Development</h3>
                <p className="text-gray-600 mb-4">
                  Developed sustainable and profitable honey production and marketing strategies for communities in Karamoja and Lango sub-regions, boosting local economies.
                </p>
                <div className="flex flex-wrap mb-4">
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                    Honey Production
                  </span>
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                    Market Development
                  </span>
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                    Value Chain
                  </span>
                </div>
                <button
                  className="text-primary hover:text-primary-700 font-medium transition"
                  onClick={() => openProjectModal(2)}
                >
                  View Details <i className="fas fa-arrow-right ml-1"></i>
                </button>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Cooperative Development"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">Agricultural Cooperative Development</h3>
                <p className="text-gray-600 mb-4">
                  Strengthened capacity of farmer cooperatives, facilitating access to markets, inputs, and technical assistance for improved agricultural productivity and incomes.
                </p>
                <div className="flex flex-wrap mb-4">
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                    Cooperative Formation
                  </span>
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                    Capacity Building
                  </span>
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                    Market Access
                  </span>
                </div>
                <button
                  className="text-primary hover:text-primary-700 font-medium transition"
                  onClick={() => openProjectModal(3)}
                >
                  View Details <i className="fas fa-arrow-right ml-1"></i>
                </button>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1524085904803-5b6817469b9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Green Challenge Fund"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">Green Challenge Fund Implementation</h3>
                <p className="text-gray-600 mb-4">
                  Designed and implemented climate-smart agricultural initiatives, embedding sustainability and environmental stewardship within agricultural value chains.
                </p>
                <div className="flex flex-wrap mb-4">
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                    Climate Change
                  </span>
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                    Sustainable Agriculture
                  </span>
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                    Fund Management
                  </span>
                </div>
                <button
                  className="text-primary hover:text-primary-700 font-medium transition"
                  onClick={() => openProjectModal(4)}
                >
                  View Details <i className="fas fa-arrow-right ml-1"></i>
                </button>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Village Business Forums"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">Village Business Forums & Market Linkages</h3>
                <p className="text-gray-600 mb-4">
                  Facilitated over 100 business forums connecting smallholder farmers with market actors, input suppliers, and service providers across various agricultural value chains.
                </p>
                <div className="flex flex-wrap mb-4">
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                    Business Networks
                  </span>
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                    Market Linkages
                  </span>
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                    Farmer Empowerment
                  </span>
                </div>
                <button
                  className="text-primary hover:text-primary-700 font-medium transition"
                  onClick={() => openProjectModal(5)}
                >
                  View Details <i className="fas fa-arrow-right ml-1"></i>
                </button>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1528750717929-32abb73d3bd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="SACCO Development"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">SACCO Formation & Financial Inclusion</h3>
                <p className="text-gray-600 mb-4">
                  Established and strengthened Savings and Credit Cooperatives (SACCOs) enabling rural communities to access financial services, save collectively, and invest in agricultural enterprises.
                </p>
                <div className="flex flex-wrap mb-4">
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                    Financial Inclusion
                  </span>
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                    SACCO Development
                  </span>
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                    Rural Finance
                  </span>
                </div>
                <button
                  className="text-primary hover:text-primary-700 font-medium transition"
                  onClick={() => openProjectModal(6)}
                >
                  View Details <i className="fas fa-arrow-right ml-1"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-heading font-semibold text-gray-800 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-md mr-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-700">
                      C/O aBi Development Limited<br />
                      Umoja House, 2nd Floor Plot 20,<br />
                      Nakasero Road Kampala (U)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-md mr-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-700">fredwalyaula@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-md mr-4">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-700">+256 772 883 867</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-md mr-4">
                    <i className="fas fa-user-friends"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-semibold text-gray-800 mb-1">Professional Networks</h4>
                    <div className="flex space-x-4 mt-2">
                      <a
                        href="#"
                        className="bg-gray-200 hover:bg-primary hover:text-white text-gray-700 p-2 rounded-full transition-colors duration-300"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-200 hover:bg-primary hover:text-white text-gray-700 p-2 rounded-full transition-colors duration-300"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        href="#"
                        className="bg-gray-200 hover:bg-primary hover:text-white text-gray-700 p-2 rounded-full transition-colors duration-300"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-semibold text-gray-800 mb-6">Send Me a Message</h3>

              <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-600 text-white font-medium py-2 px-6 rounded-md transition"
                  disabled={formStatus.isSubmitting}
                >
                  {formStatus.isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i> Sending...
                    </>
                  ) : formStatus.isSubmitted ? (
                    <>
                      <i className="fas fa-check mr-2"></i> Message Sent!
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeProjectModal}
        project={selectedProject ? projectData[selectedProject] : null}
      />
      
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </>
  );
};

export default Home;
