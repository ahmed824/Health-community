const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new ApiError(
        errorData.message || `HTTP error! status: ${response.status}`,
        response.status,
        errorData
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(
      error.message || "Network error",
      0,
      { message: error.message }
    );
  }
}

// GET request
export async function get(endpoint, options = {}) {
  return request(endpoint, {
    method: "GET",
    ...options,
  });
}

// POST request
export async function post(endpoint, data, options = {}) {
  return request(endpoint, {
    method: "POST",
    body: JSON.stringify(data),
    ...options,
  });
}

// PUT request
export async function put(endpoint, data, options = {}) {
  return request(endpoint, {
    method: "PUT",
    body: JSON.stringify(data),
    ...options,
  });
}

// DELETE request
export async function del(endpoint, options = {}) {
  return request(endpoint, {
    method: "DELETE",
    ...options,
  });
}

// PATCH request
export async function patch(endpoint, data, options = {}) {
  return request(endpoint, {
    method: "PATCH",
    body: JSON.stringify(data),
    ...options,
  });
}

// Upload file
export async function upload(endpoint, file, options = {}) {
  const formData = new FormData();
  formData.append("file", file);

  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    headers: {
      ...options.headers,
    },
    body: formData,
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new ApiError(
        errorData.message || `HTTP error! status: ${response.status}`,
        response.status,
        errorData
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(
      error.message || "Upload failed",
      0,
      { message: error.message }
    );
  }
}

export { ApiError }; 