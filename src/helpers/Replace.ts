/**
 * Recebe o tipo de origem, e retorna um novo tipo
 */
export type Replace<T, R> = Omit<T, keyof R> & R;
