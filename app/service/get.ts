const API_BASE = process.env.NEXT_PUBLIC_API_URL || '';

export async function fetchProjects() {
  const res = await fetch(`${API_BASE}/api/projects`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error('Failed to fetch projects');
  return res.json();
}

export async function fetchSkills() {
  const res = await fetch(`${API_BASE}/api/skills`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error('Failed to fetch skills');
  return res.json();
}

export async function fetchServices() {
  const res = await fetch(`${API_BASE}/api/services`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error('Failed to fetch services');
  return res.json();
}