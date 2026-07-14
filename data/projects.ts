const projects = [
  {
    title: 'Nimbus AI – Multi-Agent System',
    description: 'Built AI application using FastAPI and Docker for conversational workflows with integrated ChromaDB for memory storage and contextual retrieval.',
    image: '/projects/nimbus.jpg',
    features: [
      'Conversational Workflows',
      'FastAPI APIs',
      'Memory Storage',
      'Contextual Retrieval',
      'Docker Containerization',
      'AWS Deployment'
    ],
    stack: ['Python', 'FastAPI', 'Docker', 'AWS', 'ChromaDB']
  },
  {
    title: 'CI/CD Pipeline with Jenkins',
    description: 'Built CI/CD pipeline using Jenkins and GitHub reducing manual deployment steps by 50% with automated build and deployment workflows on AWS EC2.',
    image: '/projects/cicd-jenkins.jpg',
    features: [
      'Jenkins Automation',
      '50% Manual Step Reduction',
      'Automated Deployment',
      'Docker Containerization',
      'AWS EC2 Deployment',
      'Improved Consistency'
    ],
    stack: ['Jenkins', 'Docker', 'GitHub', 'AWS']
  },
  {
    title: 'Kubernetes Monitoring Stack',
    description: 'Production-ready monitoring solution with Prometheus, Grafana, and Alertmanager for comprehensive cluster observability.',
    image: '/projects/monitoring.jpg',
    features: [
      'Prometheus Metrics',
      'Grafana Dashboards',
      'AlertManager Rules',
      'Node Exporter',
      'Custom Alerts',
      'Log Aggregation'
    ],
    stack: ['Kubernetes', 'Prometheus', 'Grafana', 'AlertManager', 'Docker']
  }
];

export default projects;
