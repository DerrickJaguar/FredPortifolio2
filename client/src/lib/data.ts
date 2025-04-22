export interface ProjectData {
  title: string;
  description: string;
  image: string;
}

export type ProjectDataMap = {
  [key: number]: ProjectData;
};

export const projectData: ProjectDataMap = {
  1: {
    title: "Smart Village Solar Power Project",
    description: `
      <p class="mb-4">This innovative project focused on bringing sustainable solar energy solutions to underserved rural communities, with a special emphasis on women and youth empowerment.</p>
      
      <h4 class="text-xl font-heading font-semibold text-gray-800 mb-2">Key Achievements:</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Established 2 solar power kiosks run by women's groups, serving over 500 households</li>
          <li>Trained 30 youth as solar technicians, creating sustainable employment opportunities</li>
          <li>Facilitated the installation of solar systems in 12 schools and 5 health centers</li>
          <li>Reduced reliance on kerosene and other non-renewable energy sources by 60% in target communities</li>
          <li>Implemented a revolving fund mechanism allowing community members to purchase solar products through installment payments</li>
      </ul>
      
      <h4 class="text-xl font-heading font-semibold text-gray-800 mb-2">Project Impact:</h4>
      <p class="mb-4">The project created a sustainable model for rural electrification that combined environmental benefits with economic empowerment. Women operating the solar kiosks gained business management skills and steady income, while communities benefited from cleaner, more reliable energy and extended productive hours.</p>
      
      <h4 class="text-xl font-heading font-semibold text-gray-800 mb-2">Sustainability Mechanisms:</h4>
      <ul class="list-disc pl-5 space-y-1">
          <li>Establishment of maintenance funds and trained local technicians</li>
          <li>Integration with local cooperative structures for ongoing management</li>
          <li>Partnership with solar equipment suppliers for continued technical support</li>
          <li>Knowledge transfer to local government for scaling to additional communities</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  2: {
    title: "Honey Value Chain Development",
    description: `
      <p class="mb-4">Working across Karamoja and Lango sub-regions, this project focused on developing a sustainable and profitable honey value chain to improve livelihoods for rural communities.</p>
      
      <h4 class="text-xl font-heading font-semibold text-gray-800 mb-2">Key Components:</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Established 14 honey aggregation hubs serving 12 cooperatives and 15 producer groups</li>
          <li>Trained over 250 beekeepers in modern beekeeping techniques, hive management, and honey harvesting</li>
          <li>Developed quality assurance protocols and processing standards to meet market requirements</li>
          <li>Facilitated direct market linkages between producers and two major honey processors</li>
          <li>Introduced value-added products including beeswax candles, propolis, and specialized honey varieties</li>
      </ul>
      
      <h4 class="text-xl font-heading font-semibold text-gray-800 mb-2">Results Achieved:</h4>
      <p class="mb-4">The project resulted in a 65% increase in honey production volumes and a 45% increase in household incomes for participating beekeepers. Quality improvements led to premium pricing, with organic certification processes initiated for export markets.</p>
      
      <h4 class="text-xl font-heading font-semibold text-gray-800 mb-2">Environmental Benefits:</h4>
      <ul class="list-disc pl-5 space-y-1">
          <li>Enhanced pollination services benefiting local crop production</li>
          <li>Increased community interest in forest conservation to protect bee habitats</li>
          <li>Reduced bush burning practices due to recognition of impact on bee populations</li>
          <li>Integration of beekeeping with agroforestry initiatives</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  3: {
    title: "Agricultural Cooperative Development",
    description: `
      <p class="mb-4">This comprehensive initiative focused on strengthening agricultural cooperatives as vehicles for smallholder farmer development, market access, and economic empowerment.</p>
      
      <h4 class="text-xl font-heading font-semibold text-gray-800 mb-2">Strategic Interventions:</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Capacity building for 165 cooperative leaders from 25 cooperatives on governance, financial management, and business planning</li>
          <li>Enterprise selection and development based on market opportunity and agro-ecological conditions</li>
          <li>Implementation of collective marketing mechanisms to secure better prices and consistent market access</li>
          <li>Establishment of savings and credit components within cooperatives to facilitate input financing</li>
          <li>Development of digital platforms for record-keeping, production monitoring, and market information</li>
      </ul>
      
      <h4 class="text-xl font-heading font-semibold text-gray-800 mb-2">Key Results:</h4>
      <p class="mb-4">Cooperatives achieved an average 50% increase in member participation and 70% improvement in financial management practices. Collective marketing initiatives resulted in 30-40% better pricing for farm produce compared to individual selling.</p>
      
      <h4 class="text-xl font-heading font-semibold text-gray-800 mb-2">Success Factors:</h4>
      <ul class="list-disc pl-5 space-y-1">
          <li>Participatory approach to cooperative development that emphasized member ownership</li>
          <li>Integration of women and youth leadership within cooperative structures</li>
          <li>Market-oriented production planning linked to specific buyer requirements</li>
          <li>Building strong partnerships with input suppliers, financial institutions, and extension services</li>
          <li>Regular performance monitoring and business planning reviews</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1571945227444-5856cd40e6b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  4: {
    title: "Green Challenge Fund Implementation",
    description: `
      <p class="mb-4">This innovative funding program supported climate-smart agricultural initiatives, embedding sustainability and environmental stewardship within agricultural value chains.</p>
      
      <h4 class="text-xl font-heading font-semibold text-gray-800 mb-2">Program Components:</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Designed and contracted 5 companies and 2 farmer organizations under the Green Challenge Funding window</li>
          <li>Developed key performance indicators embedding climate change, sustainability, and human rights considerations</li>
          <li>Supported adoption of renewable energy technologies in agricultural processing</li>
          <li>Promoted soil conservation practices and water management techniques</li>
          <li>Facilitated carbon credit development for sustainable agricultural practices</li>
      </ul>
      
      <h4 class="text-xl font-heading font-semibold text-gray-800 mb-2">Environmental Impacts:</h4>
      <p class="mb-4">Projects under the fund achieved a 40% reduction in greenhouse gas emissions from agricultural activities, 30% improvement in water use efficiency, and significant increases in soil organic matter in participating farms.</p>
      
      <h4 class="text-xl font-heading font-semibold text-gray-800 mb-2">Economic Benefits:</h4>
      <ul class="list-disc pl-5 space-y-1">
          <li>Premium market access for sustainably produced agricultural products</li>
          <li>Reduced production costs through improved resource efficiency</li>
          <li>Increased resilience to climate variability and associated production risks</li>
          <li>Development of new revenue streams through ecosystem services</li>
          <li>Enhanced capacity to meet emerging sustainability requirements in export markets</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1507832321772-e86cc0452e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  5: {
    title: "Village Business Forums & Market Linkages",
    description: `
      <p class="mb-4">This initiative created platforms for business networking and market development at the village level, connecting smallholder farmers with market actors across the agricultural value chain.</p>
      
      <h4 class="text-xl font-heading font-semibold text-gray-800 mb-2">Key Activities:</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Facilitated 115 Value Chain Business Forums bringing together producers, traders, processors, input suppliers, and service providers</li>
          <li>Conducted market research and value chain analyses to identify bottlenecks and opportunities</li>
          <li>Developed business models for various agricultural enterprises based on market demand</li>
          <li>Established digital platforms for market information sharing and virtual networking</li>
          <li>Created contract farming arrangements between farmer groups and reliable buyers</li>
      </ul>
      
      <h4 class="text-xl font-heading font-semibold text-gray-800 mb-2">Results Achieved:</h4>
      <p class="mb-4">The business forums resulted in formalized marketing arrangements for 65% of participating farmer groups, with an average 35% increase in volumes traded and 25% improvement in price stability compared to previous seasons.</p>
      
      <h4 class="text-xl font-heading font-semibold text-gray-800 mb-2">Success Factors:</h4>
      <ul class="list-disc pl-5 space-y-1">
          <li>Regular schedule of forums created momentum and built stakeholder trust</li>
          <li>Practical focus on solving specific value chain challenges rather than general discussions</li>
          <li>Follow-up mechanisms to ensure implementation of agreed actions</li>
          <li>Documentation and sharing of success stories to motivate continued participation</li>
          <li>Integration with local government development planning processes</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  6: {
    title: "SACCO Formation & Financial Inclusion",
    description: `
      <p class="mb-4">This initiative focused on establishing and strengthening Savings and Credit Cooperatives (SACCOs) in rural communities, enabling access to financial services, promoting savings culture, and funding agricultural enterprises.</p>
      
      <h4 class="text-xl font-heading font-semibold text-gray-800 mb-2">Implementation Approach:</h4>
      <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Trained farmer groups in Accumulated Savings and Lending Association methodology</li>
          <li>Developed governance structures and operations procedures for SACCOs</li>
          <li>Created agricultural loan products tailored to seasonal farming cycles</li>
          <li>Established linkages with formal financial institutions for additional capital access</li>
          <li>Implemented digital record-keeping systems for transparency and efficiency</li>
      </ul>
      
      <h4 class="text-xl font-heading font-semibold text-gray-800 mb-2">Achievements:</h4>
      <p class="mb-4">Two well-established SACCOs reached total savings of UGX 37,000,000 within 10 months of operation. Over 200 smallholder farmers accessed agricultural loans, with a 95% repayment rate, demonstrating the viability of the model.</p>
      
      <h4 class="text-xl font-heading font-semibold text-gray-800 mb-2">Impact on Agricultural Production:</h4>
      <ul class="list-disc pl-5 space-y-1">
          <li>Timely access to inputs through SACCO loans increased productivity by 40%</li>
          <li>Ability to hold produce for better market prices rather than distress selling</li>
          <li>Investment in improved storage facilities reduced post-harvest losses</li>
          <li>Gradual transition from subsistence to commercial farming mindset</li>
          <li>Enhanced household financial security and resilience to shocks</li>
      </ul>
    `,
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  }
};
