/**
 * BloomFlow API Client & Full-Stack Bridge
 * Connects HTML/JS/Bootstrap frontend to Node.js/Express & MongoDB backend
 */

const API_BASE = (window.location.origin && window.location.origin.startsWith('http') && !window.location.origin.startsWith('file:'))
    ? window.location.origin
    : 'http://localhost:5000';

const API_URL = `${API_BASE}/api`;

// Generic Fetch Wrapper
async function request(endpoint, options = {}) {
    const token = localStorage.getItem('bloomflow_jwt_token');
    const headers = {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
        ...options.headers
    };

    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            ...options,
            headers
        });

        const data = await response.json();
        return { ok: response.ok, status: response.status, data };
    } catch (error) {
        console.warn(`[BloomFlow API]: Failed to reach server at ${endpoint}. Network error:`, error.message);
        return { ok: false, status: 0, data: null, error: error.message };
    }
}

// 1. Auth API
const authAPI = {
    async register(userData) {
        const res = await request('/auth/register', {
            method: 'POST',
            body: JSON.stringify(userData)
        });
        if (res.ok && res.data.token) {
            localStorage.setItem('bloomflow_jwt_token', res.data.token);
            localStorage.setItem('bloomflow_active_user', JSON.stringify(res.data.user));
        }
        return res;
    },

    async login(credentials) {
        const res = await request('/auth/login', {
            method: 'POST',
            body: JSON.stringify(credentials)
        });
        if (res.ok && res.data.token) {
            localStorage.setItem('bloomflow_jwt_token', res.data.token);
            localStorage.setItem('bloomflow_active_user', JSON.stringify(res.data.user));
        }
        return res;
    },

    async adminLogin(credentials) {
        const res = await request('/auth/admin-login', {
            method: 'POST',
            body: JSON.stringify(credentials)
        });
        if (res.ok && res.data.token) {
            localStorage.setItem('bloomflow_admin_token', res.data.token);
            localStorage.setItem('bloomflow_active_admin', JSON.stringify(res.data.user));
        }
        return res;
    },

    async getProfile() {
        return await request('/auth/me');
    },

    getCurrentUser() {
        try {
            return JSON.parse(localStorage.getItem('bloomflow_active_user'));
        } catch {
            return null;
        }
    },

    logout() {
        localStorage.removeItem('bloomflow_jwt_token');
        localStorage.removeItem('bloomflow_active_user');
        localStorage.removeItem('bloomflow_admin_token');
        localStorage.removeItem('bloomflow_active_admin');
        window.location.href = 'login.html';
    }
};

// 2. Product API
const productAPI = {
    async getAll(params = {}) {
        const query = new URLSearchParams(params).toString();
        return await request(`/products${query ? '?' + query : ''}`);
    },

    async getById(id) {
        return await request(`/products/${id}`);
    },

    async create(product) {
        return await request('/products', {
            method: 'POST',
            body: JSON.stringify(product)
        });
    },

    async update(id, product) {
        return await request(`/products/${id}`, {
            method: 'PUT',
            body: JSON.stringify(product)
        });
    },

    async delete(id) {
        return await request(`/products/${id}`, {
            method: 'DELETE'
        });
    }
};

// 3. Order API
const orderAPI = {
    async create(orderData) {
        return await request('/orders', {
            method: 'POST',
            body: JSON.stringify(orderData)
        });
    },

    async getMyOrders(email) {
        return await request(`/orders/my-orders?email=${encodeURIComponent(email)}`);
    },

    async getAll(status = '') {
        const query = status ? `?status=${encodeURIComponent(status)}` : '';
        return await request(`/orders${query}`);
    },

    async updateStatus(id, orderStatus, paymentStatus) {
        return await request(`/orders/${id}/status`, {
            method: 'PUT',
            body: JSON.stringify({ orderStatus, paymentStatus })
        });
    },

    async cancel(id, reason = '') {
        return await request(`/orders/${id}/cancel`, {
            method: 'POST',
            body: JSON.stringify({ reason })
        });
    },

    async delete(id) {
        return await request(`/orders/${id}`, {
            method: 'DELETE'
        });
    }
};

// 4. Booking API
const bookingAPI = {
    async create(bookingData) {
        return await request('/bookings', {
            method: 'POST',
            body: JSON.stringify(bookingData)
        });
    },

    async getMyBookings(email) {
        return await request(`/bookings/my-bookings?email=${encodeURIComponent(email)}`);
    },

    async getAll(status = '') {
        const query = status ? `?status=${encodeURIComponent(status)}` : '';
        return await request(`/bookings${query}`);
    },

    async updateStatus(id, status) {
        return await request(`/bookings/${id}/status`, {
            method: 'PUT',
            body: JSON.stringify({ status })
        });
    },

    async delete(id) {
        return await request(`/bookings/${id}`, {
            method: 'DELETE'
        });
    }
};

// 5. Admin & Analytics API
const adminAPI = {
    async getStats() {
        return await request('/admin/stats');
    }
};

// 6. Notifications API
const notificationAPI = {
    async getAll(params = {}) {
        const query = new URLSearchParams(params).toString();
        return await request(`/notifications${query ? '?' + query : ''}`);
    },

    async create(notificationData) {
        return await request('/notifications', {
            method: 'POST',
            body: JSON.stringify(notificationData)
        });
    },

    async markRead(id) {
        return await request(`/notifications/${id}/read`, {
            method: 'PUT'
        });
    },

    async markAllRead(params = {}) {
        return await request('/notifications/mark-all-read', {
            method: 'PUT',
            body: JSON.stringify(params)
        });
    }
};

// 7. System Health Check & Auto-Seeder
const systemAPI = {
    async checkHealth() {
        return await request('/health');
    },

    async seedDatabase() {
        return await request('/seed');
    }
};

// Server & MongoDB Live Connection Status Indicator (Disabled as requested)
function initConnectionBadge() {
    // Badge display removed from UI
}

// Global Export
window.BloomAPI = {
    auth: authAPI,
    products: productAPI,
    orders: orderAPI,
    bookings: bookingAPI,
    admin: adminAPI,
    notifications: notificationAPI,
    system: systemAPI,
    API_URL,
    API_BASE
};
