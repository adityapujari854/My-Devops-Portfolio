## 👋 About Me

Hi, I'm **Aditya Pujari**, a Final-Year Computer Engineering student passionate about **AWS Cloud, DevOps, Site Reliability Engineering (SRE), Cloud Infrastructure, and AI-assisted Engineering**. I enjoy designing scalable cloud-native applications, automating deployments, building CI/CD pipelines, and implementing modern DevOps practices using **AWS, Docker, Docker Compose, Kubernetes, Terraform, GitHub Actions, Jenkins, Linux, Nginx, Prometheus, Grafana, Python, and Bash**.

My projects focus on real-world cloud engineering, including an **AI DevOps Assistant**, **Nimbus AI Platform**, **Terraform-based AWS Infrastructure**, **Kubernetes Monitoring Stack**, and **production-style CI/CD pipelines**. I also leverage **ChatGPT, GitHub Copilot, Cursor AI, Claude, and Gemini** to enhance development productivity, debugging, documentation, and automation while following engineering best practices.

I'm actively seeking opportunities as a **DevOps Engineer, Cloud Engineer, Platform Engineer, or Site Reliability Engineer**, where I can contribute to building secure, scalable, and automated cloud infrastructure.

🌐 **Portfolio:** https://aditya-devops-portfolio.vercel.app  | 
💻 **GitHub:** https://github.com/adityapujari854  | 
🔗 **LinkedIn:** https://www.linkedin.com/in/adityapujari854/

## GitHub section (automatic)

The portfolio includes a GitHub section that fetches your profile, top repositories, recent activity, a contribution calendar and language breakdown from the GitHub API.

Quick setup:

1. Install required packages:

```bash
npm install axios react-github-calendar
# optional icons
npm install react-icons
```

2. Add environment variables. Copy the example and edit values:

```
cp .env.local.example .env.local
# then edit .env.local if needed
```

If you need higher rate limits, create a fine-grained personal access token and add `GITHUB_TOKEN` to `.env.local`. Do NOT commit tokens to the repo.

3. Run the dev server:

```bash
npm run dev
```

The GitHub UI is implemented in `components/Github/*`. The server-side proxy route is `app/api/github/route.ts` which uses `lib/github.ts` to call the GitHub API (keeps tokens server-side).

If you want, I can further polish animations, add unit tests, or add storybook snapshots.
