const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    ...options.headers,
    "X-CSRF-Token": csrfToken,
    "Accept": "application/json",
  };

  return await fetch(url, options);
}

export async function followUser(id){
  const response = await customFetch(`/users/${id}/follow`, {method: "POST"});
  return response.json();
}

export async function unfollowUser(id){
  const response = await customFetch(`/users/${id}/follow`, {method: "DELETE"});
  return response.json();
}