export const getBasePath = () => {
    return process.env.NEXT_PUBLIC_BASE_PATH || '';
};

export const getAssetPath = (path: string) => {
    const basePath = getBasePath();
    // Ensure path starts with / if not present
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${basePath}${normalizedPath}`;
};
