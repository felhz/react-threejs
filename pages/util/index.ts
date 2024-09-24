export const isDev = import.meta.env.MODE === 'development'
export const staticPath = isDev ? '' : '/react-threejs'
