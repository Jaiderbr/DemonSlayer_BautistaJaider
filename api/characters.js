export default async function handler(req, res) {
  const url = `https://www.demonslayer-api.com/api/v1/characters?limit=45`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch characters' });
  }
}
