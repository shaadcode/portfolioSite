

const TOKEN_KEY = "accessToken"

export const setAuthToken = (token = process.env.NEXT_PUBLIC_ADMIN_TOKEN_KEY): void => {
    if (token)
        localStorage.setItem(TOKEN_KEY, token);
};

export const getAuthToken = (): string | null => {
    return localStorage.getItem(TOKEN_KEY);
};

export const removeAuthToken = (): void => {
    localStorage.removeItem(TOKEN_KEY);
};  

export const isLoggedIn = (): boolean => {
    return !!getAuthToken();
};
