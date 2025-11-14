export default async function performRequest(path = '/v2/', params = {}) {
    params['apiKey'] = API_KEY;
    const queryString = new URLSearchParams(params).toString();

    try {
        const response = await fetch(`${API_BASE_URL}${path}?${queryString}`);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Request failed');
        }

        return await response.json();
    } catch (error) {
        console.error('Error performing request:', error);
        throw error;
    }
}

const API_KEY = process.env.REACT_APP_API_KEY;
const API_BASE_URL = process.env.REACT_APP_BASE_URL;
