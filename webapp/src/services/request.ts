const url = 'http://localhost:8080';

class Request {
  async get(path: string) {
    const res = await fetch(`${url}${path}`);
    return await res.json();
  }

  async post(path: string, data: any) {
    const res = await fetch(`${url}${path}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  }
}

export default new Request();
