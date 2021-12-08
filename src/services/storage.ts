export const STORAGE_KEYS = {
    ACCESS_TOKEN: '[]ACCESS_TOKEN',
};

export const DECIMAL_SEPARATOR = '.';

export const Storage = {
    setItem(key: string, value: string) {
        console.debug('SET ITEM', key);
        localStorage.setItem(key, value);
    },
    getItem(key: string) {
        console.debug('GET ITEM', key);
        const result = localStorage.getItem(key);
        return result || null;
    },
    removeItem(key: string) {
        console.debug('REMOVE ITEM', key);
        localStorage.removeItem(key);
    },
};
