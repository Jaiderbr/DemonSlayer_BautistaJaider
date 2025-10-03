export default async function handler(req, res) {
  const { id, page, limit } = req.query; 
  let url = `https://www.demonslayer-api.com/api/v1/characters`;

  const params = new URLSearchParams();
  if (id) params.append("id", id);
  if (page) params.append("page", page);
  if (limit) params.append("limit", limit);

  if ([...params].length > 0) url += `?${params.toString()}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch characters' });
  }
}
