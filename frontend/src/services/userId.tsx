import { v4 as uuidv4 } from 'uuid';

const USER_ID_KEY: string = 'user_id';

export const getUserId = (): string => {
    let userId: string | null = localStorage.getItem(USER_ID_KEY);

    if (!userId) {
        userId = uuidv4();
        localStorage.setItem(USER_ID_KEY, userId);
    }

    return userId;
};

export const clearUserId = (): void => {
    localStorage.removeItem(USER_ID_KEY);
};
