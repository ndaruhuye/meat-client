## Installed Agent Tooling

This environment includes Ponytail and Agent Skills.

### Ponytail

Ponytail lifecycle hooks are installed and should remain active.

Use Ponytail's guidance for implementation discipline:

- prefer the smallest correct solution
- follow YAGNI
- prefer existing code and dependencies
- prefer native/platform functionality
- avoid unnecessary abstractions
- avoid unnecessary files and dependencies
- do not over-engineer requested changes

Do not duplicate functionality already provided by the project.

### Agent Skills

Agent Skills are installed and available.

Before implementing a task:

1. Determine whether an installed skill is relevant.
2. Load only the relevant skill(s).
3. Follow their instructions where compatible with this project.
4. Do not load unrelated skills unnecessarily.
5. Project-specific architecture and explicit user requirements take
   precedence over generic skill recommendations.

For UI, UX, accessibility, responsive design, visual design, testing,
performance, debugging, or other specialized work, use the appropriate
installed skill when available.

### Combined Workflow

For each task:

User request
→ Ponytail simplicity discipline
→ identify relevant Agent Skills
→ inspect relevant existing code
→ reuse existing implementation
→ make the smallest coherent change
→ verify the result

Do not expand the task beyond what was requested.
