const projects = [
  {
    title: 'AI DevOps Assistant ⭐⭐⭐⭐⭐',
    description: 'AI-powered operational assistant for intelligent DevOps automation, log analysis, root cause analysis, and infrastructure troubleshooting.',
    image: '/projects/ai-devops.jpg',
    features: [
      'AI Root Cause Analysis',
      'Jenkins Log Summarization',
      'Docker Troubleshooting',
      'Kubernetes Error Explanations',
      'Linux Command Generator',
      'Incident Summary Generation'
    ],
    stack: ['FastAPI', 'Docker', 'GitHub Actions', 'AWS EC2', 'Redis', 'LLM API'],
    github: 'https://github.com/adityapujari/ai-devops-assistant',
    demo: '#'
  },
  {
    title: 'Nimbus AI Platform',
    description: 'Full-stack productivity platform showcasing modern DevOps practices with containerization, CI/CD automation, and AI-powered features.',
    image: '/projects/nimbus.jpg',
    features: [
      'Docker Compose Setup',
      'GitHub Actions CI/CD',
      'Nginx Reverse Proxy',
      'Redis Caching',
      'ChromaDB Vector Memory',
      'AWS Deployment'
    ],
    stack: ['FastAPI', 'Docker Compose', 'Nginx', 'Redis', 'ChromaDB', 'AWS'],
    github: 'https://github.com/adityapujari/nimbus-ai',
    demo: '#'
  },
  {
    title: 'Terraform AWS Infrastructure',
    description: 'Complete Infrastructure-as-Code solution for provisioning production-grade AWS infrastructure with modular Terraform modules.',
    image: '/projects/terraform.jpg',
    features: [
      'VPC with Multi-AZ',
      'Security Groups',
      'EC2 Instances',
      'RDS Database',
      'Load Balancing',
      'Auto-Scaling'
    ],
    stack: ['Terraform', 'AWS', 'Bash', 'Git'],
    github: 'https://github.com/adityapujari/terraform-aws-infra',
    demo: '#'
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
    stack: ['Kubernetes', 'Prometheus', 'Grafana', 'AlertManager', 'Docker'],
    github: 'https://github.com/adityapujari/k8s-monitoring',
    demo: '#'
  },
  {
    title: 'CI/CD Pipeline with Jenkins',
    description: 'Production-style CI/CD pipeline with automated testing, Docker builds, and AWS deployments.',
    image: '/projects/cicd.jpg',
    features: [
      'Automated Testing',
      'Docker Image Build',
      'SonarQube Analysis',
      'Registry Push',
      'AWS Deployment',
      'Slack Notifications'
    ],
    stack: ['Jenkins', 'Docker', 'GitLab CI', 'SonarQube', 'AWS', 'Ansible'],
    github: 'https://github.com/adityapujari/jenkins-pipeline',
    demo: '#'
  }
];

export default projects;
