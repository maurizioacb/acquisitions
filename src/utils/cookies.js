export const cookies = {
  getOptions: () => ({
    httpOnly: true, // Evita que JavaScript malicioso en el navegador robe la cookie (protección contra XSS)
    secure: process.env.NODE_ENV === 'production', // Solo se envía por HTTPS si estamos en producción
    sameSite: 'strict', // Protege contra ataques CSRF
    maxAge: 15 * 60 * 1000, // La cookie expira automáticamente a los 15 minutos[cite: 7]
    path: '/', // Disponible en toda la aplicación
  }),

  set: (res, name, value, options = {}) => {
    res.cookie(name, value, { ...cookies.getOptions(), ...options });
  },

  clear: (res, name, options = {}) => {
    res.clearCookie(name, { ...cookies.getOptions(), ...options });
  },

  get: (req, name) => {
    return req.cookies[name];
  },
};